import { ls } from '@/utils'

export default function created () {
  const userInfo = ls.get('user_info')
  const { token, timeStamp, expires } = ls.get('token') || {}
  // 如果本地缓存 token 无效
  if (!token || timeStamp + expires < Date.now()) {
    this.$store.commit('QA/user/clearLoginStatus')
  } else {
    this.$store.commit('QA/user/setToken', { token, timeStamp, expires })
    this.$store.commit('QA/user/setUserInfo', userInfo)
  }
}
