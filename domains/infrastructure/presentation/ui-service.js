export class UiService {
  static showToast(title) {
    uni.showToast({title: title, icon: 'none', duration: 2500})
  }

  static showLoading() {
    uni.showLoading({title: '加载数据', mush: true})
  }

  static hideLoading() {
    uni.hideLoading()
  }

  static setClipboardData(data) {
    uni.setClipboardData({
      data
    })
  }
}