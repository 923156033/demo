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
package com.entdiy.schedule.web;

import com.entdiy.core.annotation.MenuData;
import com.entdiy.core.pagination.GroupPropertyFilter;
import com.entdiy.core.pagination.JsonPage;
import com.entdiy.core.web.BaseController;
import com.entdiy.core.web.annotation.ModelEntity;
import com.entdiy.core.web.annotation.ModelPageableRequest;
import com.entdiy.core.web.annotation.ModelPropertyFilter;
import com.entdiy.core.web.view.OperationResult;
import com.entdiy.schedule.entity.JobBeanCfg;
import com.entdiy.schedule.service.JobBeanCfgService;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(value = "/admin/schedule/job-bean-cfg")
public class JobBeanCfgController extends BaseController<JobBeanCfg, Long> {

    @Autowired
    private JobBeanCfgService jobBeanCfgService;

    @MenuData("配置管理:计划任务管理:可配置任务管理")
    @RequiresPermissions("配置管理:计划任务管理:可配置任务管理")
    @RequestMapping(value = "", method = RequestMethod.GET)
    public String index(@ModelEntity JobBeanCfg entity) {
        return "admin/schedule/jobBeanCfg-index";
    }

    @RequiresPermissions("配置管理:计划任务管理:可配置任务管理")
    @RequestMapping(value = "/list", method = RequestMethod.GET)
    @ResponseBody
    public JsonPage<JobBeanCfg> findByPage(@ModelPropertyFilter(JobBeanCfg.class) GroupPropertyFilter filter,
                                           @ModelPageableRequest Pageable pageable) {
        return jobBeanCfgService.findByPage(filter, pageable);
    }

    @RequiresPermissions("配置管理:计划任务管理:可配置任务管理")
    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    @ResponseBody
    public OperationResult editSave(@ModelEntity JobBeanCfg entity) {
        return super.editSave(jobBeanCfgService, entity);
    }
}
