/**
 * Copyright © 2015 - 2017 EntDIY JavaEE Development Framework
 *
 * Site: https://www.entdiy.com, E-Mail: xautlx@hotmail.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.entdiy.aud.web;

import com.entdiy.aud.entity.AccountLogonLog;
import com.entdiy.aud.service.AccountLogonLogService;
import com.entdiy.core.annotation.MenuData;
import com.entdiy.core.annotation.MetaData;
import com.entdiy.core.pagination.GroupPropertyFilter;
import com.entdiy.core.pagination.JsonPage;
import com.entdiy.core.web.BaseController;
import com.entdiy.core.web.annotation.ModelEntity;
import com.entdiy.core.web.annotation.ModelPageableRequest;
import com.entdiy.core.web.annotation.ModelPropertyFilter;
import com.entdiy.core.web.json.JsonViews;
import com.fasterxml.jackson.annotation.JsonView;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@MetaData("配置管理:系统记录:账户登录记录管理")
@Controller
@RequestMapping(value = "/admin/aud/account-logon-log")
public class AccountLogonLogController extends BaseController<AccountLogonLog, Long> {

    @Autowired
    private AccountLogonLogService accountLogonLogService;

    @MenuData("配置管理:系统记录:账户登录记录")
    @RequiresPermissions("配置管理:系统记录:账户登录记录")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public String index(@ModelEntity AccountLogonLog entity, Model model) {
        return "admin/aud/accountLogonLog-index";
    }

    @RequiresPermissions("配置管理:系统记录:账户登录记录")
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @ResponseBody
    @JsonView(JsonViews.Admin.class)
    public JsonPage<AccountLogonLog> findByPage(@ModelPropertyFilter(AccountLogonLog.class) GroupPropertyFilter filter,
                                                @ModelPageableRequest Pageable pageable) {
        return accountLogonLogService.findByPage(filter, pageable);
    }

    @RequiresPermissions("配置管理:系统记录:账户登录记录")
    @RequestMapping(value = "/view", method = RequestMethod.GET)
    public String viewShow(@ModelEntity AccountLogonLog entity, Model model) {
        return "admin/aud/accountLogonLog-viewBasic";
    }
}