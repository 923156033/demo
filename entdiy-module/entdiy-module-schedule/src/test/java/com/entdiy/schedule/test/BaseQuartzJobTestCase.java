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
package com.entdiy.schedule.test;

import com.entdiy.schedule.BaseQuartzJobBean;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;

/**
 * Spring的支持数据库访问, 事务控制和依赖注入的JUnit4 集成测试基类.
 *
 * 子类需要定义applicationContext文件的位置, 如:
 *
 * @ContextConfiguration(locations = { "/applicationContext.xml" })
 */
@ActiveProfiles("test")
@ContextConfiguration(locations = {"classpath:/context/context-profiles.xml", "classpath*:/context/spring*.xml"})
public abstract class BaseQuartzJobTestCase extends AbstractTransactionalJUnit4SpringContextTests {

    protected final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Test
    public void execute() {
        try {
            BaseQuartzJobBean jobBean = (BaseQuartzJobBean) getJobClass().newInstance();
            jobBean.executeInternal(null);
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
    }

    abstract public Class<?> getJobClass();
}
