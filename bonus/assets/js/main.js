const app = new Vue({
    el: "#app",

    data: {
        counter: 0,
        images: [
            "https://images.everyeye.it/img-notizie/marte-sottosuolo-pianeta-offerto-ideale-vita-v3-485698-1280x720.jpg",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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"
        ]
    },

    methods: {
        prev() {
            if (this.counter === 0) {
                return this.counter = this.images.length -1;
            }
            return this.counter--;
        },

        next() {
            if (this.counter === this.images.length -1) {
                return this.counter = 0;
            }
            return this.counter++;
        },

        changeImg(index) {
            return this.counter = index;
        }
    },

    mounted() {
        setInterval(this.next, 3000);
    }
    //oppure mounted si può scrivere così:
    /* mounted: function () {
        setInterval(this.next, 3000);
    } */
});

document.addEventListener("keyup", (e) => {
    //console.log(`Key "${e.key}"`);
    if (e.keyCode == '37') {
        // left arrow
        app.prev();
    }
     else if (e.keyCode == '39') {
        // right arrow
        app.next();
    }
});