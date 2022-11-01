//https://www.cssscript.com/interactive-vector-map/
var map = new jsVectorMap({
    map: 'world',
    selector: '#map',
    backgroundColor: 'tranparent',
    draggable: true,
    zoomButtons: true,
    zoomOnScroll: false,
    zoomOnScrollSpeed: 3,
    zoomMax: 12,
    zoomMin: 1,
    zoomAnimate: true,
    showTooltip: false,
    zoomStep: 1.5,
    bindTouchEvents: true,
    // Line options
    lineStyle: {
        stroke: '#808080',
        strokeWidth: 1,
        strokeLinecap: 'round'
    },


    //Region styles            
    regionsSelectable: false,
    regionsSelectableOne: false,
    regionStyle: {
    // Region style
    initial: {
        fill: '#e3eaef',
        fillOpacity: 1,
        stroke: 'none',
        strokeWidth: 0,
        strokeOpacity: 1
    },
    hover: {
        fillOpacity: .7,
        cursor: 'context-menu'
    },
    selected: {
        fill: '#000'
    },
    selectedHover: {}
    },


    markers: markers,
    labels: {
        markers: {
            render: function (index) {
                return index.name; 
            }
        }
    },
    markersSelectable: false,
    markerStyle: {
        initial: {
            r: 7,
            fill: '#374151',
            fillOpacity: 1,
            stroke: '#FFF',
            strokeWidth: 5,
            strokeOpacity: .5
        },
        hover: {
            fill: '#3cc0ff',
            cursor: 'pointer'
        }
    },
    markerLabelStyle: {
        initial: {
            fontFamily: 'Verdana',
            fontSize: 12,
            fontWeight: 500,
            cursor: 'default',
            fill: '#374151'
        },
        hover: {
            cursor: 'pointer'
        },
        selected: {},
        selectedHover: {}
    },

    onMarkerClick: function(event, markerIndex) {
        const entry = markers.find(el => el.name === event.target.innerHTML);
        entry.element.style.display = "block";
    },
    

    
})

