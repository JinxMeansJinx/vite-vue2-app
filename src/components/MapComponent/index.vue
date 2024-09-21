<template>

    <div class="map-container">
        <div id="map"></div>
        <div class="tools">
            <el-button size="small" @click="initMap()">加载地图</el-button>
            <el-button size="small" @click="destoryMap()">销毁地图</el-button>
            <el-button size="small" @click="destoryMap()">定位</el-button>
            <hr />
            <el-button size="small" @click="addMarker()">添加标记</el-button>
            <!-- <img :src="markerSrc1" alt="">
            <img :src="markerSrc2" alt=""> -->
        </div>
    </div>

</template>

<script>
import * as ol from 'ol';
import 'ol/ol.css';
import * as Proj from 'ol/proj';
import Overlay from 'ol/Overlay'; // 弹框
import { Style, Icon, Fill, Text } from 'ol/style'; // 样式
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer'; // 图层
import { XYZ, Vector as VectorSource } from 'ol/source'; // 资源
import Feature from 'ol/Feature'; // 要素
import Point from 'ol/geom/Point';  // 点
import markerSrc1 from '@/assets/images/marker-1.png'
import markerSrc2 from '@/assets/images/marker-2.png'
console.log('markerSrc1: ', markerSrc1);
console.log('markerSrc2: ', markerSrc2);
export default {
    name: '',
    data() {
        return {
            map: null,
            view: null,
            vectorLayer: null,
            markerSrc1,
            markerSrc2
        };
    },

    watch: {
        map(newVal, oldVal) {
            if (newVal) {
                this.mapBindEvent()
            }
        }
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            // 视图
            const view = new ol.View({
                center: Proj.fromLonLat([114.42646010156137, 30.43601802755164]),
                zoom: 15
            });
            // 瓦片图层
            const tileLayer = new TileLayer({
                source: new XYZ({
                    url: "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&scl=1&size=1&style=7&x={x}&y={y}&z={z}"
                })
            });
            // 矢量图图层
            const vectorSource = new VectorSource();
            const vectorLayer = new VectorLayer({
                source: vectorSource
            });
            this.vectorLayer = vectorLayer;
            const map = new ol.Map({
                target: 'map',
                view: view,
                layers: [tileLayer, this.vectorLayer]
            });
            this.view = view;
            this.map = map;
            // this.map.on('click', function (e) {

            //     let lonLat = Proj.toLonLat(e.coordinate);
            //     const markerFeature = new Feature({
            //         geometry: new Point(Proj.fromLonLat(lonLat)),
            //         style: new Style({
            //             image: new Icon({
            //                 anchor: [0.5, 1],
            //                 src: markerSrc,
            //             }),
            //         }),
            //     });
            //     vectorSource.addFeature(markerFeature);
            //     // that.addMarker(lonLat)
            // });
        },
        destoryMap() {
            if (this.map) {
                this.map.setTarget(null);
                this.map = null;
            }
        },
        mapBindEvent() {
            if (!this.map) {
                return
            }
            const that = this
            this.map.on('dblclick', function (e) {

                let lonLat = Proj.toLonLat(e.coordinate);

                that.addMarker(lonLat)
            });
        },
        addMarker(lonLat) {
            try {
                const style = new Style({
                    image: new Icon({
                        anchor: [0.5, 1],
                        scale: 0.5,
                        src: markerSrc2,
                    }),
                });
                const marker = new Feature({
                    geometry: new Point(Proj.fromLonLat(lonLat)),
                    // style,
                    id: 'feature1'
                })
                marker.setStyle(style)
                this.vectorLayer.getSource().addFeature(marker)
            } catch (error) {
                console.log('error: ', error);
            }

        }
    },
};
</script>
<style lang="scss" scoped>
.map-container {
    width: 100%;
    height: 100%;
    position: relative;

    #map {
        width: 100%;
        height: 100%;
    }

    .tools {
        position: absolute;
        right: 10px;
        bottom: 10px;
        z-index: 999;
        width: 220px;
        height: auto;
        max-height: 300px;
        overflow: auto;
        padding: 10px;
        background-color: rgba(255, 255, 255, .8);

        // display: flex;
        // flex-flow: row wrap;
        // align-items: center;
        .el-button {
            margin: 10px;
        }
    }
}
</style>