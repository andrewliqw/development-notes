# Packages

## org.apache.ofbiz.base.start

This package deal with command line.

- StartCommand
  - name
  - properties

- StartCommandUtil
  - StartOption
    - HELP/LOAD_DATA/PORTOFFSET/SHUTDOWN/START/STATUS/TEST

- Config
  global config for ofbiz:
    - ofbizHome
    - adminAddress/adminKey
    - portOffset
    - ofbiz.start.loaders

- StartControlPanel
  - init: return Config instance
  - start: call org.apache.ofbiz.base.container.ContainerLoader.load

## org.apache.ofbiz.base.container

  - ContainerLoader
    - Deque<Container> loadedContainers

First, load component container, which using framework/base/config/component-load.xml and framework/component-load.xml
to locate all of components. All components saved in org.apache.ofbiz.base.component.ComponentConfig.COMPONENT_CONFIG_CACHE.

Second, find other container from component configuration, if it is in ofbiz.start.loaders,
call init method for each container.

Last, start all of containers.

  - ComponentContainer:
    init method call ComponentLoaderConfig.getRootComponents() return a list of ComponentDef
    by read component-load.xml (which originally copied from framework/base/config/compoent-load.xml
    to resources directory by gradle) first, then call ComponentLoaderConfig.getComponentsFromConfig()
    to return a list of ComponentDef.

framework/base/config/component-load.xml
    <load-components parent-directory="framework"/>
    <load-components parent-directory="themes"/>
    <load-components parent-directory="applications"/>
    <load-components parent-directory="plugins"/>

    init method also call its loadComponent method.

    If ComponentDef type is SINGLE_COMPONENT, then call retrieveComponentConfig to return a ComponentConfig instance.
    If ComponentDef type is COMPONENT_DIRECTORY, recursive calling like this:
    loadComponent -> loadComponentDirectory -> loadComponentsInDirectoryUsingLoadFile
    -> ComponentLoaderConfig.getComponentsFromConfig() -> loadComponent.

    retrieveComponentConfig call ComponentConfig.getComponentConfig to load each component.

    Eventually, all of component loaded and saved to ComponentConfig.COMPONENT_CONFIG_CACHE.

framework/component-load.xml
    <load-component component-location="base"/>
    <load-component component-location="entity"/>
    <load-component component-location="security"/>
    <load-component component-location="datafile"/>
    <load-component component-location="minilang"/>
    <load-component component-location="common"/>
    <load-component component-location="service"/>
    <load-component component-location="catalina"/>
    <load-component component-location="entityext"/>
    <load-component component-location="webapp"/>
    <load-component component-location="widget"/>
    <load-component component-location="testtools"/>
    <load-component component-location="webtools"/>

  - ContainerConfig
    - PropertyChildren: interface
    - Configuration

## org.apache.ofbiz.base.component

  - ComponentLoaderConfig
    - ComponentDef

  - ComponentConfig: model ofbiz-component.xml
    - ComponentConfigCache: save all component config

    - EntityResourceInfo
    - KeystoreInfo
    - ResourceInfo
    - ResourceLoaderInfo
    - ServiceResourceInfo
    - WebappInfo
    - configurations: ContainerConfig.Configuration

## org.apache.ofbiz.catalina.container

  - CatalinaContainer
    - init
      - prepareTomcatServer
      - prepareTomcatEngine
      - prepareHost
