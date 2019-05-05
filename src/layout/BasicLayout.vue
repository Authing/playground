<template>
  <div class="container">
    <div style="width: 256px">
      <!-- <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button> -->
      <a-menu
        :defaultSelectedKeys="['JWT']"
        :defaultOpenKeys="['SAMLMetadata']"
        mode="inline"
        theme="dark"
        :inlineCollapsed="collapsed"
        class="tool-menu"
      >
        <a-menu-item key="JWT">
          <a-icon type="tags" />
          <span>JWT</span>
        </a-menu-item>
        <a-menu-item key="JWK">
          <a-icon type="copy" />
          <span>生成 JWK</span>
        </a-menu-item>
        <a-menu-item key="RSA">
          <a-icon type="lock" />
          <span>RSA</span>
        </a-menu-item>
        <a-menu-item key="jwk2pem">
          <a-icon type="sync" />
          <span>JWK 转 pem</span>
        </a-menu-item>
        <a-menu-item key="gzip">
          <a-icon type="profile" />
          <span>Gzip</span>
        </a-menu-item>
        <a-menu-item key="JSON">
          <a-icon type="tool" />
          <span>JSON 格式化</span>
        </a-menu-item>
        <a-menu-item key="XML">
          <a-icon type="tool" />
          <span>XML 格式化</span>
        </a-menu-item>
        <a-menu-item key="Base64">
          <a-icon type="unlock" />
          <span>Base64 解码</span>
        </a-menu-item>
        <a-menu-item key="URL">
          <a-icon type="unlock" />
          <span>URL 解码</span>
        </a-menu-item>
        <a-menu-item key="decodeSAMLResponse">
          <a-icon type="unlock" />
          <span>SAML Response 解码</span>
        </a-menu-item>
        <a-sub-menu key="SAMLMetadata">
          <span slot="title"><a-icon type="file-text" /><span>生成 SAML Metadata</span></span>
          <a-menu-item key="SAMLSP">SP</a-menu-item>
          <a-menu-item key="SAMLIdP">IdP</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="appstore" /><span>Navigation Two</span></span>
          <a-menu-item key="9">Option 9</a-menu-item>
          <a-menu-item key="10">Option 10</a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11">Option 11</a-menu-item>
            <a-menu-item key="12">Option 12</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BasicLayout',

  data () {
    return {
      collapsed: false,
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    },
  },
}
</script>
<style scoped>
.container {
  display: flex;
}
.tool-menu {
  height: 100vh;
}
</style>
