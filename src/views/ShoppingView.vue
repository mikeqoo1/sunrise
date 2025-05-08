<template>
    <div class="about">
        <h1>2025東京購買清單</h1>
        <ul>
            <li><span class="person">👤 嘎菲</span></li>
            <li>藥粧
                <ul>
                    <li>
                        <img src="/daigou/阿康代購蓬姊.png" class="item-img" />
                        (代購)蓬姊的納豆酵素*1
                    </li>
                    <li>
                        <img src="/daigou/阿康代購蓬姊2.png" class="item-img" />
                        (代購)蓬姊的能量水*2
                    </li>
                    <li>
                        <img src="/daigou/合力他命.png" class="item-img" />
                        (代購)小喻的合力他命*1
                    </li>
                    <li>
                        <img src="/daigou/阿康代購小喻.png" class="item-img" />
                        (代購)小喻的巧克力大包裝*1
                    </li>
                    <li>(代購)嘎菲媽媽OK蹦*1</li>
                    <li>
                        <img src="/daigou/合力他命.png" class="item-img" />
                        (代購)嘎菲媽媽合力他命*1
                    </li>
                    <li>
                        <img src="/daigou/合力他命.png" class="item-img" />
                        (代購)嘎菲媽媽合力他命*1
                    </li>
                    <li>
                        <img src="/daigou/合力他命.png" class="item-img" />
                        (代購)嘎菲媽媽合力他命*1
                    </li>
                    <li>
                        <img src="/daigou/合力他命.png" class="item-img" />
                        合力他命*2
                    </li>
                    <li>
                        <img src="/daigou/滅蚊器.png" class="item-img" />
                        胃藥*2
                    </li>
                    <li>
                        <img src="/daigou/止痛藥.png" class="item-img" />
                        EVE 止痛*2
                    </li>
                    <li>
                        <img src="/daigou/止痛藥.png" class="item-img" />
                        EVE 經痛*3
                    </li>
                </ul>
            </li>

            <li>服飾
                <ul>
                    <li>(代購)弟弟的衣服N件</li>
                </ul>
            </li>

            <li><span class="person">👤 阿庭</span></li>
            <li>藥粧
                <ul>
                    <li>kate唇膏</li>
                    <li>臉部防曬</li>
                    <li><img src="/daigou/薄荷糖.png" class="item-img" />
                        Asahi MINTIA 酷涼薄荷糖大包裝
                    </li>
                    <li>
                        <img src="/daigou/滅蚊器.png" class="item-img" />
                        (代購)滅蚊器
                    </li>
                    <li>
                        <img src="/daigou/眼藥水.png" class="item-img" />
                        (代購)樂敦勁Z!眼藥水
                    </li>
                </ul>
            </li>

            <li><span class="person">👤 恐龍</span></li>
            <li>寶可夢中心
                <ul>
                    <li>沼王土王吊飾</li>
                    <li>(代購)呆火鱷</li>
                </ul>
            </li>

            <li>Nici 的吊飾
                <ul>
                    <li>
                        <img src="/daigou/庫落米.jpg" class="item-img" />
                        (代購)庫洛米 ×2
                    </li>
                    <li>
                        <img src="/daigou/黃色雞飯糰.jpg" class="item-img" />
                        (代購)黃色雞飯糰 ×1
                    </li>
                    <li>
                        <img src="/daigou/愛心熊飯糰.jpg" class="item-img" />
                        (代購)愛心熊飯糰 ×1
                    </li>
                </ul>
            </li>

            <li>其他
                <ul>
                    <li>哥吉拉衣服</li>
                    <li>科博館的恐龍週邊</li>
                    <li>arena 泳褲 訓練款 TSM1025M (190/110) 3XL</li>
                    <li>看還要買啥再說</li>
                </ul>
            </li>

            <li><span class="person">👤 大雄</span></li>
            <li>潮流
                <ul>
                    <li>Aape(猿人頭)</li>
                    <li>球鞋很多雙</li>
                    <li>衣服很多件</li>
                </ul>
            </li>
        </ul>

        <h2>Asics（大家都要買）</h2>
        <ul class="asics">
            <li>拖鞋</li>
            <li>嘎菲阿庭 以下3雙擇一</li>
            <li>GT-2160</li>
            <li>GEL-KAYANO 14</li>
            <li>GEL-KAYANO 20</li>
            <li>恐龍 以下3雙擇一</li>
            <li>UNPRE ARS LOW 2 (US 9.5)</li>
            <li>GLIDE NOVA FF 3 (US 10)</li>
            <li>(代購)GELBURST 28 櫻花粉（小哲US 8）</li>
            <li>
                <img src="/daigou/美津濃樂福鞋US9.png" class="item-img" />
                (代購)美津濃樂福鞋（小哲 US9）
            </li>
            <li>
                <img src="/daigou/類似的休閒鞋US9.png" class="item-img" />
                (代購)類似的休閒鞋（小哲 US9）
            </li>
        </ul>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.person {
    color: #3498db;
    font-weight: bold;
}

.asics {
    margin-top: 1rem;
    padding-left: 1.5rem;
    color: #f1c40f;
    font-weight: 500;
}

.item-img {
    width: 60px;
    height: auto;
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 10px;
}
</style>
