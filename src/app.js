import './app.scss'
import m from 'mithril'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

let State = {
    map: null
}

let Model = {
    poly: null,

    setPoly(value) {
        this.poly = value
    },

    displayPoly() {
        
    }
}

m.mount(document.body, {
    oncreate() {
        State.map = L.map('map').setView([45.667052, -111.052746], 16)

        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
        }).addTo(State.map)
    },

    view() {
        return m('.container', [
            m('h1.title.is-1', 'Show Polys'),
            m('.columns', [
                m('.column', [
                    m('#map', {
                        style: 'height: 500px;'
                    })
                ]),
                m('.column', [
                    m('textarea.textarea', {
                        placeholder: 'Polygon JSON string',
                        rows: 20,
                        oninput: m.withAttr('value', Model.setPoly)
                    })
                ]),
            ])
        ])
    }
})