export const Time = {
  getBeforeFormatTime (timestamp) {
    const now = new Date().getTime()
    const diff = (now - timestamp) / 1000
    const LIMIT = {
      sec: 60,
      min: 3600,
      hour: 86400
    }
    let innerHtml = ''
    if (diff <= LIMIT.sec) {
      innerHtml = '刚刚'
    } else if (diff <= LIMIT.min) {
      innerHtml = Math.floor(diff / LIMIT.sec) + '分钟前'
    } else if (diff <= LIMIT.hour) {
      innerHtml = Math.floor(diff / LIMIT.min) + '小时前'
    } else {
      innerHtml = Math.floor(diff / LIMIT.hour) + '天前'
    }
    return innerHtml
  },
  getHelloFormatTime () {
    const now = new Date().getHours()
    let innerHtml = 'Good '
    if (now < 6) {
      innerHtml += 'night'
    } else if (now < 12) {
      innerHtml += 'morning'
    } else if (now < 18) {
      innerHtml += 'afternoon'
    } else {
      innerHtml += 'evening'
    }
    return innerHtml
  },
  // 格式化为整数位为2位
  _numberFormate (num) {
    if (num < 10) {
      return '0' + num
    }
    return '' + num
  },
  getCardNumber () {
    const now = new Date()
    const str = now.getFullYear() + this._numberFormate(now.getMonth() + 1) +
    this._numberFormate(now.getDate()) + this._numberFormate(now.getHours()) +
    this._numberFormate(now.getMinutes())
    return str
  }
}

export default formate => ({
  bind (el, binding) {
    el.innerHTML = formate(binding.value * 1000)
    el.__timeout__ = setInterval(() => {
      el.innerHTML = formate(binding.value * 1000)
    }, 60000)
  },
  unbind (el) {
    clearInterval(el.__timeout__)
  }
})
