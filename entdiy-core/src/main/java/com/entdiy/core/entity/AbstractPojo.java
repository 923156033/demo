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
package com.entdiy.core.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.collect.Maps;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.Transient;
import java.io.Serializable;
import java.util.Map;

public abstract class AbstractPojo implements Serializable {

    private static final long serialVersionUID = 1404395927402847666L;

    /** Entity本身无用，主要用于UI层辅助参数传递 */
    @Transient
    @JsonProperty
    @ApiModelProperty(hidden = true)
    protected Map<String, Object> extraAttributes;

    @Transient
    public void addExtraAttribute(String key, Object value) {
        if (this.extraAttributes == null) {
            this.extraAttributes = Maps.newHashMap();
        }
        this.extraAttributes.put(key, value);
    }

    @Transient
    public void addExtraAttributes(Map<String, Object> extraAttributes) {
        if (this.extraAttributes == null) {
            this.extraAttributes = Maps.newHashMap();
        }
        this.extraAttributes.putAll(extraAttributes);
    }

    @Transient
    @JsonIgnore
    public String getExtraAttributesValue(String key) {
        if (extraAttributes == null) {
            return null;
        }
        Object opParams = extraAttributes.get(key);
        if (opParams == null) {
            return null;
        }
        String op = null;
        if (opParams instanceof String[]) {
            op = ((String[]) opParams)[0];
        } else if (opParams instanceof String) {
            op = (String) opParams;
        }
        return op;
    }

    public Map<String, Object> getExtraAttributes() {
        return extraAttributes;
    }

    @Transient
    public void setExtraAttributes(Map<String, Object> extraAttributes) {
        this.extraAttributes = extraAttributes;
    }
}