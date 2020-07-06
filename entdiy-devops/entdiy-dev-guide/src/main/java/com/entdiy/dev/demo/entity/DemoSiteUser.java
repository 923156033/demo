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
package com.entdiy.dev.demo.entity;

import com.entdiy.auth.entity.Account;
import com.entdiy.core.annotation.MetaData;
import com.entdiy.core.cons.GlobalConstant;
import com.entdiy.core.entity.BaseNativeEntity;
import com.entdiy.sys.entity.AttachmentFile;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.envers.Audited;

import javax.persistence.*;
import java.time.LocalDate;

@Getter
@Setter
@Accessors(chain = true)
@Access(AccessType.FIELD)
@Entity
@Table(name = "demo_SiteUser")
@MetaData(value = "前端用户账号信息")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Audited
public class DemoSiteUser extends BaseNativeEntity {

    private static final long serialVersionUID = 2686339300612095738L;

    @MetaData(value = "登录账户对象")
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

    @MetaData(value = "性别")
    @Column(length = 1)
    @Enumerated(EnumType.STRING)
    private GlobalConstant.GenderEnum gender;

    @Transient
    @JsonIgnore
    private AttachmentFile headPhoto;

    public String getHeadPhotoUrl() {
        return headPhoto == null ? null : headPhoto.getAccessUrl();
    }

    @MetaData(value = "生日")
    private LocalDate birthDay;

    @Override
    @Transient
    public String getDisplay() {
        return this.getAccount().getDisplay();
    }
}
