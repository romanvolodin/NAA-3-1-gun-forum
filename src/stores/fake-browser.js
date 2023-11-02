import { defineStore } from 'pinia'

export const useFakeBrowserStore = defineStore('fakeBrowser', {
    state: () => ({
        activeAddress: '398iuf8434k39j2i8dju3290ow.onion/forums/guns/buy-sell/auctions/60186e27-c796-5122-ab6b-68400ed14714',
        activeTitle: 'Darktion – лучшая площадка в Даркнете',
        tabs: [
            {
                favicon: '',
                title: 'Новая вкладка',
                address: 'Введите адрес или поисковый запрос',
                active: false,
            },
            {
                favicon: '',
                title: 'Darktion – лучшая площадка в Даркнете',
                address: '398iuf8434k39j2i8dju3290ow.onion/forums/guns/buy-sell/auctions/60186e27-c796-5122-ab6b-68400ed14714',
                active: true,
            },
        ]
    }),
    actions: {
        setAddress(address) {
            this.activeAddress = address
        },
    }
})