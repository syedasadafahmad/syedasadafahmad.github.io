if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
if (+ function(t) { "use strict";
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3") }(jQuery), + function(t) { "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
            for (var i in e)
                if (void 0 !== t.style[i]) return { end: e[i] };
            return !1 }
        t.fn.emulateTransitionEnd = function(e) {
            var i = !1,
                a = this;
            t(this).one("bsTransitionEnd", function() { i = !0 });
            var n = function() { i || t(a).trigger(t.support.transition.end) };
            return setTimeout(n, e), this }, t(function() { t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = { bindType: t.support.transition.end, delegateType: t.support.transition.end, handle: function(e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0 } }) }) }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("bs.alert");
                n || i.data("bs.alert", n = new a(this)), "string" == typeof e && n[e].call(i) }) }
        var i = '[data-dismiss="alert"]',
            a = function(e) { t(e).on("click", i, this.close) };
        a.VERSION = "3.3.6", a.TRANSITION_DURATION = 150, a.prototype.close = function(e) {
            function i() { s.detach().trigger("closed.bs.alert").remove() }
            var n = t(this),
                o = n.attr("data-target");
            o || (o = n.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
            var s = t(o);
            e && e.preventDefault(), s.length || (s = n.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(a.TRANSITION_DURATION) : i()) };
        var n = t.fn.alert;
        t.fn.alert = e, t.fn.alert.Constructor = a, t.fn.alert.noConflict = function() {
            return t.fn.alert = n, this }, t(document).on("click.bs.alert.data-api", i, a.prototype.close) }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var a = t(this),
                    n = a.data("bs.button"),
                    o = "object" == typeof e && e;
                n || a.data("bs.button", n = new i(this, o)), "toggle" == e ? n.toggle() : e && n.setState(e) }) }
        var i = function(e, a) { this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, a), this.isLoading = !1 };
        i.VERSION = "3.3.6", i.DEFAULTS = { loadingText: "loading..." }, i.prototype.setState = function(e) {
            var i = "disabled",
                a = this.$element,
                n = a.is("input") ? "val" : "html",
                o = a.data();
            e += "Text", null == o.resetText && a.data("resetText", a[n]()), setTimeout(t.proxy(function() { a[n](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, a.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, a.removeClass(i).removeAttr(i)) }, this), 0) }, i.prototype.toggle = function() {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var i = this.$element.find("input"); "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") };
        var a = t.fn.button;
        t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
            return t.fn.button = a, this }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
            var a = t(i.target);
            a.hasClass("btn") || (a = a.closest(".btn")), e.call(a, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault() }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) { t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type)) }) }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var a = t(this),
                    n = a.data("bs.carousel"),
                    o = t.extend({}, i.DEFAULTS, a.data(), "object" == typeof e && e),
                    s = "string" == typeof e ? e : o.slide;
                n || a.data("bs.carousel", n = new i(this, o)), "number" == typeof e ? n.to(e) : s ? n[s]() : o.interval && n.pause().cycle() }) }
        var i = function(e, i) { this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this)) };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, i.prototype.keydown = function(t) {
            if (!/input|textarea/i.test(t.target.tagName)) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return }
                t.preventDefault() } }, i.prototype.cycle = function(e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this }, i.prototype.getItemIndex = function(t) {
            return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active) }, i.prototype.getItemForDirection = function(t, e) {
            var i = this.getItemIndex(e),
                a = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
            if (a && !this.options.wrap) return e;
            var n = "prev" == t ? -1 : 1,
                o = (i + n) % this.$items.length;
            return this.$items.eq(o) }, i.prototype.to = function(t) {
            var e = this,
                i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() { e.to(t) }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t)) }, i.prototype.pause = function(e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, i.prototype.next = function() {
            return this.sliding ? void 0 : this.slide("next") }, i.prototype.prev = function() {
            return this.sliding ? void 0 : this.slide("prev") }, i.prototype.slide = function(e, a) {
            var n = this.$element.find(".item.active"),
                o = a || this.getItemForDirection(e, n),
                s = this.interval,
                r = "next" == e ? "left" : "right",
                l = this;
            if (o.hasClass("active")) return this.sliding = !1;
            var d = o[0],
                c = t.Event("slide.bs.carousel", { relatedTarget: d, direction: r });
            if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                if (this.sliding = !0, s && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active");
                    var p = t(this.$indicators.children()[this.getItemIndex(o)]);
                    p && p.addClass("active") }
                var h = t.Event("slid.bs.carousel", { relatedTarget: d, direction: r });
                return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, n.addClass(r), o.addClass(r), n.one("bsTransitionEnd", function() { o.removeClass([e, r].join(" ")).addClass("active"), n.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() { l.$element.trigger(h) }, 0) }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (n.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this } };
        var a = t.fn.carousel;
        t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
            return t.fn.carousel = a, this };
        var n = function(i) {
            var a, n = t(this),
                o = t(n.attr("data-target") || (a = n.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, ""));
            if (o.hasClass("carousel")) {
                var s = t.extend({}, o.data(), n.data()),
                    r = n.attr("data-slide-to");
                r && (s.interval = !1), e.call(o, s), r && o.data("bs.carousel").to(r), i.preventDefault() } };
        t(document).on("click.bs.carousel.data-api", "[data-slide]", n).on("click.bs.carousel.data-api", "[data-slide-to]", n), t(window).on("load", function() { t('[data-ride="carousel"]').each(function() {
                var i = t(this);
                e.call(i, i.data()) }) }) }(jQuery), + function(t) { "use strict";

        function e(e) {
            var i, a = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
            return t(a) }

        function i(e) {
            return this.each(function() {
                var i = t(this),
                    n = i.data("bs.collapse"),
                    o = t.extend({}, a.DEFAULTS, i.data(), "object" == typeof e && e);!n && o.toggle && /show|hide/.test(e) && (o.toggle = !1), n || i.data("bs.collapse", n = new a(this, o)), "string" == typeof e && n[e]() }) }
        var a = function(e, i) { this.$element = t(e), this.options = t.extend({}, a.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
        a.VERSION = "3.3.6", a.TRANSITION_DURATION = 350, a.DEFAULTS = { toggle: !0 }, a.prototype.dimension = function() {
            var t = this.$element.hasClass("width");
            return t ? "width" : "height" }, a.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e, n = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(n && n.length && (e = n.data("bs.collapse"), e && e.transitioning))) {
                    var o = t.Event("show.bs.collapse");
                    if (this.$element.trigger(o), !o.isDefaultPrevented()) { n && n.length && (i.call(n, "hide"), e || n.data("bs.collapse", null));
                        var s = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                        var r = function() { this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") };
                        if (!t.support.transition) return r.call(this);
                        var l = t.camelCase(["scroll", s].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(a.TRANSITION_DURATION)[s](this.$element[0][l]) } } } }, a.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var i = this.dimension();
                    this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                    var n = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") };
                    return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(n, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : n.call(this) } } }, a.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, a.prototype.getParent = function() {
            return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, a) {
                var n = t(a);
                this.addAriaAndCollapsedClass(e(n), n) }, this)).end() }, a.prototype.addAriaAndCollapsedClass = function(t, e) {
            var i = t.hasClass("in");
            t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i) };
        var n = t.fn.collapse;
        t.fn.collapse = i, t.fn.collapse.Constructor = a, t.fn.collapse.noConflict = function() {
            return t.fn.collapse = n, this }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(a) {
            var n = t(this);
            n.attr("data-target") || a.preventDefault();
            var o = e(n),
                s = o.data("bs.collapse"),
                r = s ? "toggle" : n.data();
            i.call(o, r) }) }(jQuery), + function(t) { "use strict";

        function e(e) {
            var i = e.attr("data-target");
            i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
            var a = i && t(i);
            return a && a.length ? a : e.parent() }

        function i(i) { i && 3 === i.which || (t(n).remove(), t(o).each(function() {
                var a = t(this),
                    n = e(a),
                    o = { relatedTarget: this };
                n.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(n[0], i.target) || (n.trigger(i = t.Event("hide.bs.dropdown", o)), i.isDefaultPrevented() || (a.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o))))) })) }

        function a(e) {
            return this.each(function() {
                var i = t(this),
                    a = i.data("bs.dropdown");
                a || i.data("bs.dropdown", a = new s(this)), "string" == typeof e && a[e].call(i) }) }
        var n = ".dropdown-backdrop",
            o = '[data-toggle="dropdown"]',
            s = function(e) { t(e).on("click.bs.dropdown", this.toggle) };
        s.VERSION = "3.3.6", s.prototype.toggle = function(a) {
            var n = t(this);
            if (!n.is(".disabled, :disabled")) {
                var o = e(n),
                    s = o.hasClass("open");
                if (i(), !s) { "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                    var r = { relatedTarget: this };
                    if (o.trigger(a = t.Event("show.bs.dropdown", r)), a.isDefaultPrevented()) return;
                    n.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", r)) }
                return !1 } }, s.prototype.keydown = function(i) {
            if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
                var a = t(this);
                if (i.preventDefault(), i.stopPropagation(), !a.is(".disabled, :disabled")) {
                    var n = e(a),
                        s = n.hasClass("open");
                    if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && n.find(o).trigger("focus"), a.trigger("click");
                    var r = " li:not(.disabled):visible a",
                        l = n.find(".dropdown-menu" + r);
                    if (l.length) {
                        var d = l.index(i.target);
                        38 == i.which && d > 0 && d--, 40 == i.which && d < l.length - 1 && d++, ~d || (d = 0), l.eq(d).trigger("focus") } } } };
        var r = t.fn.dropdown;
        t.fn.dropdown = a, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
            return t.fn.dropdown = r, this }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) { t.stopPropagation() }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown) }(jQuery), + function(t) { "use strict";

        function e(e, a) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("bs.modal"),
                    s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
                o || n.data("bs.modal", o = new i(this, s)), "string" == typeof e ? o[e](a) : s.show && o.show(a) }) }
        var i = function(e, i) { this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function(t) {
            return this.isShown ? this.hide() : this.show(t) }, i.prototype.show = function(e) {
            var a = this,
                n = t.Event("show.bs.modal", { relatedTarget: e });
            this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { a.$element.one("mouseup.dismiss.bs.modal", function(e) { t(e.target).is(a.$element) && (a.ignoreBackdropClick = !0) }) }), this.backdrop(function() {
                var n = t.support.transition && a.$element.hasClass("fade");
                a.$element.parent().length || a.$element.appendTo(a.$body), a.$element.show().scrollTop(0), a.adjustDialog(), n && a.$element[0].offsetWidth, a.$element.addClass("in"), a.enforceFocus();
                var o = t.Event("shown.bs.modal", { relatedTarget: e });
                n ? a.$dialog.one("bsTransitionEnd", function() { a.$element.trigger("focus").trigger(o) }).emulateTransitionEnd(i.TRANSITION_DURATION) : a.$element.trigger("focus").trigger(o) })) }, i.prototype.hide = function(e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal()) }, i.prototype.enforceFocus = function() { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) { this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, i.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, i.prototype.resize = function() { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, i.prototype.hideModal = function() {
            var t = this;
            this.$element.hide(), this.backdrop(function() { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") }) }, i.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, i.prototype.backdrop = function(e) {
            var a = this,
                n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var o = t.support.transition && n;
                if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                        return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in");
                var s = function() { a.removeBackdrop(), e && e() };
                t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s() } else e && e() }, i.prototype.handleUpdate = function() { this.adjustDialog() }, i.prototype.adjustDialog = function() {
            var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" }) }, i.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, i.prototype.checkScrollbar = function() {
            var t = window.innerWidth;
            if (!t) {
                var e = document.documentElement.getBoundingClientRect();
                t = e.right - Math.abs(e.left) }
            this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar() }, i.prototype.setScrollbar = function() {
            var t = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth) }, i.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, i.prototype.measureScrollbar = function() {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e };
        var a = t.fn.modal;
        t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
            return t.fn.modal = a, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
            var a = t(this),
                n = a.attr("href"),
                o = t(a.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
                s = o.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(n) && n }, o.data(), a.data());
            a.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) { t.isDefaultPrevented() || o.one("hidden.bs.modal", function() { a.is(":visible") && a.trigger("focus") }) }), e.call(o, s, this) }) }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var a = t(this),
                    n = a.data("bs.tooltip"),
                    o = "object" == typeof e && e;!n && /destroy|hide/.test(e) || (n || a.data("bs.tooltip", n = new i(this, o)), "string" == typeof e && n[e]()) }) }
        var i = function(t, e) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e) };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, i.prototype.init = function(e, i, a) {
            if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(a), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var n = this.options.trigger.split(" "), o = n.length; o--;) {
                var s = n[o];
                if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != s) {
                    var r = "hover" == s ? "mouseenter" : "focusin",
                        l = "hover" == s ? "mouseleave" : "focusout";
                    this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this)) } }
            this.options.selector ? this._options = t.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, i.prototype.getDefaults = function() {
            return i.DEFAULTS }, i.prototype.getOptions = function(e) {
            return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e }, i.prototype.getDelegateOptions = function() {
            var e = {},
                i = this.getDefaults();
            return this._options && t.each(this._options, function(t, a) { i[t] != a && (e[t] = a) }), e }, i.prototype.enter = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() { "in" == i.hoverState && i.show() }, i.options.delay.show)) : i.show()) }, i.prototype.isInStateTrue = function() {
            for (var t in this.inState)
                if (this.inState[t]) return !0;
            return !1 }, i.prototype.leave = function(e) {
            var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
            return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() { "out" == i.hoverState && i.hide() }, i.options.delay.hide)) : i.hide()) }, i.prototype.show = function() {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) { this.$element.trigger(e);
                var a = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (e.isDefaultPrevented() || !a) return;
                var n = this,
                    o = this.tip(),
                    s = this.getUID(this.type);
                this.setContent(), o.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && o.addClass("fade");
                var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                    l = /\s?auto?\s?/i,
                    d = l.test(r);
                d && (r = r.replace(l, "") || "top"), o.detach().css({ top: 0, left: 0, display: "block" }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                var c = this.getPosition(),
                    p = o[0].offsetWidth,
                    h = o[0].offsetHeight;
                if (d) {
                    var u = r,
                        f = this.getPosition(this.$viewport);
                    r = "bottom" == r && c.bottom + h > f.bottom ? "top" : "top" == r && c.top - h < f.top ? "bottom" : "right" == r && c.right + p > f.width ? "left" : "left" == r && c.left - p < f.left ? "right" : r, o.removeClass(u).addClass(r) }
                var g = this.getCalculatedOffset(r, c, p, h);
                this.applyPlacement(g, r);
                var m = function() {
                    var t = n.hoverState;
                    n.$element.trigger("shown.bs." + n.type), n.hoverState = null, "out" == t && n.leave(n) };
                t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m() } }, i.prototype.applyPlacement = function(e, i) {
            var a = this.tip(),
                n = a[0].offsetWidth,
                o = a[0].offsetHeight,
                s = parseInt(a.css("margin-top"), 10),
                r = parseInt(a.css("margin-left"), 10);
            isNaN(s) && (s = 0), isNaN(r) && (r = 0), e.top += s, e.left += r, t.offset.setOffset(a[0], t.extend({ using: function(t) { a.css({ top: Math.round(t.top), left: Math.round(t.left) }) } }, e), 0), a.addClass("in");
            var l = a[0].offsetWidth,
                d = a[0].offsetHeight; "top" == i && d != o && (e.top = e.top + o - d);
            var c = this.getViewportAdjustedDelta(i, e, l, d);
            c.left ? e.left += c.left : e.top += c.top;
            var p = /top|bottom/.test(i),
                h = p ? 2 * c.left - n + l : 2 * c.top - o + d,
                u = p ? "offsetWidth" : "offsetHeight";
            a.offset(e), this.replaceArrow(h, a[0][u], p) }, i.prototype.replaceArrow = function(t, e, i) { this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "") }, i.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right") }, i.prototype.hide = function(e) {
            function a() { "in" != n.hoverState && o.detach(), n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), e && e() }
            var n = this,
                o = t(this.$tip),
                s = t.Event("hide.bs." + this.type);
            return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", a).emulateTransitionEnd(i.TRANSITION_DURATION) : a(), this.hoverState = null, this) }, i.prototype.fixTitle = function() {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "") }, i.prototype.hasContent = function() {
            return this.getTitle() }, i.prototype.getPosition = function(e) { e = e || this.$element;
            var i = e[0],
                a = "BODY" == i.tagName,
                n = i.getBoundingClientRect();
            null == n.width && (n = t.extend({}, n, { width: n.right - n.left, height: n.bottom - n.top }));
            var o = a ? { top: 0, left: 0 } : e.offset(),
                s = { scroll: a ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
                r = a ? { width: t(window).width(), height: t(window).height() } : null;
            return t.extend({}, n, s, r, o) }, i.prototype.getCalculatedOffset = function(t, e, i, a) {
            return "bottom" == t ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 } : "top" == t ? { top: e.top - a, left: e.left + e.width / 2 - i / 2 } : "left" == t ? { top: e.top + e.height / 2 - a / 2, left: e.left - i } : { top: e.top + e.height / 2 - a / 2, left: e.left + e.width } }, i.prototype.getViewportAdjustedDelta = function(t, e, i, a) {
            var n = { top: 0, left: 0 };
            if (!this.$viewport) return n;
            var o = this.options.viewport && this.options.viewport.padding || 0,
                s = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var r = e.top - o - s.scroll,
                    l = e.top + o - s.scroll + a;
                r < s.top ? n.top = s.top - r : l > s.top + s.height && (n.top = s.top + s.height - l) } else {
                var d = e.left - o,
                    c = e.left + o + i;
                d < s.left ? n.left = s.left - d : c > s.right && (n.left = s.left + s.width - c) }
            return n }, i.prototype.getTitle = function() {
            var t, e = this.$element,
                i = this.options;
            return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title) }, i.prototype.getUID = function(t) { do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
            return t }, i.prototype.tip = function() {
            if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, i.prototype.enable = function() { this.enabled = !0 }, i.prototype.disable = function() { this.enabled = !1 }, i.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, i.prototype.toggle = function(e) {
            var i = this;
            e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i) }, i.prototype.destroy = function() {
            var t = this;
            clearTimeout(this.timeout), this.hide(function() { t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null }) };
        var a = t.fn.tooltip;
        t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
            return t.fn.tooltip = a, this } }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var a = t(this),
                    n = a.data("bs.popover"),
                    o = "object" == typeof e && e;!n && /destroy|hide/.test(e) || (n || a.data("bs.popover", n = new i(this, o)), "string" == typeof e && n[e]()) }) }
        var i = function(t, e) { this.init("popover", t, e) };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
            return i.DEFAULTS }, i.prototype.setContent = function() {
            var t = this.tip(),
                e = this.getTitle(),
                i = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide() }, i.prototype.hasContent = function() {
            return this.getTitle() || this.getContent() }, i.prototype.getContent = function() {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content) }, i.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow") };
        var a = t.fn.popover;
        t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
            return t.fn.popover = a, this } }(jQuery), + function(t) {
        "use strict";

        function e(i, a) { this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, a), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process() }

        function i(i) {
            return this.each(function() {
                var a = t(this),
                    n = a.data("bs.scrollspy"),
                    o = "object" == typeof i && i;
                n || a.data("bs.scrollspy", n = new e(this, o)), "string" == typeof i && n[i]() }) }
        e.VERSION = "3.3.6", e.DEFAULTS = { offset: 10 }, e.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, e.prototype.refresh = function() {
            var e = this,
                i = "offset",
                a = 0;
            this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", a = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
                var e = t(this),
                    n = e.data("target") || e.attr("href"),
                    o = /^#./.test(n) && t(n);
                return o && o.length && o.is(":visible") && [
                    [o[i]().top + a, n]
                ] || null }).sort(function(t, e) {
                return t[0] - e[0] }).each(function() { e.offsets.push(this[0]), e.targets.push(this[1]) }) }, e.prototype.process = function() {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                i = this.getScrollHeight(),
                a = this.options.offset + i - this.$scrollElement.height(),
                n = this.offsets,
                o = this.targets,
                s = this.activeTarget;
            if (this.scrollHeight != i && this.refresh(), e >= a) return s != (t = o[o.length - 1]) && this.activate(t);
            if (s && e < n[0]) return this.activeTarget = null, this.clear();
            for (t = n.length; t--;) s != o[t] && e >= n[t] && (void 0 === n[t + 1] || e < n[t + 1]) && this.activate(o[t]) }, e.prototype.activate = function(e) {
            this.activeTarget = e, this.clear();
            var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                a = t(i).parents("li").addClass("active");
            a.parent(".dropdown-menu").length && (a = a.closest("li.dropdown").addClass("active")), a.trigger("activate.bs.scrollspy")
        }, e.prototype.clear = function() { t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
        var a = t.fn.scrollspy;
        t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
            return t.fn.scrollspy = a, this }, t(window).on("load.bs.scrollspy.data-api", function() { t('[data-spy="scroll"]').each(function() {
                var e = t(this);
                i.call(e, e.data()) }) })
    }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var a = t(this),
                    n = a.data("bs.tab");
                n || a.data("bs.tab", n = new i(this)), "string" == typeof e && n[e]() }) }
        var i = function(e) { this.element = t(e) };
        i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
            var e = this.element,
                i = e.closest("ul:not(.dropdown-menu)"),
                a = e.data("target");
            if (a || (a = e.attr("href"), a = a && a.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var n = i.find(".active:last a"),
                    o = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                    s = t.Event("show.bs.tab", { relatedTarget: n[0] });
                if (n.trigger(o), e.trigger(s), !s.isDefaultPrevented() && !o.isDefaultPrevented()) {
                    var r = t(a);
                    this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() { n.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: n[0] }) }) } } }, i.prototype.activate = function(e, a, n) {
            function o() { s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), n && n() }
            var s = a.find("> .active"),
                r = n && t.support.transition && (s.length && s.hasClass("fade") || !!a.find("> .fade").length);
            s.length && r ? s.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), s.removeClass("in") };
        var a = t.fn.tab;
        t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
            return t.fn.tab = a, this };
        var n = function(i) { i.preventDefault(), e.call(t(this), "show") };
        t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n) }(jQuery), + function(t) { "use strict";

        function e(e) {
            return this.each(function() {
                var a = t(this),
                    n = a.data("bs.affix"),
                    o = "object" == typeof e && e;
                n || a.data("bs.affix", n = new i(this, o)), "string" == typeof e && n[e]() }) }
        var i = function(e, a) { this.options = t.extend({}, i.DEFAULTS, a), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
        i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = { offset: 0, target: window }, i.prototype.getState = function(t, e, i, a) {
            var n = this.$target.scrollTop(),
                o = this.$element.offset(),
                s = this.$target.height();
            if (null != i && "top" == this.affixed) return i > n ? "top" : !1;
            if ("bottom" == this.affixed) return null != i ? n + this.unpin <= o.top ? !1 : "bottom" : t - a >= n + s ? !1 : "bottom";
            var r = null == this.affixed,
                l = r ? n : o.top,
                d = r ? s : e;
            return null != i && i >= n ? "top" : null != a && l + d >= t - a ? "bottom" : !1 }, i.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(i.RESET).addClass("affix");
            var t = this.$target.scrollTop(),
                e = this.$element.offset();
            return this.pinnedOffset = e.top - t }, i.prototype.checkPositionWithEventLoop = function() { setTimeout(t.proxy(this.checkPosition, this), 1) }, i.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var e = this.$element.height(),
                    a = this.options.offset,
                    n = a.top,
                    o = a.bottom,
                    s = Math.max(t(document).height(), t(document.body).height()); "object" != typeof a && (o = n = a), "function" == typeof n && (n = a.top(this.$element)), "function" == typeof o && (o = a.bottom(this.$element));
                var r = this.getState(s, e, n, o);
                if (this.affixed != r) { null != this.unpin && this.$element.css("top", "");
                    var l = "affix" + (r ? "-" + r : ""),
                        d = t.Event(l + ".bs.affix");
                    if (this.$element.trigger(d), d.isDefaultPrevented()) return;
                    this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix") } "bottom" == r && this.$element.offset({ top: s - e - o }) } };
        var a = t.fn.affix;
        t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
            return t.fn.affix = a, this }, t(window).on("load", function() { t('[data-spy="affix"]').each(function() {
                var i = t(this),
                    a = i.data();
                a.offset = a.offset || {}, null != a.offsetBottom && (a.offset.bottom = a.offsetBottom), null != a.offsetTop && (a.offset.top = a.offsetTop), e.call(i, a) }) }) }(jQuery), $(document).ready(function() { "use strict";
        $(".menu > ul > li:has( > ul)").addClass("menu-dropdown-icon"), $(".menu > ul > li > ul:not(:has(ul))").addClass("normal-sub"), $(".menu > ul").before('<a href="#" class="menu-mobile"></a>'), $(".menu > ul > li").hover(function(t) { $(window).width() > 991 && ($(this).children("ul").stop(!0, !1).fadeToggle(150), t.preventDefault()) }), $(".menu > ul > li > ul > .has-subsubmenu").hover(function(t) { $(window).width() > 991 && ($(this).children("ul").stop(!0, !1).fadeToggle(50), t.preventDefault()) }), $(".menu > ul > li").click(function() { $(window).width() <= 991 && ($(".menu > ul > li > ul").fadeOut(50), $(this).children("ul").fadeIn(150)) }), $(".menu > ul > li > ul > li").click(function() { $(window).width() <= 991 && ($(".menu > ul > li > ul > li > .sub-submenu").fadeOut(50), $(this).children("ul").fadeIn(150)) }), $(".menu-mobile").click(function(t) { $(".menu > ul").toggleClass("show-on-mobile"), t.preventDefault() }) }), ! function(t, e, i, a) {
        function n(e, i) {
            var o = this; "object" == typeof i && (delete i.refresh, delete i.render, t.extend(this, i)), this.$element = t(e), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
            var s = (this.position + "").toLowerCase().match(/\S+/g) || [];
            if (s.length < 1 && s.push("center"), 1 == s.length && s.push(s[0]), ("top" == s[0] || "bottom" == s[0] || "left" == s[1] || "right" == s[1]) && (s = [s[1], s[0]]), this.positionX != a && (s[0] = this.positionX.toLowerCase()), this.positionY != a && (s[1] = this.positionY.toLowerCase()), o.positionX = s[0], o.positionY = s[1], "left" != this.positionX && "right" != this.positionX && (this.positionX = isNaN(parseInt(this.positionX)) ? "center" : parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (this.positionY = isNaN(parseInt(this.positionY)) ? "center" : parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this;
            if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({ backgroundImage: "url(" + this.imageSrc + ")", backgroundSize: "cover", backgroundPosition: this.position }), this;
            this.$mirror = t("<div />").prependTo("body");
            var r = this.$element.find(">.parallax-slider"),
                l = !1;
            0 == r.length ? this.$slider = t("<img />").prependTo(this.$mirror) : (this.$slider = r.prependTo(this.$mirror), l = !0), this.$mirror.addClass("parallax-mirror").css({ visibility: "hidden", zIndex: this.zIndex, position: "fixed", top: 0, left: 0, overflow: "hidden" }), this.$slider.addClass("parallax-slider").one("load", function() { o.naturalHeight && o.naturalWidth || (o.naturalHeight = this.naturalHeight || this.height || 1, o.naturalWidth = this.naturalWidth || this.width || 1), o.aspectRatio = o.naturalWidth / o.naturalHeight, n.isSetup || n.setup(), n.sliders.push(o), n.isFresh = !1, n.requestRender() }), l || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || r.length > 0) && this.$slider.trigger("load") }

        function o(a) {
            return this.each(function() {
                var o = t(this),
                    s = "object" == typeof a && a;
                this == e || this == i || o.is("body") ? n.configure(s) : o.data("px.parallax") ? "object" == typeof a && t.extend(o.data("px.parallax"), s) : (s = t.extend({}, o.data(), s), o.data("px.parallax", new n(this, s))), "string" == typeof a && ("destroy" == a ? n.destroy(this) : n[a]()) }) }! function() {
            for (var t = 0, i = ["ms", "moz", "webkit", "o"], a = 0; a < i.length && !e.requestAnimationFrame; ++a) e.requestAnimationFrame = e[i[a] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[i[a] + "CancelAnimationFrame"] || e[i[a] + "CancelRequestAnimationFrame"];
            e.requestAnimationFrame || (e.requestAnimationFrame = function(i) {
                var a = (new Date).getTime(),
                    n = Math.max(0, 16 - (a - t)),
                    o = e.setTimeout(function() { i(a + n) }, n);
                return t = a + n, o }), e.cancelAnimationFrame || (e.cancelAnimationFrame = function(t) { clearTimeout(t) }) }(), t.extend(n.prototype, { speed: .2, bleed: 0, zIndex: -100, iosFix: !0, androidFix: !0, position: "center", overScrollFix: !1, refresh: function() { this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
                var t = n.winHeight,
                    e = n.docHeight,
                    i = Math.min(this.boxOffsetTop, e - t),
                    a = Math.max(this.boxOffsetTop + this.boxHeight - t, 0),
                    o = this.boxHeight + (i - a) * (1 - this.speed) | 0,
                    s = (this.boxOffsetTop - i) * (1 - this.speed) | 0;
                if (o * this.aspectRatio >= this.boxWidth) { this.imageWidth = o * this.aspectRatio | 0, this.imageHeight = o, this.offsetBaseTop = s;
                    var r = this.imageWidth - this.boxWidth;
                    this.offsetLeft = "left" == this.positionX ? 0 : "right" == this.positionX ? -r : isNaN(this.positionX) ? -r / 2 | 0 : Math.max(this.positionX, -r) } else { this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0;
                    var r = this.imageHeight - o;
                    this.offsetBaseTop = "top" == this.positionY ? s : "bottom" == this.positionY ? s - r : isNaN(this.positionY) ? s - r / 2 | 0 : s + Math.max(this.positionY, -r) } }, render: function() {
                var t = n.scrollTop,
                    e = n.scrollLeft,
                    i = this.overScrollFix ? n.overScroll : 0,
                    a = t + n.winHeight;
                this.boxOffsetBottom > t && this.boxOffsetTop <= a ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - e, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({ transform: "translate3d(0px, 0px, 0px)", visibility: this.visibility, top: this.mirrorTop - i, left: this.mirrorLeft, height: this.boxHeight, width: this.boxWidth }), this.$slider.css({ transform: "translate3d(0px, 0px, 0px)", position: "absolute", top: this.offsetTop, left: this.offsetLeft, height: this.imageHeight, width: this.imageWidth, maxWidth: "none" }) } }), t.extend(n, { scrollTop: 0, scrollLeft: 0, winHeight: 0, winWidth: 0, docHeight: 1 << 30, docWidth: 1 << 30, sliders: [], isReady: !1, isFresh: !1, isBusy: !1, setup: function() {
                if (!this.isReady) {
                    var a = t(i),
                        o = t(e),
                        s = function() { n.winHeight = o.height(), n.winWidth = o.width(), n.docHeight = a.height(), n.docWidth = a.width() },
                        r = function() {
                            var t = o.scrollTop(),
                                e = n.docHeight - n.winHeight,
                                i = n.docWidth - n.winWidth;
                            n.scrollTop = Math.max(0, Math.min(e, t)), n.scrollLeft = Math.max(0, Math.min(i, o.scrollLeft())), n.overScroll = Math.max(t - e, Math.min(t, 0)) };
                    o.on("resize.px.parallax load.px.parallax", function() { s(), n.isFresh = !1, n.requestRender() }).on("scroll.px.parallax load.px.parallax", function() { r(), n.requestRender() }), s(), r(), this.isReady = !0 } }, configure: function(e) { "object" == typeof e && (delete e.refresh, delete e.render, t.extend(this.prototype, e)) }, refresh: function() { t.each(this.sliders, function() { this.refresh() }), this.isFresh = !0 }, render: function() { this.isFresh || this.refresh(), t.each(this.sliders, function() { this.render() }) }, requestRender: function() {
                var t = this;
                this.isBusy || (this.isBusy = !0, e.requestAnimationFrame(function() { t.render(), t.isBusy = !1 })) }, destroy: function(i) {
                var a, o = t(i).data("px.parallax");
                for (o.$mirror.remove(), a = 0; a < this.sliders.length; a += 1) this.sliders[a] == o && this.sliders.splice(a, 1);
                t(i).data("px.parallax", !1), 0 === this.sliders.length && (t(e).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, n.isSetup = !1) } });
        var s = t.fn.parallax;
        t.fn.parallax = o, t.fn.parallax.Constructor = n, t.fn.parallax.noConflict = function() {
            return t.fn.parallax = s, this }, t(i).on("ready.px.parallax.data-api", function() { t('[data-parallax="scroll"]').parallax() }) }(jQuery, window, document), ! function(t, e) { "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.ScrollReveal = e() }(this, function(t, e, i) {
        return function() { "use strict";
            var t, e, i;
            this.ScrollReveal = function() {
                function a(i) {
                    return "undefined" == typeof this || Object.getPrototypeOf(this) !== a.prototype ? new a(i) : (t = this, t.tools = new e, t.isSupported() ? (t.tools.extend(t.defaults, i || {}), n(t.defaults), t.store = { elements: {}, containers: [] }, t.sequences = {}, t.history = [], t.uid = 0, t.initialized = !1) : "undefined" != typeof console && null !== console, t) }

                function n(e) {
                    var i = e.container;
                    return i && "string" == typeof i ? e.container = window.document.querySelector(i) : (i && !t.tools.isNode(i) && (e.container = null), null == i && (e.container = window.document.documentElement), e.container) }

                function o() {
                    return ++t.uid }

                function s(e, i) { e.config ? e.config = t.tools.extendClone(e.config, i) : e.config = t.tools.extendClone(t.defaults, i), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X", "top" !== e.config.origin && "left" !== e.config.origin || (e.config.distance = "-" + e.config.distance) }

                function r(t) {
                    var e = window.getComputedStyle(t.domEl);
                    t.styles || (t.styles = { transition: {}, transform: {}, computed: {} }, t.styles.inline = t.domEl.getAttribute("style") || "", t.styles.inline += "; visibility: visible; ", t.styles.computed.opacity = e.opacity, e.transition && "all 0s ease 0s" != e.transition ? t.styles.computed.transition = e.transition + ", " : t.styles.computed.transition = ""), t.styles.transition.instant = l(t, 0), t.styles.transition.delayed = l(t, t.config.delay), t.styles.transform.initial = " -webkit-transform:", t.styles.transform.target = " -webkit-transform:", d(t), t.styles.transform.initial += "transform:", t.styles.transform.target += "transform:", d(t) }

                function l(t, e) {
                    var i = t.config;
                    return "-webkit-transition: " + t.styles.computed.transition + "-webkit-transform " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s; transition: " + t.styles.computed.transition + "transform " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + e / 1e3 + "s; " }

                function d(t) {
                    var e = t.config,
                        i = t.styles.transform;
                    parseInt(e.distance) && (i.initial += " translate" + e.axis + "(" + e.distance + ")", i.target += " translate" + e.axis + "(0)"), e.scale && (i.initial += " scale(" + e.scale + ")", i.target += " scale(1)"), e.rotate.x && (i.initial += " rotateX(" + e.rotate.x + "deg)", i.target += " rotateX(0)"), e.rotate.y && (i.initial += " rotateY(" + e.rotate.y + "deg)", i.target += " rotateY(0)"), e.rotate.z && (i.initial += " rotateZ(" + e.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + e.opacity + ";", i.target += "; opacity: " + t.styles.computed.opacity + ";" }

                function c(e) {
                    var i = e.config.container;
                    i && -1 == t.store.containers.indexOf(i) && t.store.containers.push(e.config.container), t.store.elements[e.id] = e }

                function p(e, i, a) {
                    var n = { selector: e, config: i, interval: a };
                    t.history.push(n) }

                function h() {
                    if (t.isSupported()) { g();
                        for (var e = 0; e < t.store.containers.length; e++) t.store.containers[e].addEventListener("scroll", u), t.store.containers[e].addEventListener("resize", u);
                        t.initialized || (window.addEventListener("scroll", u), window.addEventListener("resize", u), t.initialized = !0) }
                    return t }

                function u() { i(g) }

                function f() {
                    var e, i, a, n;
                    t.tools.forOwn(t.sequences, function(o) { n = t.sequences[o], e = !1;
                        for (var s = 0; s < n.elemIds.length; s++) a = n.elemIds[s], i = t.store.elements[a], C(i) && !e && (e = !0);
                        n.active = e }) }

                function g() {
                    var e, i;
                    f(), t.tools.forOwn(t.store.elements, function(a) { i = t.store.elements[a], e = y(i), w(i) ? (e ? i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.target + i.styles.transition.delayed) : i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.target + i.styles.transition.instant), v("reveal", i, e), i.revealing = !0, i.seen = !0, i.sequence && m(i, e)) : b(i) && (i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.initial + i.styles.transition.instant), v("reset", i), i.revealing = !1) }) }

                function m(e, i) {
                    var a = 0,
                        n = 0,
                        o = t.sequences[e.sequence.id];
                    o.blocked = !0, i && "onload" == e.config.useDelay && (n = e.config.delay), e.sequence.timer && (a = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = { started: new Date }, e.sequence.timer.clock = window.setTimeout(function() { o.blocked = !1, e.sequence.timer = null, u() }, Math.abs(o.interval) + n - a) }

                function v(t, e, i) {
                    var a = 0,
                        n = 0,
                        o = "after";
                    switch (t) {
                        case "reveal":
                            n = e.config.duration, i && (n += e.config.delay), o += "Reveal";
                            break;
                        case "reset":
                            n = e.config.duration, o += "Reset" }
                    e.timer && (a = Math.abs(e.timer.started - new Date), window.clearTimeout(e.timer.clock)), e.timer = { started: new Date }, e.timer.clock = window.setTimeout(function() { e.config[o](e.domEl), e.timer = null }, n - a) }

                function w(e) {
                    if (e.sequence) {
                        var i = t.sequences[e.sequence.id];
                        return i.active && !i.blocked && !e.revealing && !e.disabled }
                    return C(e) && !e.revealing && !e.disabled }

                function y(e) {
                    var i = e.config.useDelay;
                    return "always" === i || "onload" === i && !t.initialized || "once" === i && !e.seen }

                function b(e) {
                    if (e.sequence) {
                        var i = t.sequences[e.sequence.id];
                        return !i.active && e.config.reset && e.revealing && !e.disabled }
                    return !C(e) && e.config.reset && e.revealing && !e.disabled }

                function x(t) {
                    return { width: t.clientWidth, height: t.clientHeight } }

                function _(t) {
                    if (t && t !== window.document.documentElement) {
                        var e = T(t);
                        return { x: t.scrollLeft + e.left, y: t.scrollTop + e.top } }
                    return { x: window.pageXOffset, y: window.pageYOffset } }

                function T(t) {
                    var e = 0,
                        i = 0,
                        a = t.offsetHeight,
                        n = t.offsetWidth;
                    do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft); while (t = t.offsetParent);
                    return { top: e, left: i, height: a, width: n } }

                function C(t) {
                    function e() {
                        var e = d + r * s,
                            i = c + l * s,
                            a = p - r * s,
                            u = h - l * s,
                            f = o.y + t.config.viewOffset.top,
                            g = o.x + t.config.viewOffset.left,
                            m = o.y - t.config.viewOffset.bottom + n.height,
                            v = o.x - t.config.viewOffset.right + n.width;
                        return m > e && a > f && i > g && v > u }

                    function i() {
                        return "fixed" === window.getComputedStyle(t.domEl).position }
                    var a = T(t.domEl),
                        n = x(t.config.container),
                        o = _(t.config.container),
                        s = t.config.viewFactor,
                        r = a.height,
                        l = a.width,
                        d = a.top,
                        c = a.left,
                        p = d + r,
                        h = c + l;
                    return e() || i() }
                return a.prototype.defaults = { origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: .9, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", container: null, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, afterReveal: function(t) {}, afterReset: function(t) {} }, a.prototype.isSupported = function() {
                    var t = document.documentElement.style;
                    return "WebkitTransition" in t && "WebkitTransform" in t || "transition" in t && "transform" in t }, a.prototype.reveal = function(e, i, a, l) {
                    var d, u, f, g, m, v;
                    if (d = i && i.container ? n(i) : t.defaults.container, u = t.tools.isNode(e) ? [e] : Array.prototype.slice.call(d.querySelectorAll(e)), !u.length) return t;
                    i && "number" == typeof i && (a = i, i = {}), a && "number" == typeof a && (v = o(), m = t.sequences[v] = { id: v, interval: a, elemIds: [], active: !1 });
                    for (var w = 0; w < u.length; w++) g = u[w].getAttribute("data-sr-id"), g ? f = t.store.elements[g] : (f = { id: o(), domEl: u[w], seen: !1, revealing: !1 }, f.domEl.setAttribute("data-sr-id", f.id)), m && (f.sequence = { id: m.id, index: m.elemIds.length }, m.elemIds.push(f.id)), s(f, i || {}), r(f), c(f), t.tools.isMobile() && !f.config.mobile || !t.isSupported() ? (f.domEl.setAttribute("style", f.styles.inline), f.disabled = !0) : f.revealing || f.domEl.setAttribute("style", f.styles.inline + f.styles.transform.initial);
                    return !l && t.isSupported() && (p(e, i), t.initTimeout && window.clearTimeout(t.initTimeout), t.initTimeout = window.setTimeout(h, 0)), t }, a.prototype.sync = function() {
                    if (t.history.length && t.isSupported()) {
                        for (var e = 0; e < t.history.length; e++) {
                            var i = t.history[e];
                            t.reveal(i.selector, i.config, i.interval, !0) }
                        h() }
                    return t }, a }(), e = function() {
                function t() {}
                return t.prototype.isObject = function(t) {
                    return null !== t && "object" == typeof t && t.constructor == Object }, t.prototype.isNode = function(t) {
                    return "object" == typeof Node ? t instanceof Node : t && "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName }, t.prototype.forOwn = function(t, e) {
                    if (!this.isObject(t)) throw new TypeError('Expected "object", but received "' + typeof t + '".');
                    for (var i in t) t.hasOwnProperty(i) && e(i) }, t.prototype.extend = function(t, e) {
                    return this.forOwn(e, function(i) { this.isObject(e[i]) ? (t[i] && this.isObject(t[i]) || (t[i] = {}), this.extend(t[i], e[i])) : t[i] = e[i] }.bind(this)), t }, t.prototype.extendClone = function(t, e) {
                    return this.extend(this.extend({}, t), e) }, t.prototype.isMobile = function() {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }, t }(), i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame }.call(this), this.ScrollReveal }), function(t) {
        function e(e, i, a, n) {
            var o = e.text().split(i),
                s = "";
            o.length && (t(o).each(function(t, e) { s += '<span class="' + a + (t + 1) + '">' + e + "</span>" + n }), e.empty().append(s)) }
        var i = { init: function() {
                return this.each(function() { e(t(this), "", "char", "") }) }, words: function() {
                return this.each(function() { e(t(this), " ", "word", " ") }) }, lines: function() {
                return this.each(function() {
                    var i = "eefec303079ad17405c889e092e105b0";
                    e(t(this).children("br").replaceWith(i).end(), i, "line", "") }) } };
        t.fn.lettering = function(e) {
            return e && i[e] ? i[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (t.error("Method " + e + " does not exist on jQuery.lettering"), this) : i.init.apply(this, [].slice.call(arguments, 0)) } }(jQuery), function(t) { "use strict";

        function e(e) {
            return /In/.test(e) || t.inArray(e, t.fn.textillate.defaults.inEffects) >= 0 }

        function i(e) {
            return /Out/.test(e) || t.inArray(e, t.fn.textillate.defaults.outEffects) >= 0 }

        function a(t) {
            return "true" !== t && "false" !== t ? t : "true" === t }

        function n(e) {
            var i = e.attributes || [],
                n = {};
            return i.length ? (t.each(i, function(t, e) {
                var i = e.nodeName.replace(/delayscale/, "delayScale"); /^data-in-*/.test(i) ? (n["in"] = n["in"] || {}, n["in"][i.replace(/data-in-/, "")] = a(e.nodeValue)) : /^data-out-*/.test(i) ? (n.out = n.out || {}, n.out[i.replace(/data-out-/, "")] = a(e.nodeValue)) : /^data-*/.test(i) && (n[i.replace(/data-/, "")] = a(e.nodeValue)) }), n) : n }

        function o(t) {
            for (var e, i, a = t.length; a; e = parseInt(Math.random() * a), i = t[--a], t[a] = t[e], t[e] = i);
            return t }

        function s(t, e, i) { t.addClass("animated " + e).css("visibility", "visible").show(), t.one("animationend webkitAnimationEnd oAnimationEnd", function() { t.removeClass("animated " + e), i && i() }) }

        function r(a, n, r) {
            var l = a.length;
            return l ? (n.shuffle && (a = o(a)), n.reverse && (a = a.toArray().reverse()), void t.each(a, function(a, o) {
                function d() { e(n.effect) ? c.css("visibility", "visible") : i(n.effect) && c.css("visibility", "hidden"), l -= 1, !l && r && r() }
                var c = t(o),
                    p = n.sync ? n.delay : n.delay * a * n.delayScale;
                c.text() ? setTimeout(function() { s(c, n.effect, d) }, p) : d() })) : void(r && r()) }
        var l = function(a, o) {
            var s = this,
                l = t(a);
            s.init = function() { s.$texts = l.find(o.selector), s.$texts.length || (s.$texts = t('<ul class="texts"><li>' + l.html() + "</li></ul>"), l.html(s.$texts)), s.$texts.hide(), s.$current = t("<span>").html(s.$texts.find(":first-child").html()).prependTo(l), e(o["in"].effect) ? s.$current.css("visibility", "hidden") : i(o.out.effect) && s.$current.css("visibility", "visible"), s.setOptions(o), s.timeoutRun = null, setTimeout(function() { s.options.autoStart && s.start() }, s.options.initialDelay) }, s.setOptions = function(t) { s.options = t }, s.triggerEvent = function(e) {
                var i = t.Event(e + ".tlt");
                return l.trigger(i, s), i }, s["in"] = function(a, o) { a = a || 0;
                var l, d = s.$texts.find(":nth-child(" + ((a || 0) + 1) + ")"),
                    c = t.extend(!0, {}, s.options, d.length ? n(d[0]) : {});
                d.addClass("current"), s.triggerEvent("inAnimationBegin"), s.$current.html(d.html()).lettering("words"), "char" == s.options.type && s.$current.find('[class^="word"]').css({ display: "inline-block", "-webkit-transform": "translate3d(0,0,0)", "-moz-transform": "translate3d(0,0,0)", "-o-transform": "translate3d(0,0,0)", transform: "translate3d(0,0,0)" }).each(function() { t(this).lettering() }), l = s.$current.find('[class^="' + s.options.type + '"]').css("display", "inline-block"), e(c["in"].effect) ? l.css("visibility", "hidden") : i(c["in"].effect) && l.css("visibility", "visible"), s.currentIndex = a, r(l, c["in"], function() { s.triggerEvent("inAnimationEnd"), c["in"].callback && c["in"].callback(), o && o(s) }) }, s.out = function(e) {
                var i = s.$texts.find(":nth-child(" + ((s.currentIndex || 0) + 1) + ")"),
                    a = s.$current.find('[class^="' + s.options.type + '"]'),
                    o = t.extend(!0, {}, s.options, i.length ? n(i[0]) : {});
                s.triggerEvent("outAnimationBegin"), r(a, o.out, function() { i.removeClass("current"), s.triggerEvent("outAnimationEnd"), o.out.callback && o.out.callback(), e && e(s) }) }, s.start = function(t) { setTimeout(function() { s.triggerEvent("start"),
                        function e(t) { s["in"](t, function() {
                                var i = s.$texts.children().length;
                                t += 1, !s.options.loop && t >= i ? (s.options.callback && s.options.callback(), s.triggerEvent("end")) : (t %= i, s.timeoutRun = setTimeout(function() { s.out(function() { e(t) }) }, s.options.minDisplayTime)) }) }(t || 0) }, s.options.initialDelay) }, s.stop = function() { s.timeoutRun && (clearInterval(s.timeoutRun), s.timeoutRun = null) }, s.init() };
        t.fn.textillate = function(e, i) {
            return this.each(function() {
                var a = t(this),
                    o = a.data("textillate"),
                    s = t.extend(!0, {}, t.fn.textillate.defaults, n(this), "object" == typeof e && e);
                o ? "string" == typeof e ? o[e].apply(o, [].concat(i)) : o.setOptions.call(o, s) : a.data("textillate", o = new l(this, s)) }) }, t.fn.textillate.defaults = { selector: ".texts", loop: !1, minDisplayTime: 2e3, initialDelay: 0, "in": { effect: "fadeInLeftBig", delayScale: 1.5, delay: 50, sync: !1, reverse: !1, shuffle: !1, callback: function() {} }, out: { effect: "hinge", delayScale: 1.5, delay: 50, sync: !1, reverse: !1, shuffle: !1, callback: function() {} }, autoStart: !0, inEffects: [], outEffects: ["hinge"], callback: function() {}, type: "char" } }(jQuery), ! function(t, e, i, a) {
        function n(e, i) { this.settings = null, this.options = t.extend({}, n.Defaults, i), this.$element = t(e), this.drag = t.extend({}, h), this.state = t.extend({}, u), this.e = t.extend({}, f), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], t.each(n.Plugins, t.proxy(function(t, e) { this._plugins[t[0].toLowerCase() + t.slice(1)] = new e(this) }, this)), t.each(n.Pipe, t.proxy(function(e, i) { this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) }) }, this)), this.setup(), this.initialize() }

        function o(t) {
            if (t.touches !== a) return { x: t.touches[0].pageX, y: t.touches[0].pageY };
            if (t.touches === a) {
                if (t.pageX !== a) return { x: t.pageX, y: t.pageY };
                if (t.pageX === a) return { x: t.clientX, y: t.clientY } } }

        function s(t) {
            var e, a, n = i.createElement("div"),
                o = t;
            for (e in o)
                if (a = o[e], "undefined" != typeof n.style[a]) return n = null, [a, e];
            return [!1] }

        function r() {
            return s(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] }

        function l() {
            return s(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] }

        function d() {
            return s(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] }

        function c() {
            return "ontouchstart" in e || !!navigator.msMaxTouchPoints }

        function p() {
            return e.navigator.msPointerEnabled }
        var h, u, f;
        h = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, u = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, f = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, n.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, n.Width = { Default: "default", Inner: "inner", Outer: "outer" }, n.Plugins = {}, n.Pipe = [{ filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() {
                var t = this._clones,
                    e = this.$stage.children(".cloned");
                (e.length !== t.length || !this.settings.loop && t.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = []) } }, { filter: ["items", "settings"], run: function() {
                var t, e, i = this._clones,
                    a = this._items,
                    n = this.settings.loop ? i.length - Math.max(2 * this.settings.items, 4) : 0;
                for (t = 0, e = Math.abs(n / 2); e > t; t++) n > 0 ? (this.$stage.children().eq(a.length + i.length - 1).remove(), i.pop(), this.$stage.children().eq(0).remove(), i.pop()) : (i.push(i.length / 2), this.$stage.append(a[i[i.length - 1]].clone().addClass("cloned")), i.push(a.length - 1 - (i.length - 1) / 2), this.$stage.prepend(a[i[i.length - 1]].clone().addClass("cloned"))) } }, { filter: ["width", "items", "settings"], run: function() {
                var t, e, i, a = this.settings.rtl ? 1 : -1,
                    n = (this.width() / this.settings.items).toFixed(3),
                    o = 0;
                for (this._coordinates = [], e = 0, i = this._clones.length + this._items.length; i > e; e++) t = this._mergers[this.relative(e)], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, o += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : n * t) * a, this._coordinates.push(o) } }, { filter: ["width", "items", "settings"], run: function() {
                var e, i, a = (this.width() / this.settings.items).toFixed(3),
                    n = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" };
                if (this.$stage.css(n), n = { width: this.settings.autoWidth ? "auto" : a - this.settings.margin }, n[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && t.grep(this._mergers, function(t) {
                        return t > 1 }).length > 0)
                    for (e = 0, i = this._coordinates.length; i > e; e++) n.width = Math.abs(this._coordinates[e]) - Math.abs(this._coordinates[e - 1] || 0) - this.settings.margin, this.$stage.children().eq(e).css(n);
                else this.$stage.children().css(n) } }, { filter: ["width", "items", "settings"], run: function(t) { t.current && this.reset(this.$stage.children().index(t.current)) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() {
                var t, e, i, a, n = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    s = this.coordinates(this.current()) + o,
                    r = s + this.width() * n,
                    l = [];
                for (i = 0, a = this._coordinates.length; a > i; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", s) && this.op(t, ">", r) || this.op(e, "<", s) && this.op(e, ">", r)) && l.push(i);
                this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass)) } }], n.prototype.initialize = function() {
            if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
                var e, i, n;
                if (e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : a, n = this.$element.children(i).width(), e.length && 0 >= n) return this.preloadAutoWidthImages(e), !1 }
            this.$element.addClass("owl-loading"), this.$stage = t("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized") }, n.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                a = -1,
                n = null;
            i ? (t.each(i, function(t) { e >= t && t > a && (a = Number(t)) }), n = t.extend({}, this.options, i[a]), delete n.responsive, n.responsiveClass && this.$element.attr("class", function(t, e) {
                    return e.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + a)) : n = t.extend({}, this.options),
                (null === this.settings || this._breakpoint !== a) && (this.trigger("change", { property: { name: "settings", value: n } }), this._breakpoint = a, this.settings = n, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } }))
        }, n.prototype.optionsLogic = function() { this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, n.prototype.prepare = function(e) {
            var i = this.trigger("prepare", { content: e });
            return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(e)), this.trigger("prepared", { content: i.data }), i.data }, n.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, a = t.proxy(function(t) {
                    return this[t] }, this._invalidated), n = {}; i > e;)(this._invalidated.all || t.grep(this._pipe[e].filter, a).length > 0) && this._pipe[e].run(n), e++;
            this._invalidated = {} }, n.prototype.width = function(t) {
            switch (t = t || n.Width.Default) {
                case n.Width.Inner:
                case n.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, n.prototype.refresh = function() {
            return 0 === this._items.length ? !1 : ((new Date).getTime(), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = e.orientation, this.watchVisibility(), this.trigger("refreshed"), void 0) }, n.prototype.eventsCall = function() { this.e._onDragStart = t.proxy(function(t) { this.onDragStart(t) }, this), this.e._onDragMove = t.proxy(function(t) { this.onDragMove(t) }, this), this.e._onDragEnd = t.proxy(function(t) { this.onDragEnd(t) }, this), this.e._onResize = t.proxy(function(t) { this.onResize(t) }, this), this.e._transitionEnd = t.proxy(function(t) { this.transitionEnd(t) }, this), this.e._preventClick = t.proxy(function(t) { this.preventClick(t) }, this) }, n.prototype.onThrottledResize = function() { e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate) }, n.prototype.onResize = function() {
            return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1 }, n.prototype.eventsRouter = function(t) {
            var e = t.type; "mousedown" === e || "touchstart" === e ? this.onDragStart(t) : "mousemove" === e || "touchmove" === e ? this.onDragMove(t) : "mouseup" === e || "touchend" === e ? this.onDragEnd(t) : "touchcancel" === e && this.onDragEnd(t) }, n.prototype.internalEvents = function() {
            var i = (c(), p());
            this.settings.mouseDrag ? (this.$stage.on("mousedown", t.proxy(function(t) { this.eventsRouter(t) }, this)), this.$stage.on("dragstart", function() {
                return !1 }), this.$stage.get(0).onselectstart = function() {
                return !1 }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !i && this.$stage.on("touchstart touchcancel", t.proxy(function(t) { this.eventsRouter(t) }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(e, "resize", t.proxy(this.onThrottledResize, this)) }, n.prototype.onDragStart = function(a) {
            var n, s, r, l;
            if (n = a.originalEvent || a || e.event, 3 === n.which || this.state.isTouch) return !1;
            if ("mousedown" === n.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, s = o(n).x, r = o(n).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) l = this.getTransformProperty(), this.drag.offsetX = l, this.animate(l), this.state.inMotion = !0;
            else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
            this.drag.startX = s - this.drag.offsetX, this.drag.startY = r - this.drag.offsetY, this.drag.start = s - this.drag.startX, this.drag.targetEl = n.target || n.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), t(i).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", t.proxy(function(t) { this.eventsRouter(t) }, this)) }, n.prototype.onDragMove = function(t) {
            var i, n, s, r, l, d;
            this.state.isTouch && (this.state.isScrolling || (i = t.originalEvent || t || e.event, n = o(i).x, s = o(i).y, this.drag.currentX = n - this.drag.startX, this.drag.currentY = s - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (r = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), l = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), d = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, r + d), l + d)), (this.drag.distance > 8 || this.drag.distance < -8) && (i.preventDefault !== a ? i.preventDefault() : i.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX))) }, n.prototype.onDragEnd = function(e) {
            var a, n, o;
            if (this.state.isTouch) {
                if ("mouseup" === e.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
                this.drag.endTime = (new Date).getTime(), a = this.drag.endTime - this.drag.startTime, n = Math.abs(this.drag.distance), (n > 3 || a > 300) && this.removeClick(this.drag.targetEl), o = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(o), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(o) || this.transitionEnd(), this.drag.distance = 0, t(i).off(".owl.dragEvents") } }, n.prototype.removeClick = function(i) { this.drag.targetEl = i, t(i).on("click.preventClick", this.e._preventClick), e.setTimeout(function() { t(i).off("click.preventClick") }, 300) }, n.prototype.preventClick = function(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1, e.stopPropagation && e.stopPropagation(), t(e.target).off("click.preventClick") }, n.prototype.getTransformProperty = function() {
            var t, i;
            return t = e.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), t = t.replace(/matrix(3d)?\(|\)/g, "").split(","), i = 16 === t.length, i !== !0 ? t[4] : t[12] }, n.prototype.closest = function(e) {
            var i = -1,
                a = 30,
                n = this.width(),
                o = this.coordinates();
            return this.settings.freeDrag || t.each(o, t.proxy(function(t, s) {
                return e > s - a && s + a > e ? i = t : this.op(e, "<", s) && this.op(e, ">", o[t + 1] || s - n) && (i = "left" === this.state.direction ? t + 1 : t), -1 === i }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (i = e = this.maximum())), i }, n.prototype.animate = function(e) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + e + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: e + "px" }) : this.$stage.animate({ left: e }, this.speed() / 1e3, this.settings.fallbackEasing, t.proxy(function() { this.state.inMotion && this.transitionEnd() }, this)) }, n.prototype.current = function(t) {
            if (t === a) return this._current;
            if (0 === this._items.length) return a;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", { property: { name: "position", value: t } });
                e.data !== a && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) }
            return this._current }, n.prototype.invalidate = function(t) { this._invalidated[t] = !0 }, n.prototype.reset = function(t) { t = this.normalize(t), t !== a && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"])) }, n.prototype.normalize = function(e, i) {
            var n = i ? this._items.length : this._items.length + this._clones.length;
            return !t.isNumeric(e) || 1 > n ? a : e = this._clones.length ? (e % n + n) % n : Math.max(this.minimum(i), Math.min(this.maximum(i), e)) }, n.prototype.relative = function(t) {
            return t = this.normalize(t), t -= this._clones.length / 2, this.normalize(t, !0) }, n.prototype.maximum = function(t) {
            var e, i, a, n = 0,
                o = this.settings;
            if (t) return this._items.length - 1;
            if (!o.loop && o.center) e = this._items.length - 1;
            else if (o.loop || o.center)
                if (o.loop || o.center) e = this._items.length + o.items;
                else {
                    if (!o.autoWidth && !o.merge) throw "Can not detect maximum absolute position.";
                    for (revert = o.rtl ? 1 : -1, i = this.$stage.width() - this.$element.width();
                        (a = this.coordinates(n)) && !(a * revert >= i);) e = ++n }
            else e = this._items.length - o.items;
            return e }, n.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2 }, n.prototype.items = function(t) {
            return t === a ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, n.prototype.mergers = function(t) {
            return t === a ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, n.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                n = i + this._items.length,
                o = function(t) {
                    return t % 2 === 0 ? n + t / 2 : i - (t + 1) / 2 };
            return e === a ? t.map(this._clones, function(t, e) {
                return o(e) }) : t.map(this._clones, function(t, i) {
                return t === e ? o(i) : null }) }, n.prototype.speed = function(t) {
            return t !== a && (this._speed = t), this._speed }, n.prototype.coordinates = function(e) {
            var i = null;
            return e === a ? t.map(this._coordinates, t.proxy(function(t, e) {
                return this.coordinates(e) }, this)) : (this.settings.center ? (i = this._coordinates[e], i += (this.width() - i + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : i = this._coordinates[e - 1] || 0, i) }, n.prototype.duration = function(t, e, i) {
            return Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed) }, n.prototype.to = function(i, a) {
            if (this.settings.loop) {
                var n = i - this.relative(this.current()),
                    o = this.current(),
                    s = this.current(),
                    r = this.current() + n,
                    l = 0 > s - r,
                    d = this._clones.length + this._items.length;
                r < this.settings.items && l === !1 ? (o = s + this._items.length, this.reset(o)) : r >= d - this.settings.items && l === !0 && (o = s - this._items.length, this.reset(o)), e.clearTimeout(this.e._goToLoop), this.e._goToLoop = e.setTimeout(t.proxy(function() { this.speed(this.duration(this.current(), o + n, a)), this.current(o + n), this.update() }, this), 30) } else this.speed(this.duration(this.current(), i, a)), this.current(i), this.update() }, n.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, n.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, n.prototype.transitionEnd = function(t) {
            return t !== a && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated")) }, n.prototype.viewport = function() {
            var a;
            if (this.options.responsiveBaseElement !== e) a = t(this.options.responsiveBaseElement).width();
            else if (e.innerWidth) a = e.innerWidth;
            else {
                if (!i.documentElement || !i.documentElement.clientWidth) throw "Can not detect viewport width.";
                a = i.documentElement.clientWidth }
            return a }, n.prototype.replace = function(e) { this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() {
                return 1 === this.nodeType }).each(t.proxy(function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(t.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, n.prototype.add = function(t, e) { e = e === a ? this._items.length : this.normalize(e, !0), this.trigger("add", { content: t, position: e }), 0 === this._items.length || e === this._items.length ? (this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: t, position: e }) }, n.prototype.remove = function(t) { t = this.normalize(t, !0), t !== a && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t })) }, n.prototype.addTriggerableEvents = function() {
            var e = t.proxy(function(e, i) {
                return t.proxy(function(t) { t.relatedTarget !== this && (this.suppress([i]), e.apply(this, [].slice.call(arguments, 1)), this.release([i])) }, this) }, this);
            t.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, t.proxy(function(t, i) { this.$element.on(t + ".owl.carousel", e(i, t + ".owl.carousel")) }, this)) }, n.prototype.watchVisibility = function() {
            function i(t) {
                return t.offsetWidth > 0 && t.offsetHeight > 0 }

            function a() { i(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), e.clearInterval(this.e._checkVisibile)) }
            i(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), e.clearInterval(this.e._checkVisibile), this.e._checkVisibile = e.setInterval(t.proxy(a, this), 500)) }, n.prototype.preloadAutoWidthImages = function(e) {
            var i, a, n, o;
            i = 0, a = this, e.each(function(s, r) { n = t(r), o = new Image, o.onload = function() { i++, n.attr("src", o.src), n.css("opacity", 1), i >= e.length && (a.state.imagesLoaded = !0, a.initialize()) }, o.src = n.attr("src") || n.attr("data-src") || n.attr("data-src-retina") }) }, n.prototype.destroy = function() { this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && t(e).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
            for (var a in this._plugins) this._plugins[a].destroy();
            (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), t(i).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
                return !1 })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap() }, n.prototype.op = function(t, e, i) {
            var a = this.settings.rtl;
            switch (e) {
                case "<":
                    return a ? t > i : i > t;
                case ">":
                    return a ? i > t : t > i;
                case ">=":
                    return a ? i >= t : t >= i;
                case "<=":
                    return a ? t >= i : i >= t } }, n.prototype.on = function(t, e, i, a) { t.addEventListener ? t.addEventListener(e, i, a) : t.attachEvent && t.attachEvent("on" + e, i) }, n.prototype.off = function(t, e, i, a) { t.removeEventListener ? t.removeEventListener(e, i, a) : t.detachEvent && t.detachEvent("on" + e, i) }, n.prototype.trigger = function(e, i, a) {
            var n = { item: { count: this._items.length, index: this.current() } },
                o = t.camelCase(t.grep(["on", e, a], function(t) {
                    return t }).join("-").toLowerCase()),
                s = t.Event([e, "owl", a || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, n, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) { e.onTrigger && e.onTrigger(s) }), this.$element.trigger(s), this.settings && "function" == typeof this.settings[o] && this.settings[o].apply(this, s)), s }, n.prototype.suppress = function(e) { t.each(e, t.proxy(function(t, e) { this._supress[e] = !0 }, this)) }, n.prototype.release = function(e) { t.each(e, t.proxy(function(t, e) { delete this._supress[e] }, this)) }, n.prototype.browserSupport = function() {
            if (this.support3d = d(), this.support3d) { this.transformVendor = l();
                var t = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
                this.transitionEndVendor = t[r()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "" }
            this.state.orientation = e.orientation }, t.fn.owlCarousel = function(e) {
            return this.each(function() { t(this).data("owlCarousel") || t(this).data("owlCarousel", new n(this, e)) }) }, t.fn.owlCarousel.Constructor = n
    }(window.Zepto || window.jQuery, window, document), function(t, e) {
        var i = function(e) { this._core = e, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, a = i.center && Math.ceil(i.items / 2) || i.items, n = i.center && -1 * a || 0, o = (e.property && e.property.value || this._core.current()) + n, s = this._core.clones().length, r = t.proxy(function(t, e) { this.load(e) }, this); n++ < a;) this.load(s / 2 + this._core.relative(o)), s && t.each(this._core.clones(this._core.relative(o++)), r) }, this) }, this._core.options = t.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers) };
        i.Defaults = { lazyLoad: !1 }, i.prototype.load = function(i) {
            var a = this._core.$stage.children().eq(i),
                n = a && a.find(".owl-lazy");!n || t.inArray(a.get(0), this._loaded) > -1 || (n.each(t.proxy(function(i, a) {
                var n, o = t(a),
                    s = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
                this._core.trigger("load", { element: o, url: s }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() { o.css("opacity", 1), this._core.trigger("loaded", { element: o, url: s }, "lazy") }, this)).attr("src", s) : (n = new Image, n.onload = t.proxy(function() { o.css({ "background-image": "url(" + s + ")", opacity: "1" }), this._core.trigger("loaded", { element: o, url: s }, "lazy") }, this), n.src = s) }, this)), this._loaded.push(a.get(0))) }, i.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Lazy = i }(window.Zepto || window.jQuery, window, document), function(t) {
        var e = function(i) { this._core = i, this._handlers = { "initialized.owl.carousel": t.proxy(function() { this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": t.proxy(function(t) { this._core.settings.autoHeight && "position" == t.property.name && this.update() }, this), "loaded.owl.lazy": t.proxy(function(t) { this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update() }, this) }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers) };
        e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function() { this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass) }, e.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e }(window.Zepto || window.jQuery, window, document), function(t, e, i) {
        var a = function(e) { this._core = e, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = { "resize.owl.carousel": t.proxy(function(t) { this._core.settings.video && !this.isInFullScreen() && t.preventDefault() }, this), "refresh.owl.carousel changed.owl.carousel": t.proxy(function() { this._playing && this.stop() }, this), "prepared.owl.carousel": t.proxy(function(e) {
                    var i = t(e.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, t(e.content))) }, this) }, this._core.options = t.extend({}, a.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) { this.play(t) }, this)) };
        a.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, a.prototype.fetch = function(t, e) {
            var i = t.attr("data-vimeo-id") ? "vimeo" : "youtube",
                a = t.attr("data-vimeo-id") || t.attr("data-youtube-id"),
                n = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                s = t.attr("href");
            if (!s) throw new Error("Missing video URL.");
            if (a = s.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), a[3].indexOf("youtu") > -1) i = "youtube";
            else {
                if (!(a[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
                i = "vimeo" }
            a = a[6], this._videos[s] = { type: i, id: a, width: n, height: o }, e.attr("data-video", s), this.thumbnail(t, this._videos[s]) }, a.prototype.thumbnail = function(e, i) {
            var a, n, o, s = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                r = e.find("img"),
                l = "src",
                d = "",
                c = this._core.settings,
                p = function(t) { n = '<div class="owl-video-play-icon"></div>', a = c.lazyLoad ? '<div class="owl-video-tn ' + d + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(a), e.after(n) };
            return e.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (l = "data-src", d = "owl-lazy"), r.length ? (p(r.attr(l)), r.remove(), !1) : void("youtube" === i.type ? (o = "http://img.youtube.com/vi/" + i.id + "/hqdefault.jpg", p(o)) : "vimeo" === i.type && t.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { o = t[0].thumbnail_large, p(o) } })) }, a.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null }, a.prototype.play = function(e) { this._core.trigger("play", null, "video"), this._playing && this.stop();
            var i, a, n = t(e.target || e.srcElement),
                o = n.closest("." + this._core.settings.itemClass),
                s = this._videos[o.attr("data-video")],
                r = s.width || "100%",
                l = s.height || this._core.$stage.height(); "youtube" === s.type ? i = '<iframe width="' + r + '" height="' + l + '" src="http://www.youtube.com/embed/' + s.id + "?autoplay=1&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type && (i = '<iframe src="http://player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + r + '" height="' + l + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), o.addClass("owl-video-playing"), this._playing = o, a = t('<div style="height:' + l + "px; width:" + r + 'px" class="owl-video-frame">' + i + "</div>"), n.after(a) }, a.prototype.isInFullScreen = function() {
            var a = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
            return a && t(a).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), a && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== e.orientation ? (this._core.state.orientation = e.orientation, !1) : !0 }, a.prototype.destroy = function() {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Video = a }(window.Zepto || window.jQuery, window, document), function(t, e, i, a) {
        var n = function(e) { this.core = e, this.core.options = t.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = a, this.next = a, this.handlers = { "change.owl.carousel": t.proxy(function(t) { "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) { this.swapping = "translated" == t.type }, this), "translate.owl.carousel": t.proxy(function() { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
        n.Defaults = { animateOut: !1, animateIn: !1 }, n.prototype.swap = function() {
            if (1 === this.core.settings.items && this.core.support3d) { this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    a = this.core.$stage.children().eq(this.previous),
                    n = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    s = this.core.settings.animateOut;
                this.core.current() !== this.previous && (s && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), a.css({ left: e + "px" }).addClass("animated owl-animated-out").addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)), o && n.addClass("animated owl-animated-in").addClass(o).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", i)) } }, n.prototype.clear = function(e) { t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, n.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Animate = n }(window.Zepto || window.jQuery, window, document), function(t, e, i) {
        var a = function(e) { this.core = e, this.core.options = t.extend({}, a.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": t.proxy(function() { this.autoplay() }, this), "play.owl.autoplay": t.proxy(function(t, e, i) { this.play(e, i) }, this), "stop.owl.autoplay": t.proxy(function() { this.stop() }, this), "mouseover.owl.autoplay": t.proxy(function() { this.core.settings.autoplayHoverPause && this.pause() }, this), "mouseleave.owl.autoplay": t.proxy(function() { this.core.settings.autoplayHoverPause && this.autoplay() }, this) }, this.core.$element.on(this.handlers) };
        a.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, a.prototype.autoplay = function() { this.core.settings.autoplay && !this.core.state.videoPlay ? (e.clearInterval(this.interval), this.interval = e.setInterval(t.proxy(function() { this.play() }, this), this.core.settings.autoplayTimeout)) : e.clearInterval(this.interval) }, a.prototype.play = function() {
            return i.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void e.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, a.prototype.stop = function() { e.clearInterval(this.interval) }, a.prototype.pause = function() { e.clearInterval(this.interval) }, a.prototype.destroy = function() {
            var t, i;
            e.clearInterval(this.interval);
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, t.fn.owlCarousel.Constructor.Plugins.autoplay = a }(window.Zepto || window.jQuery, window, document), function(t) {
        "use strict";
        var e = function(i) { this._core = i, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": t.proxy(function(e) { this._core.settings.dotsData && this._templates.push(t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "add.owl.carousel": t.proxy(function(e) { this._core.settings.dotsData && this._templates.splice(e.position, 0, t(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "remove.owl.carousel prepared.owl.carousel": t.proxy(function(t) { this._core.settings.dotsData && this._templates.splice(t.position, 1) }, this), "change.owl.carousel": t.proxy(function(t) {
                    if ("position" == t.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var e = this._core.current(),
                            i = this._core.maximum(),
                            a = this._core.minimum();
                        t.data = t.property.value > i ? e >= i ? a : i : t.property.value < a ? i : t.property.value } }, this), "changed.owl.carousel": t.proxy(function(t) { "position" == t.property.name && this.draw() }, this), "refreshed.owl.carousel": t.proxy(function() { this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation") }, this) }, this._core.options = t.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers) };
        e.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, e.prototype.initialize = function() {
            var e, i, a = this._core.settings;
            a.dotsData || (this._templates = [t("<div>").addClass(a.dotClass).append(t("<span>")).prop("outerHTML")]), a.navContainer && a.dotsContainer || (this._controls.$container = t("<div>").addClass(a.controlsClass).appendTo(this.$element)), this._controls.$indicators = a.dotsContainer ? t(a.dotsContainer) : t("<div>").hide().addClass(a.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", t.proxy(function(e) {
                var i = t(e.target).parent().is(this._controls.$indicators) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(i, a.dotsSpeed) }, this)), e = a.navContainer ? t(a.navContainer) : t("<div>").addClass(a.navContainerClass).prependTo(this._controls.$container), this._controls.$next = t("<" + a.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(a.navClass[0]).html(a.navText[0]).hide().prependTo(e).on("click", t.proxy(function() { this.prev(a.navSpeed) }, this)), this._controls.$next.addClass(a.navClass[1]).html(a.navText[1]).hide().appendTo(e).on("click", t.proxy(function() { this.next(a.navSpeed) }, this));
            for (i in this._overrides) this._core[i] = t.proxy(this[i], this) }, e.prototype.destroy = function() {
            var t, e, i, a;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (a in this.overides) this._core[a] = this._overrides[a];
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, e.prototype.update = function() {
            var t, e, i, a = this._core.settings,
                n = this._core.clones().length / 2,
                o = n + this._core.items().length,
                s = a.center || a.autoWidth || a.dotData ? 1 : a.dotsEach || a.items;
            if ("page" !== a.slideBy && (a.slideBy = Math.min(a.slideBy, a.items)), a.dots || "page" == a.slideBy)
                for (this._pages = [], t = n, e = 0, i = 0; o > t; t++)(e >= s || 0 === e) && (this._pages.push({ start: t - n, end: t - n + s - 1 }), e = 0, ++i), e += this._core.mergers(this._core.relative(t)) }, e.prototype.draw = function() {
            var e, i, a = "",
                n = this._core.settings,
                o = (this._core.$stage.children(), this._core.relative(this._core.current()));
            if (!n.nav || n.loop || n.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= o), this._controls.$next.toggleClass("disabled", o >= this._core.maximum())), this._controls.$previous.toggle(n.nav), this._controls.$next.toggle(n.nav), n.dots) {
                if (e = this._pages.length - this._controls.$indicators.children().length, n.dotData && 0 !== e) {
                    for (i = 0; i < this._controls.$indicators.children().length; i++) a += this._templates[this._core.relative(i)];
                    this._controls.$indicators.html(a) } else e > 0 ? (a = new Array(e + 1).join(this._templates[0]), this._controls.$indicators.append(a)) : 0 > e && this._controls.$indicators.children().slice(e).remove();
                this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(t.inArray(this.current(), this._pages)).addClass("active") }
            this._controls.$indicators.toggle(n.dots) }, e.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotData ? 1 : i.dotsEach || i.items) } }, e.prototype.current = function() {
            var e = this._core.relative(this._core.current());
            return t.grep(this._pages, function(t) {
                return t.start <= e && t.end >= e }).pop() }, e.prototype.getPosition = function(e) {
            var i, a, n = this._core.settings;
            return "page" == n.slideBy ? (i = t.inArray(this.current(), this._pages), a = this._pages.length, e ? ++i : --i, i = this._pages[(i % a + a) % a].start) : (i = this._core.relative(this._core.current()), a = this._core.items().length, e ? i += n.slideBy : i -= n.slideBy), i
        }, e.prototype.next = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e) }, e.prototype.prev = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e) }, e.prototype.to = function(e, i, a) {
            var n;
            a ? t.proxy(this._overrides.to, this._core)(e, i) : (n = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % n + n) % n].start, i)) }, t.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document), function(t, e) { "use strict";
        var i = function(a) { this._core = a, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": t.proxy(function() { "URLHash" == this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": t.proxy(function(e) {
                    var i = t(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                    this._hashes[i] = e.content }, this) }, this._core.options = t.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function() {
                var t = e.location.hash.substring(1),
                    i = this._core.$stage.children(),
                    a = this._hashes[t] && i.index(this._hashes[t]) || 0;
                return t ? void this._core.to(a, !1, !0) : !1 }, this)) };
        i.Defaults = { URLhashListener: !1 }, i.prototype.destroy = function() {
            var i, a;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (a in Object.getOwnPropertyNames(this)) "function" != typeof this[a] && (this[a] = null) }, t.fn.owlCarousel.Constructor.Plugins.Hash = i }(window.Zepto || window.jQuery, window, document), ! function() { "use strict";

        function t(a) {
            if (!a) throw new Error("No options passed to Waypoint constructor");
            if (!a.element) throw new Error("No element option passed to Waypoint constructor");
            if (!a.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, a), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = a.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1 }
        var e = 0,
            i = {};
        t.prototype.queueTrigger = function(t) { this.group.queueTrigger(this, t) }, t.prototype.trigger = function(t) { this.enabled && this.callback && this.callback.apply(this, t) }, t.prototype.destroy = function() { this.context.remove(this), this.group.remove(this), delete i[this.key] }, t.prototype.disable = function() {
            return this.enabled = !1, this }, t.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this }, t.prototype.next = function() {
            return this.group.next(this) }, t.prototype.previous = function() {
            return this.group.previous(this) }, t.invokeAll = function(t) {
            var e = [];
            for (var a in i) e.push(i[a]);
            for (var n = 0, o = e.length; o > n; n++) e[n][t]() }, t.destroyAll = function() { t.invokeAll("destroy") }, t.disableAll = function() { t.invokeAll("disable") }, t.enableAll = function() { t.invokeAll("enable") }, t.refreshAll = function() { t.Context.refreshAll() }, t.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight }, t.viewportWidth = function() {
            return document.documentElement.clientWidth }, t.adapters = [], t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }, t.offsetAliases = { "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight() }, "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth() } }, window.Waypoint = t }(), function() { "use strict";

        function t(t) { window.setTimeout(t, 1e3 / 60) }

        function e(t) { this.element = t, this.Adapter = n.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t.waypointContextKey = this.key, a[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler() }
        var i = 0,
            a = {},
            n = window.Waypoint,
            o = window.onload;
        e.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh() }, e.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical);
            t && e && (this.adapter.off(".waypoints"), delete a[this.key]) }, e.prototype.createThrottledResizeHandler = function() {
            function t() { e.handleResize(), e.didResize = !1 }
            var e = this;
            this.adapter.on("resize.waypoints", function() { e.didResize || (e.didResize = !0, n.requestAnimationFrame(t)) }) }, e.prototype.createThrottledScrollHandler = function() {
            function t() { e.handleScroll(), e.didScroll = !1 }
            var e = this;
            this.adapter.on("scroll.waypoints", function() {
                (!e.didScroll || n.isTouch) && (e.didScroll = !0, n.requestAnimationFrame(t)) }) }, e.prototype.handleResize = function() { n.Context.refreshAll() }, e.prototype.handleScroll = function() {
            var t = {},
                e = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };
            for (var i in e) {
                var a = e[i],
                    n = a.newScroll > a.oldScroll,
                    o = n ? a.forward : a.backward;
                for (var s in this.waypoints[i]) {
                    var r = this.waypoints[i][s],
                        l = a.oldScroll < r.triggerPoint,
                        d = a.newScroll >= r.triggerPoint,
                        c = l && d,
                        p = !l && !d;
                    (c || p) && (r.queueTrigger(o), t[r.group.id] = r.group) } }
            for (var h in t) t[h].flushTriggers();
            this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll } }, e.prototype.innerHeight = function() {
            return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight() }, e.prototype.remove = function(t) { delete this.waypoints[t.axis][t.key], this.checkEmpty() }, e.prototype.innerWidth = function() {
            return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth() }, e.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var a = 0, n = t.length; n > a; a++) t[a].destroy() }, e.prototype.refresh = function() {
            var t, e = this.element == this.element.window,
                i = e ? void 0 : this.adapter.offset(),
                a = {};
            this.handleScroll(), t = { horizontal: { contextOffset: e ? 0 : i.left, contextScroll: e ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e ? 0 : i.top, contextScroll: e ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };
            for (var o in t) {
                var s = t[o];
                for (var r in this.waypoints[o]) {
                    var l, d, c, p, h, u = this.waypoints[o][r],
                        f = u.options.offset,
                        g = u.triggerPoint,
                        m = 0,
                        v = null == g;
                    u.element !== u.element.window && (m = u.adapter.offset()[s.offsetProp]), "function" == typeof f ? f = f.apply(u) : "string" == typeof f && (f = parseFloat(f), u.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))), l = s.contextScroll - s.contextOffset, u.triggerPoint = m + l - f, d = g < s.oldScroll, c = u.triggerPoint >= s.oldScroll, p = d && c, h = !d && !c, !v && p ? (u.queueTrigger(s.backward), a[u.group.id] = u.group) : !v && h ? (u.queueTrigger(s.forward), a[u.group.id] = u.group) : v && s.oldScroll >= u.triggerPoint && (u.queueTrigger(s.forward), a[u.group.id] = u.group) } }
            return n.requestAnimationFrame(function() {
                for (var t in a) a[t].flushTriggers() }), this }, e.findOrCreateByElement = function(t) {
            return e.findByElement(t) || new e(t) }, e.refreshAll = function() {
            for (var t in a) a[t].refresh() }, e.findByElement = function(t) {
            return a[t.waypointContextKey] }, window.onload = function() { o && o(), e.refreshAll() }, n.requestAnimationFrame = function(e) {
            var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
            i.call(window, e) }, n.Context = e }(), function() { "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint }

        function i(t) { this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), a[this.axis][this.name] = this }
        var a = { vertical: {}, horizontal: {} },
            n = window.Waypoint;
        i.prototype.add = function(t) { this.waypoints.push(t) }, i.prototype.clearTriggerQueues = function() { this.triggerQueues = { up: [], down: [], left: [], right: [] } }, i.prototype.flushTriggers = function() {
            for (var i in this.triggerQueues) {
                var a = this.triggerQueues[i],
                    n = "up" === i || "left" === i;
                a.sort(n ? e : t);
                for (var o = 0, s = a.length; s > o; o += 1) {
                    var r = a[o];
                    (r.options.continuous || o === a.length - 1) && r.trigger([i]) } }
            this.clearTriggerQueues() }, i.prototype.next = function(e) { this.waypoints.sort(t);
            var i = n.Adapter.inArray(e, this.waypoints),
                a = i === this.waypoints.length - 1;
            return a ? null : this.waypoints[i + 1] }, i.prototype.previous = function(e) { this.waypoints.sort(t);
            var i = n.Adapter.inArray(e, this.waypoints);
            return i ? this.waypoints[i - 1] : null }, i.prototype.queueTrigger = function(t, e) { this.triggerQueues[e].push(t) }, i.prototype.remove = function(t) {
            var e = n.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1) }, i.prototype.first = function() {
            return this.waypoints[0] }, i.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1] }, i.findOrCreate = function(t) {
            return a[t.axis][t.name] || new i(t) }, n.Group = i }(), function() { "use strict";

        function t(t) { this.$element = e(t) }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) { t.prototype[i] = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, t) } }), e.each(["extend", "inArray", "isEmptyObject"], function(i, a) { t[a] = e[a] }), i.adapters.push({ name: "jquery", Adapter: t }), i.Adapter = t }(), function() { "use strict";

        function t(t) {
            return function() {
                var i = [],
                    a = arguments[0];
                return t.isFunction(arguments[0]) && (a = t.extend({}, arguments[1]), a.handler = arguments[0]), this.each(function() {
                    var n = t.extend({}, a, { element: this }); "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n)) }), i } }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto)) }(), ! function(t) { "use strict";
        t.fn.counterUp = function(e) {
            var i, a = t.extend({ time: 400, delay: 10, formatter: !1, callback: function() {} }, e);
            return this.each(function() {
                var e = t(this),
                    n = { time: t(this).data("counterup-time") || a.time, delay: t(this).data("counterup-delay") || a.delay },
                    o = function() {
                        var t = [],
                            o = n.time / n.delay,
                            s = e.text(),
                            r = /[0-9]+,[0-9]+/.test(s);
                        s = s.replace(/,/g, "");
                        var l = (s.split(".")[1] || []).length,
                            d = /[0-9]+:[0-9]+:[0-9]+/.test(s);
                        if (d) {
                            var c = s.split(":"),
                                p = 1;
                            for (i = 0; c.length > 0;) i += p * parseInt(c.pop(), 10), p *= 60 }
                        for (var h = o; h >= 1; h--) {
                            var u = parseFloat(s / o * h).toFixed(l);
                            if (d) { u = parseInt(i / o * h);
                                var f = parseInt(u / 3600) % 24,
                                    g = parseInt(u / 60) % 60,
                                    m = parseInt(u % 60, 10);
                                u = (10 > f ? "0" + f : f) + ":" + (10 > g ? "0" + g : g) + ":" + (10 > m ? "0" + m : m) }
                            if (r)
                                for (;
                                    /(\d+)(\d{3})/.test(u.toString());) u = u.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                            a.formatter && (u = a.formatter.call(this, u)), t.unshift(u) }
                        e.data("counterup-nums", t), e.text("0");
                        var v = function() { e.html(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), n.delay) : (e.data("counterup-nums", null), e.data("counterup-func", null), a.callback.call(this)) };
                        e.data("counterup-func", v), setTimeout(e.data("counterup-func"), n.delay) };
                e.waypoint(function(t) { o(), this.destroy() }, { offset: "100%" }) }) } }(jQuery), ! function() {
        "use strict";

        function t(t) { t.fn.swiper = function(e) {
                var a;
                return t(this).each(function() {
                    var t = new i(this, e);
                    a || (a = t) }), a } }
        var e, i = function(t, a) {
            function n(t) {
                return Math.floor(t) }

            function o() { y.autoplayTimeoutId = setTimeout(function() { y.params.loop ? (y.fixLoop(), y._slideNext(), y.emit("onAutoplay", y)) : y.isEnd ? a.autoplayStopOnLast ? y.stopAutoplay() : (y._slideTo(0), y.emit("onAutoplay", y)) : (y._slideNext(), y.emit("onAutoplay", y)) }, y.params.autoplay) }

            function s(t, i) {
                var a = e(t.target);
                if (!a.is(i))
                    if ("string" == typeof i) a = a.parents(i);
                    else if (i.nodeType) {
                    var n;
                    return a.parents().each(function(t, e) { e === i && (n = i) }), n ? i : void 0 }
                return 0 !== a.length ? a[0] : void 0 }

            function r(t, e) { e = e || {};
                var i = window.MutationObserver || window.WebkitMutationObserver,
                    a = new i(function(t) { t.forEach(function(t) { y.onResize(!0), y.emit("onObserverUpdate", y, t) }) });
                a.observe(t, { attributes: "undefined" == typeof e.attributes ? !0 : e.attributes, childList: "undefined" == typeof e.childList ? !0 : e.childList, characterData: "undefined" == typeof e.characterData ? !0 : e.characterData }), y.observers.push(a) }

            function l(t) { t.originalEvent && (t = t.originalEvent);
                var e = t.keyCode || t.charCode;
                if (!y.params.allowSwipeToNext && (y.isHorizontal() && 39 === e || !y.isHorizontal() && 40 === e)) return !1;
                if (!y.params.allowSwipeToPrev && (y.isHorizontal() && 37 === e || !y.isHorizontal() && 38 === e)) return !1;
                if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === e || 39 === e || 38 === e || 40 === e) {
                        var i = !1;
                        if (y.container.parents(".swiper-slide").length > 0 && 0 === y.container.parents(".swiper-slide-active").length) return;
                        var a = { left: window.pageXOffset, top: window.pageYOffset },
                            n = window.innerWidth,
                            o = window.innerHeight,
                            s = y.container.offset();
                        y.rtl && (s.left = s.left - y.container[0].scrollLeft);
                        for (var r = [
                                [s.left, s.top],
                                [s.left + y.width, s.top],
                                [s.left, s.top + y.height],
                                [s.left + y.width, s.top + y.height]
                            ], l = 0; l < r.length; l++) {
                            var d = r[l];
                            d[0] >= a.left && d[0] <= a.left + n && d[1] >= a.top && d[1] <= a.top + o && (i = !0) }
                        if (!i) return }
                    y.isHorizontal() ? ((37 === e || 39 === e) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), (39 === e && !y.rtl || 37 === e && y.rtl) && y.slideNext(), (37 === e && !y.rtl || 39 === e && y.rtl) && y.slidePrev()) : ((38 === e || 40 === e) && (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 40 === e && y.slideNext(), 38 === e && y.slidePrev()) } }

            function d(t) { t.originalEvent && (t = t.originalEvent);
                var e = y.mousewheel.event,
                    i = 0,
                    a = y.rtl ? -1 : 1;
                if ("mousewheel" === e)
                    if (y.params.mousewheelForceToAxis)
                        if (y.isHorizontal()) {
                            if (!(Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY))) return;
                            i = t.wheelDeltaX * a } else {
                            if (!(Math.abs(t.wheelDeltaY) > Math.abs(t.wheelDeltaX))) return;
                            i = t.wheelDeltaY }
                else i = Math.abs(t.wheelDeltaX) > Math.abs(t.wheelDeltaY) ? -t.wheelDeltaX * a : -t.wheelDeltaY;
                else if ("DOMMouseScroll" === e) i = -t.detail;
                else if ("wheel" === e)
                    if (y.params.mousewheelForceToAxis)
                        if (y.isHorizontal()) {
                            if (!(Math.abs(t.deltaX) > Math.abs(t.deltaY))) return;
                            i = -t.deltaX * a } else {
                            if (!(Math.abs(t.deltaY) > Math.abs(t.deltaX))) return;
                            i = -t.deltaY }
                else i = Math.abs(t.deltaX) > Math.abs(t.deltaY) ? -t.deltaX * a : -t.deltaY;
                if (0 !== i) {
                    if (y.params.mousewheelInvert && (i = -i), y.params.freeMode) {
                        var n = y.getWrapperTranslate() + i * y.params.mousewheelSensitivity,
                            o = y.isBeginning,
                            s = y.isEnd;
                        if (n >= y.minTranslate() && (n = y.minTranslate()), n <= y.maxTranslate() && (n = y.maxTranslate()), y.setWrapperTransition(0), y.setWrapperTranslate(n), y.updateProgress(), y.updateActiveIndex(), (!o && y.isBeginning || !s && y.isEnd) && y.updateClasses(), y.params.freeModeSticky ? (clearTimeout(y.mousewheel.timeout), y.mousewheel.timeout = setTimeout(function() { y.slideReset() }, 300)) : y.params.lazyLoading && y.lazy && y.lazy.load(), 0 === n || n === y.maxTranslate()) return } else {
                        if ((new window.Date).getTime() - y.mousewheel.lastScrollTime > 60)
                            if (0 > i)
                                if (y.isEnd && !y.params.loop || y.animating) {
                                    if (y.params.mousewheelReleaseOnEdges) return !0 } else y.slideNext();
                        else if (y.isBeginning && !y.params.loop || y.animating) {
                            if (y.params.mousewheelReleaseOnEdges) return !0 } else y.slidePrev();
                        y.mousewheel.lastScrollTime = (new window.Date).getTime() }
                    return y.params.autoplay && y.stopAutoplay(), t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1 } }

            function c(t, i) { t = e(t);
                var a, n, o, s = y.rtl ? -1 : 1;
                a = t.attr("data-swiper-parallax") || "0", n = t.attr("data-swiper-parallax-x"), o = t.attr("data-swiper-parallax-y"), n || o ? (n = n || "0", o = o || "0") : y.isHorizontal() ? (n = a, o = "0") : (o = a, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * i * s + "%" : n * i * s + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i + "%" : o * i + "px", t.transform("translate3d(" + n + ", " + o + ",0px)") }

            function p(t) {
                return 0 !== t.indexOf("on") && (t = t[0] !== t[0].toUpperCase() ? "on" + t[0].toUpperCase() + t.substring(1) : "on" + t), t }
            if (!(this instanceof i)) return new i(t, a);
            var h = { direction: "horizontal", touchEventsTarget: "container", initialSlide: 0, speed: 300, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, iOSEdgeSwipeDetection: !1, iOSEdgeSwipeThreshold: 20, freeMode: !1, freeModeMomentum: !0, freeModeMomentumRatio: 1, freeModeMomentumBounce: !0, freeModeMomentumBounceRatio: 1, freeModeSticky: !1, freeModeMinimumVelocity: .02, autoHeight: !1, setWrapperSize: !1, virtualTranslate: !1, effect: "slide", coverflow: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 }, flip: { slideShadows: !0, limitRotation: !0 }, cube: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94 }, fade: { crossFade: !1 }, parallax: !1, scrollbar: null, scrollbarHide: !0, scrollbarDraggable: !1, scrollbarSnapOnRelease: !1, keyboardControl: !1, mousewheelControl: !1, mousewheelReleaseOnEdges: !1, mousewheelInvert: !1, mousewheelForceToAxis: !1, mousewheelSensitivity: 1, hashnav: !1, breakpoints: void 0, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: "column", slidesPerGroup: 1, centeredSlides: !1, slidesOffsetBefore: 0, slidesOffsetAfter: 0, roundLengths: !1, touchRatio: 1, touchAngle: 45, simulateTouch: !0, shortSwipes: !0, longSwipes: !0, longSwipesRatio: .5, longSwipesMs: 300, followFinger: !0, onlyExternal: !1, threshold: 0, touchMoveStopPropagation: !0, uniqueNavElements: !0, pagination: null, paginationElement: "span", paginationClickable: !1, paginationHide: !1, paginationBulletRender: null, paginationProgressRender: null, paginationFractionRender: null, paginationCustomRender: null, paginationType: "bullets", resistance: !0, resistanceRatio: .85, nextButton: null, prevButton: null, watchSlidesProgress: !1, watchSlidesVisibility: !1, grabCursor: !1, preventClicks: !0, preventClicksPropagation: !0, slideToClickedSlide: !1, lazyLoading: !1, lazyLoadingInPrevNext: !1, lazyLoadingInPrevNextAmount: 1, lazyLoadingOnTransitionStart: !1, preloadImages: !0, updateOnImagesReady: !0, loop: !1, loopAdditionalSlides: 0, loopedSlides: null, control: void 0, controlInverse: !1, controlBy: "slide", allowSwipeToPrev: !0, allowSwipeToNext: !0, swipeHandler: null, noSwiping: !0, noSwipingClass: "swiper-no-swiping", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slidePrevClass: "swiper-slide-prev", wrapperClass: "swiper-wrapper", bulletClass: "swiper-pagination-bullet", bulletActiveClass: "swiper-pagination-bullet-active", buttonDisabledClass: "swiper-button-disabled", paginationCurrentClass: "swiper-pagination-current", paginationTotalClass: "swiper-pagination-total", paginationHiddenClass: "swiper-pagination-hidden", paginationProgressbarClass: "swiper-pagination-progressbar", observer: !1, observeParents: !1, a11y: !1, prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", runCallbacksOnInit: !0 },
                u = a && a.virtualTranslate;
            a = a || {};
            var f = {};
            for (var g in a)
                if ("object" != typeof a[g] || null === a[g] || a[g].nodeType || a[g] === window || a[g] === document || "undefined" != typeof Dom7 && a[g] instanceof Dom7 || "undefined" != typeof jQuery && a[g] instanceof jQuery) f[g] = a[g];
                else { f[g] = {};
                    for (var m in a[g]) f[g][m] = a[g][m] }
            for (var v in h)
                if ("undefined" == typeof a[v]) a[v] = h[v];
                else if ("object" == typeof a[v])
                for (var w in h[v]) "undefined" == typeof a[v][w] && (a[v][w] = h[v][w]);
            var y = this;
            if (y.params = a, y.originalParams = f, y.classNames = [], "undefined" != typeof e && "undefined" != typeof Dom7 && (e = Dom7), ("undefined" != typeof e || (e = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (y.$ = e, y.currentBreakpoint = void 0, y.getActiveBreakpoint = function() {
                    if (!y.params.breakpoints) return !1;
                    var t, e = !1,
                        i = [];
                    for (t in y.params.breakpoints) y.params.breakpoints.hasOwnProperty(t) && i.push(t);
                    i.sort(function(t, e) {
                        return parseInt(t, 10) > parseInt(e, 10) });
                    for (var a = 0; a < i.length; a++) t = i[a], t >= window.innerWidth && !e && (e = t);
                    return e || "max" }, y.setBreakpoint = function() {
                    var t = y.getActiveBreakpoint();
                    if (t && y.currentBreakpoint !== t) {
                        var e = t in y.params.breakpoints ? y.params.breakpoints[t] : y.originalParams,
                            i = y.params.loop && e.slidesPerView !== y.params.slidesPerView;
                        for (var a in e) y.params[a] = e[a];
                        y.currentBreakpoint = t, i && y.destroyLoop && y.reLoop(!0) } }, y.params.breakpoints && y.setBreakpoint(), y.container = e(t), 0 !== y.container.length)) {
                if (y.container.length > 1) {
                    var b = [];
                    return y.container.each(function() { b.push(new i(this, a)) }), b }
                y.container[0].swiper = y, y.container.data("swiper", y), y.classNames.push("swiper-container-" + y.params.direction), y.params.freeMode && y.classNames.push("swiper-container-free-mode"), y.support.flexbox || (y.classNames.push("swiper-container-no-flexbox"), y.params.slidesPerColumn = 1), y.params.autoHeight && y.classNames.push("swiper-container-autoheight"), (y.params.parallax || y.params.watchSlidesVisibility) && (y.params.watchSlidesProgress = !0), ["cube", "coverflow", "flip"].indexOf(y.params.effect) >= 0 && (y.support.transforms3d ? (y.params.watchSlidesProgress = !0, y.classNames.push("swiper-container-3d")) : y.params.effect = "slide"), "slide" !== y.params.effect && y.classNames.push("swiper-container-" + y.params.effect), "cube" === y.params.effect && (y.params.resistanceRatio = 0, y.params.slidesPerView = 1, y.params.slidesPerColumn = 1, y.params.slidesPerGroup = 1, y.params.centeredSlides = !1, y.params.spaceBetween = 0, y.params.virtualTranslate = !0, y.params.setWrapperSize = !1), ("fade" === y.params.effect || "flip" === y.params.effect) && (y.params.slidesPerView = 1, y.params.slidesPerColumn = 1, y.params.slidesPerGroup = 1, y.params.watchSlidesProgress = !0, y.params.spaceBetween = 0, y.params.setWrapperSize = !1, "undefined" == typeof u && (y.params.virtualTranslate = !0)), y.params.grabCursor && y.support.touch && (y.params.grabCursor = !1), y.wrapper = y.container.children("." + y.params.wrapperClass), y.params.pagination && (y.paginationContainer = e(y.params.pagination), y.params.uniqueNavElements && "string" == typeof y.params.pagination && y.paginationContainer.length > 1 && 1 === y.container.find(y.params.pagination).length && (y.paginationContainer = y.container.find(y.params.pagination)), "bullets" === y.params.paginationType && y.params.paginationClickable ? y.paginationContainer.addClass("swiper-pagination-clickable") : y.params.paginationClickable = !1, y.paginationContainer.addClass("swiper-pagination-" + y.params.paginationType)), (y.params.nextButton || y.params.prevButton) && (y.params.nextButton && (y.nextButton = e(y.params.nextButton), y.params.uniqueNavElements && "string" == typeof y.params.nextButton && y.nextButton.length > 1 && 1 === y.container.find(y.params.nextButton).length && (y.nextButton = y.container.find(y.params.nextButton))), y.params.prevButton && (y.prevButton = e(y.params.prevButton), y.params.uniqueNavElements && "string" == typeof y.params.prevButton && y.prevButton.length > 1 && 1 === y.container.find(y.params.prevButton).length && (y.prevButton = y.container.find(y.params.prevButton)))), y.isHorizontal = function() {
                    return "horizontal" === y.params.direction }, y.rtl = y.isHorizontal() && ("rtl" === y.container[0].dir.toLowerCase() || "rtl" === y.container.css("direction")), y.rtl && y.classNames.push("swiper-container-rtl"), y.rtl && (y.wrongRTL = "-webkit-box" === y.wrapper.css("display")), y.params.slidesPerColumn > 1 && y.classNames.push("swiper-container-multirow"), y.device.android && y.classNames.push("swiper-container-android"), y.container.addClass(y.classNames.join(" ")), y.translate = 0, y.progress = 0, y.velocity = 0, y.lockSwipeToNext = function() { y.params.allowSwipeToNext = !1 }, y.lockSwipeToPrev = function() { y.params.allowSwipeToPrev = !1 }, y.lockSwipes = function() { y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !1 }, y.unlockSwipeToNext = function() { y.params.allowSwipeToNext = !0 }, y.unlockSwipeToPrev = function() { y.params.allowSwipeToPrev = !0 }, y.unlockSwipes = function() { y.params.allowSwipeToNext = y.params.allowSwipeToPrev = !0 }, y.params.grabCursor && (y.container[0].style.cursor = "move", y.container[0].style.cursor = "-webkit-grab", y.container[0].style.cursor = "-moz-grab", y.container[0].style.cursor = "grab"), y.imagesToLoad = [], y.imagesLoaded = 0, y.loadImage = function(t, e, i, a, n) {
                    function o() { n && n() }
                    var s;
                    t.complete && a ? o() : e ? (s = new window.Image, s.onload = o, s.onerror = o, i && (s.srcset = i), e && (s.src = e)) : o() }, y.preloadImages = function() {
                    function t() { "undefined" != typeof y && null !== y && (void 0 !== y.imagesLoaded && y.imagesLoaded++, y.imagesLoaded === y.imagesToLoad.length && (y.params.updateOnImagesReady && y.update(), y.emit("onImagesReady", y))) }
                    y.imagesToLoad = y.container.find("img");
                    for (var e = 0; e < y.imagesToLoad.length; e++) y.loadImage(y.imagesToLoad[e], y.imagesToLoad[e].currentSrc || y.imagesToLoad[e].getAttribute("src"), y.imagesToLoad[e].srcset || y.imagesToLoad[e].getAttribute("srcset"), !0, t) }, y.autoplayTimeoutId = void 0, y.autoplaying = !1, y.autoplayPaused = !1, y.startAutoplay = function() {
                    return "undefined" != typeof y.autoplayTimeoutId ? !1 : y.params.autoplay ? y.autoplaying ? !1 : (y.autoplaying = !0, y.emit("onAutoplayStart", y), void o()) : !1 }, y.stopAutoplay = function(t) { y.autoplayTimeoutId && (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId), y.autoplaying = !1, y.autoplayTimeoutId = void 0, y.emit("onAutoplayStop", y)) }, y.pauseAutoplay = function(t) { y.autoplayPaused || (y.autoplayTimeoutId && clearTimeout(y.autoplayTimeoutId), y.autoplayPaused = !0, 0 === t ? (y.autoplayPaused = !1, o()) : y.wrapper.transitionEnd(function() { y && (y.autoplayPaused = !1, y.autoplaying ? o() : y.stopAutoplay()) })) }, y.minTranslate = function() {
                    return -y.snapGrid[0] }, y.maxTranslate = function() {
                    return -y.snapGrid[y.snapGrid.length - 1] }, y.updateAutoHeight = function() {
                    var t = y.slides.eq(y.activeIndex)[0];
                    if ("undefined" != typeof t) {
                        var e = t.offsetHeight;
                        e && y.wrapper.css("height", e + "px") } }, y.updateContainerSize = function() {
                    var t, e;
                    t = "undefined" != typeof y.params.width ? y.params.width : y.container[0].clientWidth, e = "undefined" != typeof y.params.height ? y.params.height : y.container[0].clientHeight, 0 === t && y.isHorizontal() || 0 === e && !y.isHorizontal() || (t = t - parseInt(y.container.css("padding-left"), 10) - parseInt(y.container.css("padding-right"), 10), e = e - parseInt(y.container.css("padding-top"), 10) - parseInt(y.container.css("padding-bottom"), 10), y.width = t, y.height = e, y.size = y.isHorizontal() ? y.width : y.height) }, y.updateSlidesSize = function() { y.slides = y.wrapper.children("." + y.params.slideClass), y.snapGrid = [], y.slidesGrid = [], y.slidesSizesGrid = [];
                    var t, e = y.params.spaceBetween,
                        i = -y.params.slidesOffsetBefore,
                        a = 0,
                        o = 0;
                    if ("undefined" != typeof y.size) { "string" == typeof e && e.indexOf("%") >= 0 && (e = parseFloat(e.replace("%", "")) / 100 * y.size), y.virtualSize = -e, y.rtl ? y.slides.css({ marginLeft: "", marginTop: "" }) : y.slides.css({ marginRight: "", marginBottom: "" });
                        var s;
                        y.params.slidesPerColumn > 1 && (s = Math.floor(y.slides.length / y.params.slidesPerColumn) === y.slides.length / y.params.slidesPerColumn ? y.slides.length : Math.ceil(y.slides.length / y.params.slidesPerColumn) * y.params.slidesPerColumn, "auto" !== y.params.slidesPerView && "row" === y.params.slidesPerColumnFill && (s = Math.max(s, y.params.slidesPerView * y.params.slidesPerColumn)));
                        var r, l = y.params.slidesPerColumn,
                            d = s / l,
                            c = d - (y.params.slidesPerColumn * d - y.slides.length);
                        for (t = 0; t < y.slides.length; t++) { r = 0;
                            var p = y.slides.eq(t);
                            if (y.params.slidesPerColumn > 1) {
                                var h, u, f; "column" === y.params.slidesPerColumnFill ? (u = Math.floor(t / l), f = t - u * l, (u > c || u === c && f === l - 1) && ++f >= l && (f = 0, u++), h = u + f * s / l, p.css({ "-webkit-box-ordinal-group": h, "-moz-box-ordinal-group": h, "-ms-flex-order": h, "-webkit-order": h, order: h })) : (f = Math.floor(t / d), u = t - f * d), p.css({ "margin-top": 0 !== f && y.params.spaceBetween && y.params.spaceBetween + "px" }).attr("data-swiper-column", u).attr("data-swiper-row", f) } "none" !== p.css("display") && ("auto" === y.params.slidesPerView ? (r = y.isHorizontal() ? p.outerWidth(!0) : p.outerHeight(!0), y.params.roundLengths && (r = n(r))) : (r = (y.size - (y.params.slidesPerView - 1) * e) / y.params.slidesPerView, y.params.roundLengths && (r = n(r)), y.isHorizontal() ? y.slides[t].style.width = r + "px" : y.slides[t].style.height = r + "px"), y.slides[t].swiperSlideSize = r, y.slidesSizesGrid.push(r), y.params.centeredSlides ? (i = i + r / 2 + a / 2 + e, 0 === t && (i = i - y.size / 2 - e), Math.abs(i) < .001 && (i = 0), o % y.params.slidesPerGroup === 0 && y.snapGrid.push(i), y.slidesGrid.push(i)) : (o % y.params.slidesPerGroup === 0 && y.snapGrid.push(i), y.slidesGrid.push(i), i = i + r + e), y.virtualSize += r + e, a = r, o++) }
                        y.virtualSize = Math.max(y.virtualSize, y.size) + y.params.slidesOffsetAfter;
                        var g;
                        if (y.rtl && y.wrongRTL && ("slide" === y.params.effect || "coverflow" === y.params.effect) && y.wrapper.css({ width: y.virtualSize + y.params.spaceBetween + "px" }), (!y.support.flexbox || y.params.setWrapperSize) && (y.isHorizontal() ? y.wrapper.css({ width: y.virtualSize + y.params.spaceBetween + "px" }) : y.wrapper.css({ height: y.virtualSize + y.params.spaceBetween + "px" })), y.params.slidesPerColumn > 1 && (y.virtualSize = (r + y.params.spaceBetween) * s, y.virtualSize = Math.ceil(y.virtualSize / y.params.slidesPerColumn) - y.params.spaceBetween, y.wrapper.css({ width: y.virtualSize + y.params.spaceBetween + "px" }), y.params.centeredSlides)) {
                            for (g = [], t = 0; t < y.snapGrid.length; t++) y.snapGrid[t] < y.virtualSize + y.snapGrid[0] && g.push(y.snapGrid[t]);
                            y.snapGrid = g }
                        if (!y.params.centeredSlides) {
                            for (g = [], t = 0; t < y.snapGrid.length; t++) y.snapGrid[t] <= y.virtualSize - y.size && g.push(y.snapGrid[t]);
                            y.snapGrid = g, Math.floor(y.virtualSize - y.size) - Math.floor(y.snapGrid[y.snapGrid.length - 1]) > 1 && y.snapGrid.push(y.virtualSize - y.size) }
                        0 === y.snapGrid.length && (y.snapGrid = [0]), 0 !== y.params.spaceBetween && (y.isHorizontal() ? y.rtl ? y.slides.css({ marginLeft: e + "px" }) : y.slides.css({ marginRight: e + "px" }) : y.slides.css({ marginBottom: e + "px" })), y.params.watchSlidesProgress && y.updateSlidesOffset() } }, y.updateSlidesOffset = function() {
                    for (var t = 0; t < y.slides.length; t++) y.slides[t].swiperSlideOffset = y.isHorizontal() ? y.slides[t].offsetLeft : y.slides[t].offsetTop }, y.updateSlidesProgress = function(t) {
                    if ("undefined" == typeof t && (t = y.translate || 0), 0 !== y.slides.length) { "undefined" == typeof y.slides[0].swiperSlideOffset && y.updateSlidesOffset();
                        var e = -t;
                        y.rtl && (e = t), y.slides.removeClass(y.params.slideVisibleClass);
                        for (var i = 0; i < y.slides.length; i++) {
                            var a = y.slides[i],
                                n = (e - a.swiperSlideOffset) / (a.swiperSlideSize + y.params.spaceBetween);
                            if (y.params.watchSlidesVisibility) {
                                var o = -(e - a.swiperSlideOffset),
                                    s = o + y.slidesSizesGrid[i],
                                    r = o >= 0 && o < y.size || s > 0 && s <= y.size || 0 >= o && s >= y.size;
                                r && y.slides.eq(i).addClass(y.params.slideVisibleClass) }
                            a.progress = y.rtl ? -n : n } } }, y.updateProgress = function(t) { "undefined" == typeof t && (t = y.translate || 0);
                    var e = y.maxTranslate() - y.minTranslate(),
                        i = y.isBeginning,
                        a = y.isEnd;
                    0 === e ? (y.progress = 0, y.isBeginning = y.isEnd = !0) : (y.progress = (t - y.minTranslate()) / e, y.isBeginning = y.progress <= 0, y.isEnd = y.progress >= 1), y.isBeginning && !i && y.emit("onReachBeginning", y), y.isEnd && !a && y.emit("onReachEnd", y), y.params.watchSlidesProgress && y.updateSlidesProgress(t), y.emit("onProgress", y, y.progress) }, y.updateActiveIndex = function() {
                    var t, e, i, a = y.rtl ? y.translate : -y.translate;
                    for (e = 0; e < y.slidesGrid.length; e++) "undefined" != typeof y.slidesGrid[e + 1] ? a >= y.slidesGrid[e] && a < y.slidesGrid[e + 1] - (y.slidesGrid[e + 1] - y.slidesGrid[e]) / 2 ? t = e : a >= y.slidesGrid[e] && a < y.slidesGrid[e + 1] && (t = e + 1) : a >= y.slidesGrid[e] && (t = e);
                    (0 > t || "undefined" == typeof t) && (t = 0), i = Math.floor(t / y.params.slidesPerGroup), i >= y.snapGrid.length && (i = y.snapGrid.length - 1), t !== y.activeIndex && (y.snapIndex = i, y.previousIndex = y.activeIndex, y.activeIndex = t, y.updateClasses()) }, y.updateClasses = function() {
                    y.slides.removeClass(y.params.slideActiveClass + " " + y.params.slideNextClass + " " + y.params.slidePrevClass);
                    var t = y.slides.eq(y.activeIndex);
                    t.addClass(y.params.slideActiveClass);
                    var i = t.next("." + y.params.slideClass).addClass(y.params.slideNextClass);
                    y.params.loop && 0 === i.length && y.slides.eq(0).addClass(y.params.slideNextClass);
                    var a = t.prev("." + y.params.slideClass).addClass(y.params.slidePrevClass);
                    if (y.params.loop && 0 === a.length && y.slides.eq(-1).addClass(y.params.slidePrevClass), y.paginationContainer && y.paginationContainer.length > 0) {
                        var n, o = y.params.loop ? Math.ceil((y.slides.length - 2 * y.loopedSlides) / y.params.slidesPerGroup) : y.snapGrid.length;
                        if (y.params.loop ? (n = Math.ceil((y.activeIndex - y.loopedSlides) / y.params.slidesPerGroup), n > y.slides.length - 1 - 2 * y.loopedSlides && (n -= y.slides.length - 2 * y.loopedSlides), n > o - 1 && (n -= o), 0 > n && "bullets" !== y.params.paginationType && (n = o + n)) : n = "undefined" != typeof y.snapIndex ? y.snapIndex : y.activeIndex || 0, "bullets" === y.params.paginationType && y.bullets && y.bullets.length > 0 && (y.bullets.removeClass(y.params.bulletActiveClass), y.paginationContainer.length > 1 ? y.bullets.each(function() { e(this).index() === n && e(this).addClass(y.params.bulletActiveClass) }) : y.bullets.eq(n).addClass(y.params.bulletActiveClass)), "fraction" === y.params.paginationType && (y.paginationContainer.find("." + y.params.paginationCurrentClass).text(n + 1), y.paginationContainer.find("." + y.params.paginationTotalClass).text(o)), "progress" === y.params.paginationType) {
                            var s = (n + 1) / o,
                                r = s,
                                l = 1;
                            y.isHorizontal() || (l = s, r = 1), y.paginationContainer.find("." + y.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + r + ") scaleY(" + l + ")").transition(y.params.speed) }
                        "custom" === y.params.paginationType && y.params.paginationCustomRender && (y.paginationContainer.html(y.params.paginationCustomRender(y, n + 1, o)), y.emit("onPaginationRendered", y, y.paginationContainer[0]))
                    }
                    y.params.loop || (y.params.prevButton && y.prevButton && y.prevButton.length > 0 && (y.isBeginning ? (y.prevButton.addClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.disable(y.prevButton)) : (y.prevButton.removeClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.enable(y.prevButton))), y.params.nextButton && y.nextButton && y.nextButton.length > 0 && (y.isEnd ? (y.nextButton.addClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.disable(y.nextButton)) : (y.nextButton.removeClass(y.params.buttonDisabledClass), y.params.a11y && y.a11y && y.a11y.enable(y.nextButton))))
                }, y.updatePagination = function() {
                    if (y.params.pagination && y.paginationContainer && y.paginationContainer.length > 0) {
                        var t = "";
                        if ("bullets" === y.params.paginationType) {
                            for (var e = y.params.loop ? Math.ceil((y.slides.length - 2 * y.loopedSlides) / y.params.slidesPerGroup) : y.snapGrid.length, i = 0; e > i; i++) t += y.params.paginationBulletRender ? y.params.paginationBulletRender(i, y.params.bulletClass) : "<" + y.params.paginationElement + ' class="' + y.params.bulletClass + '"></' + y.params.paginationElement + ">";
                            y.paginationContainer.html(t), y.bullets = y.paginationContainer.find("." + y.params.bulletClass), y.params.paginationClickable && y.params.a11y && y.a11y && y.a11y.initPagination() } "fraction" === y.params.paginationType && (t = y.params.paginationFractionRender ? y.params.paginationFractionRender(y, y.params.paginationCurrentClass, y.params.paginationTotalClass) : '<span class="' + y.params.paginationCurrentClass + '"></span> / <span class="' + y.params.paginationTotalClass + '"></span>', y.paginationContainer.html(t)), "progress" === y.params.paginationType && (t = y.params.paginationProgressRender ? y.params.paginationProgressRender(y, y.params.paginationProgressbarClass) : '<span class="' + y.params.paginationProgressbarClass + '"></span>', y.paginationContainer.html(t)), "custom" !== y.params.paginationType && y.emit("onPaginationRendered", y, y.paginationContainer[0]) } }, y.update = function(t) {
                    function e() { a = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate()), y.setWrapperTranslate(a), y.updateActiveIndex(), y.updateClasses() }
                    if (y.updateContainerSize(), y.updateSlidesSize(), y.updateProgress(), y.updatePagination(), y.updateClasses(), y.params.scrollbar && y.scrollbar && y.scrollbar.set(), t) {
                        var i, a;
                        y.controller && y.controller.spline && (y.controller.spline = void 0), y.params.freeMode ? (e(), y.params.autoHeight && y.updateAutoHeight()) : (i = ("auto" === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0) : y.slideTo(y.activeIndex, 0, !1, !0), i || e()) } else y.params.autoHeight && y.updateAutoHeight() }, y.onResize = function(t) { y.params.breakpoints && y.setBreakpoint();
                    var e = y.params.allowSwipeToPrev,
                        i = y.params.allowSwipeToNext;
                    y.params.allowSwipeToPrev = y.params.allowSwipeToNext = !0, y.updateContainerSize(), y.updateSlidesSize(), ("auto" === y.params.slidesPerView || y.params.freeMode || t) && y.updatePagination(), y.params.scrollbar && y.scrollbar && y.scrollbar.set(), y.controller && y.controller.spline && (y.controller.spline = void 0);
                    var a = !1;
                    if (y.params.freeMode) {
                        var n = Math.min(Math.max(y.translate, y.maxTranslate()), y.minTranslate());
                        y.setWrapperTranslate(n), y.updateActiveIndex(), y.updateClasses(), y.params.autoHeight && y.updateAutoHeight() } else y.updateClasses(), a = ("auto" === y.params.slidesPerView || y.params.slidesPerView > 1) && y.isEnd && !y.params.centeredSlides ? y.slideTo(y.slides.length - 1, 0, !1, !0) : y.slideTo(y.activeIndex, 0, !1, !0);
                    y.params.lazyLoading && !a && y.lazy && y.lazy.load(), y.params.allowSwipeToPrev = e, y.params.allowSwipeToNext = i };
                var x = ["mousedown", "mousemove", "mouseup"];
                window.navigator.pointerEnabled ? x = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (x = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), y.touchEvents = { start: y.support.touch || !y.params.simulateTouch ? "touchstart" : x[0], move: y.support.touch || !y.params.simulateTouch ? "touchmove" : x[1], end: y.support.touch || !y.params.simulateTouch ? "touchend" : x[2] }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === y.params.touchEventsTarget ? y.container : y.wrapper).addClass("swiper-wp8-" + y.params.direction), y.initEvents = function(t) {
                    var e = t ? "off" : "on",
                        i = t ? "removeEventListener" : "addEventListener",
                        n = "container" === y.params.touchEventsTarget ? y.container[0] : y.wrapper[0],
                        o = y.support.touch ? n : document,
                        s = !!y.params.nested;
                    y.browser.ie ? (n[i](y.touchEvents.start, y.onTouchStart, !1), o[i](y.touchEvents.move, y.onTouchMove, s), o[i](y.touchEvents.end, y.onTouchEnd, !1)) : (y.support.touch && (n[i](y.touchEvents.start, y.onTouchStart, !1), n[i](y.touchEvents.move, y.onTouchMove, s), n[i](y.touchEvents.end, y.onTouchEnd, !1)), !a.simulateTouch || y.device.ios || y.device.android || (n[i]("mousedown", y.onTouchStart, !1), document[i]("mousemove", y.onTouchMove, s), document[i]("mouseup", y.onTouchEnd, !1))), window[i]("resize", y.onResize), y.params.nextButton && y.nextButton && y.nextButton.length > 0 && (y.nextButton[e]("click", y.onClickNext), y.params.a11y && y.a11y && y.nextButton[e]("keydown", y.a11y.onEnterKey)), y.params.prevButton && y.prevButton && y.prevButton.length > 0 && (y.prevButton[e]("click", y.onClickPrev), y.params.a11y && y.a11y && y.prevButton[e]("keydown", y.a11y.onEnterKey)), y.params.pagination && y.params.paginationClickable && (y.paginationContainer[e]("click", "." + y.params.bulletClass, y.onClickIndex), y.params.a11y && y.a11y && y.paginationContainer[e]("keydown", "." + y.params.bulletClass, y.a11y.onEnterKey)), (y.params.preventClicks || y.params.preventClicksPropagation) && n[i]("click", y.preventClicks, !0) }, y.attachEvents = function() { y.initEvents() }, y.detachEvents = function() { y.initEvents(!0) }, y.allowClick = !0, y.preventClicks = function(t) { y.allowClick || (y.params.preventClicks && t.preventDefault(), y.params.preventClicksPropagation && y.animating && (t.stopPropagation(), t.stopImmediatePropagation())) }, y.onClickNext = function(t) { t.preventDefault(), (!y.isEnd || y.params.loop) && y.slideNext() }, y.onClickPrev = function(t) { t.preventDefault(), (!y.isBeginning || y.params.loop) && y.slidePrev() }, y.onClickIndex = function(t) { t.preventDefault();
                    var i = e(this).index() * y.params.slidesPerGroup;
                    y.params.loop && (i += y.loopedSlides), y.slideTo(i) }, y.updateClickedSlide = function(t) {
                    var i = s(t, "." + y.params.slideClass),
                        a = !1;
                    if (i)
                        for (var n = 0; n < y.slides.length; n++) y.slides[n] === i && (a = !0);
                    if (!i || !a) return y.clickedSlide = void 0, void(y.clickedIndex = void 0);
                    if (y.clickedSlide = i, y.clickedIndex = e(i).index(), y.params.slideToClickedSlide && void 0 !== y.clickedIndex && y.clickedIndex !== y.activeIndex) {
                        var o, r = y.clickedIndex;
                        if (y.params.loop) {
                            if (y.animating) return;
                            o = e(y.clickedSlide).attr("data-swiper-slide-index"), y.params.centeredSlides ? r < y.loopedSlides - y.params.slidesPerView / 2 || r > y.slides.length - y.loopedSlides + y.params.slidesPerView / 2 ? (y.fixLoop(), r = y.wrapper.children("." + y.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() { y.slideTo(r) }, 0)) : y.slideTo(r) : r > y.slides.length - y.params.slidesPerView ? (y.fixLoop(), r = y.wrapper.children("." + y.params.slideClass + '[data-swiper-slide-index="' + o + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() { y.slideTo(r) }, 0)) : y.slideTo(r) } else y.slideTo(r) } };
                var _, T, C, S, k, P, I, A, L, O, M = "input, select, textarea, button",
                    z = Date.now(),
                    E = [];
                y.animating = !1, y.touches = { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 };
                var D, j;
                if (y.onTouchStart = function(t) {
                        if (t.originalEvent && (t = t.originalEvent), D = "touchstart" === t.type, D || !("which" in t) || 3 !== t.which) {
                            if (y.params.noSwiping && s(t, "." + y.params.noSwipingClass)) return void(y.allowClick = !0);
                            if (!y.params.swipeHandler || s(t, y.params.swipeHandler)) {
                                var i = y.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                    a = y.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                                if (!(y.device.ios && y.params.iOSEdgeSwipeDetection && i <= y.params.iOSEdgeSwipeThreshold)) {
                                    if (_ = !0, T = !1, C = !0, k = void 0, j = void 0, y.touches.startX = i, y.touches.startY = a, S = Date.now(), y.allowClick = !0, y.updateContainerSize(), y.swipeDirection = void 0, y.params.threshold > 0 && (A = !1), "touchstart" !== t.type) {
                                        var n = !0;
                                        e(t.target).is(M) && (n = !1), document.activeElement && e(document.activeElement).is(M) && document.activeElement.blur(), n && t.preventDefault() }
                                    y.emit("onTouchStart", y, t) } } } }, y.onTouchMove = function(t) {
                        if (t.originalEvent && (t = t.originalEvent), !D || "mousemove" !== t.type) {
                            if (t.preventedByNestedSwiper) return y.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, void(y.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                            if (y.params.onlyExternal) return y.allowClick = !1, void(_ && (y.touches.startX = y.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, y.touches.startY = y.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, S = Date.now()));
                            if (D && document.activeElement && t.target === document.activeElement && e(t.target).is(M)) return T = !0, void(y.allowClick = !1);
                            if (C && y.emit("onTouchMove", y, t), !(t.targetTouches && t.targetTouches.length > 1)) {
                                if (y.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, y.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, "undefined" == typeof k) {
                                    var i = 180 * Math.atan2(Math.abs(y.touches.currentY - y.touches.startY), Math.abs(y.touches.currentX - y.touches.startX)) / Math.PI;
                                    k = y.isHorizontal() ? i > y.params.touchAngle : 90 - i > y.params.touchAngle }
                                if (k && y.emit("onTouchMoveOpposite", y, t), "undefined" == typeof j && y.browser.ieTouch && (y.touches.currentX !== y.touches.startX || y.touches.currentY !== y.touches.startY) && (j = !0), _) {
                                    if (k) return void(_ = !1);
                                    if (j || !y.browser.ieTouch) { y.allowClick = !1, y.emit("onSliderMove", y, t), t.preventDefault(), y.params.touchMoveStopPropagation && !y.params.nested && t.stopPropagation(), T || (a.loop && y.fixLoop(), I = y.getWrapperTranslate(), y.setWrapperTransition(0), y.animating && y.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), y.params.autoplay && y.autoplaying && (y.params.autoplayDisableOnInteraction ? y.stopAutoplay() : y.pauseAutoplay()), O = !1, y.params.grabCursor && (y.container[0].style.cursor = "move", y.container[0].style.cursor = "-webkit-grabbing", y.container[0].style.cursor = "-moz-grabbin", y.container[0].style.cursor = "grabbing")), T = !0;
                                        var n = y.touches.diff = y.isHorizontal() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY;
                                        n *= y.params.touchRatio, y.rtl && (n = -n), y.swipeDirection = n > 0 ? "prev" : "next", P = n + I;
                                        var o = !0;
                                        if (n > 0 && P > y.minTranslate() ? (o = !1, y.params.resistance && (P = y.minTranslate() - 1 + Math.pow(-y.minTranslate() + I + n, y.params.resistanceRatio))) : 0 > n && P < y.maxTranslate() && (o = !1, y.params.resistance && (P = y.maxTranslate() + 1 - Math.pow(y.maxTranslate() - I - n, y.params.resistanceRatio))), o && (t.preventedByNestedSwiper = !0), !y.params.allowSwipeToNext && "next" === y.swipeDirection && I > P && (P = I), !y.params.allowSwipeToPrev && "prev" === y.swipeDirection && P > I && (P = I), y.params.followFinger) {
                                            if (y.params.threshold > 0) {
                                                if (!(Math.abs(n) > y.params.threshold || A)) return void(P = I);
                                                if (!A) return A = !0, y.touches.startX = y.touches.currentX, y.touches.startY = y.touches.currentY, P = I, void(y.touches.diff = y.isHorizontal() ? y.touches.currentX - y.touches.startX : y.touches.currentY - y.touches.startY) }(y.params.freeMode || y.params.watchSlidesProgress) && y.updateActiveIndex(), y.params.freeMode && (0 === E.length && E.push({ position: y.touches[y.isHorizontal() ? "startX" : "startY"], time: S }), E.push({ position: y.touches[y.isHorizontal() ? "currentX" : "currentY"], time: (new window.Date).getTime() })), y.updateProgress(P), y.setWrapperTranslate(P) } } } } } }, y.onTouchEnd = function(t) {
                        if (t.originalEvent && (t = t.originalEvent), C && y.emit("onTouchEnd", y, t), C = !1, _) { y.params.grabCursor && T && _ && (y.container[0].style.cursor = "move", y.container[0].style.cursor = "-webkit-grab", y.container[0].style.cursor = "-moz-grab", y.container[0].style.cursor = "grab");
                            var i = Date.now(),
                                a = i - S;
                            if (y.allowClick && (y.updateClickedSlide(t), y.emit("onTap", y, t), 300 > a && i - z > 300 && (L && clearTimeout(L), L = setTimeout(function() { y && (y.params.paginationHide && y.paginationContainer.length > 0 && !e(t.target).hasClass(y.params.bulletClass) && y.paginationContainer.toggleClass(y.params.paginationHiddenClass), y.emit("onClick", y, t)) }, 300)), 300 > a && 300 > i - z && (L && clearTimeout(L), y.emit("onDoubleTap", y, t))), z = Date.now(), setTimeout(function() { y && (y.allowClick = !0) }, 0), !_ || !T || !y.swipeDirection || 0 === y.touches.diff || P === I) return void(_ = T = !1);
                            _ = T = !1;
                            var n;
                            if (n = y.params.followFinger ? y.rtl ? y.translate : -y.translate : -P, y.params.freeMode) {
                                if (n < -y.minTranslate()) return void y.slideTo(y.activeIndex);
                                if (n > -y.maxTranslate()) return void(y.slides.length < y.snapGrid.length ? y.slideTo(y.snapGrid.length - 1) : y.slideTo(y.slides.length - 1));
                                if (y.params.freeModeMomentum) {
                                    if (E.length > 1) {
                                        var o = E.pop(),
                                            s = E.pop(),
                                            r = o.position - s.position,
                                            l = o.time - s.time;
                                        y.velocity = r / l, y.velocity = y.velocity / 2, Math.abs(y.velocity) < y.params.freeModeMinimumVelocity && (y.velocity = 0), (l > 150 || (new window.Date).getTime() - o.time > 300) && (y.velocity = 0) } else y.velocity = 0;
                                    E.length = 0;
                                    var d = 1e3 * y.params.freeModeMomentumRatio,
                                        c = y.velocity * d,
                                        p = y.translate + c;
                                    y.rtl && (p = -p);
                                    var h, u = !1,
                                        f = 20 * Math.abs(y.velocity) * y.params.freeModeMomentumBounceRatio;
                                    if (p < y.maxTranslate()) y.params.freeModeMomentumBounce ? (p + y.maxTranslate() < -f && (p = y.maxTranslate() - f), h = y.maxTranslate(), u = !0, O = !0) : p = y.maxTranslate();
                                    else if (p > y.minTranslate()) y.params.freeModeMomentumBounce ? (p - y.minTranslate() > f && (p = y.minTranslate() + f), h = y.minTranslate(), u = !0, O = !0) : p = y.minTranslate();
                                    else if (y.params.freeModeSticky) {
                                        var g, m = 0;
                                        for (m = 0; m < y.snapGrid.length; m += 1)
                                            if (y.snapGrid[m] > -p) { g = m;
                                                break }
                                        p = Math.abs(y.snapGrid[g] - p) < Math.abs(y.snapGrid[g - 1] - p) || "next" === y.swipeDirection ? y.snapGrid[g] : y.snapGrid[g - 1], y.rtl || (p = -p) }
                                    if (0 !== y.velocity) d = y.rtl ? Math.abs((-p - y.translate) / y.velocity) : Math.abs((p - y.translate) / y.velocity);
                                    else if (y.params.freeModeSticky) return void y.slideReset();
                                    y.params.freeModeMomentumBounce && u ? (y.updateProgress(h), y.setWrapperTransition(d), y.setWrapperTranslate(p), y.onTransitionStart(), y.animating = !0, y.wrapper.transitionEnd(function() { y && O && (y.emit("onMomentumBounce", y), y.setWrapperTransition(y.params.speed), y.setWrapperTranslate(h), y.wrapper.transitionEnd(function() { y && y.onTransitionEnd() })) })) : y.velocity ? (y.updateProgress(p), y.setWrapperTransition(d), y.setWrapperTranslate(p), y.onTransitionStart(), y.animating || (y.animating = !0, y.wrapper.transitionEnd(function() { y && y.onTransitionEnd() }))) : y.updateProgress(p), y.updateActiveIndex() }
                                return void((!y.params.freeModeMomentum || a >= y.params.longSwipesMs) && (y.updateProgress(), y.updateActiveIndex())) }
                            var v, w = 0,
                                b = y.slidesSizesGrid[0];
                            for (v = 0; v < y.slidesGrid.length; v += y.params.slidesPerGroup) "undefined" != typeof y.slidesGrid[v + y.params.slidesPerGroup] ? n >= y.slidesGrid[v] && n < y.slidesGrid[v + y.params.slidesPerGroup] && (w = v, b = y.slidesGrid[v + y.params.slidesPerGroup] - y.slidesGrid[v]) : n >= y.slidesGrid[v] && (w = v, b = y.slidesGrid[y.slidesGrid.length - 1] - y.slidesGrid[y.slidesGrid.length - 2]);
                            var x = (n - y.slidesGrid[w]) / b;
                            if (a > y.params.longSwipesMs) {
                                if (!y.params.longSwipes) return void y.slideTo(y.activeIndex); "next" === y.swipeDirection && (x >= y.params.longSwipesRatio ? y.slideTo(w + y.params.slidesPerGroup) : y.slideTo(w)), "prev" === y.swipeDirection && (x > 1 - y.params.longSwipesRatio ? y.slideTo(w + y.params.slidesPerGroup) : y.slideTo(w)) } else {
                                if (!y.params.shortSwipes) return void y.slideTo(y.activeIndex); "next" === y.swipeDirection && y.slideTo(w + y.params.slidesPerGroup), "prev" === y.swipeDirection && y.slideTo(w) } } }, y._slideTo = function(t, e) {
                        return y.slideTo(t, e, !0, !0) }, y.slideTo = function(t, e, i, a) { "undefined" == typeof i && (i = !0), "undefined" == typeof t && (t = 0), 0 > t && (t = 0), y.snapIndex = Math.floor(t / y.params.slidesPerGroup), y.snapIndex >= y.snapGrid.length && (y.snapIndex = y.snapGrid.length - 1);
                        var n = -y.snapGrid[y.snapIndex];
                        y.params.autoplay && y.autoplaying && (a || !y.params.autoplayDisableOnInteraction ? y.pauseAutoplay(e) : y.stopAutoplay()), y.updateProgress(n);
                        for (var o = 0; o < y.slidesGrid.length; o++) - Math.floor(100 * n) >= Math.floor(100 * y.slidesGrid[o]) && (t = o);
                        return !y.params.allowSwipeToNext && n < y.translate && n < y.minTranslate() ? !1 : !y.params.allowSwipeToPrev && n > y.translate && n > y.maxTranslate() && (y.activeIndex || 0) !== t ? !1 : ("undefined" == typeof e && (e = y.params.speed), y.previousIndex = y.activeIndex || 0, y.activeIndex = t, y.rtl && -n === y.translate || !y.rtl && n === y.translate ? (y.params.autoHeight && y.updateAutoHeight(), y.updateClasses(), "slide" !== y.params.effect && y.setWrapperTranslate(n), !1) : (y.updateClasses(), y.onTransitionStart(i), 0 === e ? (y.setWrapperTranslate(n), y.setWrapperTransition(0), y.onTransitionEnd(i)) : (y.setWrapperTranslate(n), y.setWrapperTransition(e), y.animating || (y.animating = !0, y.wrapper.transitionEnd(function() { y && y.onTransitionEnd(i) }))), !0)) }, y.onTransitionStart = function(t) { "undefined" == typeof t && (t = !0), y.params.autoHeight && y.updateAutoHeight(), y.lazy && y.lazy.onTransitionStart(), t && (y.emit("onTransitionStart", y), y.activeIndex !== y.previousIndex && (y.emit("onSlideChangeStart", y), y.activeIndex > y.previousIndex ? y.emit("onSlideNextStart", y) : y.emit("onSlidePrevStart", y))) }, y.onTransitionEnd = function(t) { y.animating = !1, y.setWrapperTransition(0), "undefined" == typeof t && (t = !0), y.lazy && y.lazy.onTransitionEnd(), t && (y.emit("onTransitionEnd", y), y.activeIndex !== y.previousIndex && (y.emit("onSlideChangeEnd", y), y.activeIndex > y.previousIndex ? y.emit("onSlideNextEnd", y) : y.emit("onSlidePrevEnd", y))), y.params.hashnav && y.hashnav && y.hashnav.setHash() }, y.slideNext = function(t, e, i) {
                        return y.params.loop ? y.animating ? !1 : (y.fixLoop(), y.container[0].clientLeft, y.slideTo(y.activeIndex + y.params.slidesPerGroup, e, t, i)) : y.slideTo(y.activeIndex + y.params.slidesPerGroup, e, t, i) }, y._slideNext = function(t) {
                        return y.slideNext(!0, t, !0) }, y.slidePrev = function(t, e, i) {
                        return y.params.loop ? y.animating ? !1 : (y.fixLoop(), y.container[0].clientLeft, y.slideTo(y.activeIndex - 1, e, t, i)) : y.slideTo(y.activeIndex - 1, e, t, i) }, y._slidePrev = function(t) {
                        return y.slidePrev(!0, t, !0) }, y.slideReset = function(t, e, i) {
                        return y.slideTo(y.activeIndex, e, t) }, y.setWrapperTransition = function(t, e) { y.wrapper.transition(t), "slide" !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTransition(t), y.params.parallax && y.parallax && y.parallax.setTransition(t), y.params.scrollbar && y.scrollbar && y.scrollbar.setTransition(t), y.params.control && y.controller && y.controller.setTransition(t, e), y.emit("onSetTransition", y, t) }, y.setWrapperTranslate = function(t, e, i) {
                        var a = 0,
                            o = 0,
                            s = 0;
                        y.isHorizontal() ? a = y.rtl ? -t : t : o = t, y.params.roundLengths && (a = n(a), o = n(o)), y.params.virtualTranslate || (y.support.transforms3d ? y.wrapper.transform("translate3d(" + a + "px, " + o + "px, " + s + "px)") : y.wrapper.transform("translate(" + a + "px, " + o + "px)")), y.translate = y.isHorizontal() ? a : o;
                        var r, l = y.maxTranslate() - y.minTranslate();
                        r = 0 === l ? 0 : (t - y.minTranslate()) / l, r !== y.progress && y.updateProgress(t), e && y.updateActiveIndex(), "slide" !== y.params.effect && y.effects[y.params.effect] && y.effects[y.params.effect].setTranslate(y.translate), y.params.parallax && y.parallax && y.parallax.setTranslate(y.translate), y.params.scrollbar && y.scrollbar && y.scrollbar.setTranslate(y.translate), y.params.control && y.controller && y.controller.setTranslate(y.translate, i), y.emit("onSetTranslate", y, y.translate) }, y.getTranslate = function(t, e) {
                        var i, a, n, o;
                        return "undefined" == typeof e && (e = "x"), y.params.virtualTranslate ? y.rtl ? -y.translate : y.translate : (n = window.getComputedStyle(t, null), window.WebKitCSSMatrix ? (a = n.transform || n.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map(function(t) {
                            return t.replace(",", ".") }).join(", ")), o = new window.WebKitCSSMatrix("none" === a ? "" : a)) : (o = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = o.toString().split(",")), "x" === e && (a = window.WebKitCSSMatrix ? o.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === e && (a = window.WebKitCSSMatrix ? o.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), y.rtl && a && (a = -a), a || 0) }, y.getWrapperTranslate = function(t) {
                        return "undefined" == typeof t && (t = y.isHorizontal() ? "x" : "y"), y.getTranslate(y.wrapper[0], t) }, y.observers = [], y.initObservers = function() {
                        if (y.params.observeParents)
                            for (var t = y.container.parents(), e = 0; e < t.length; e++) r(t[e]);
                        r(y.container[0], { childList: !1 }), r(y.wrapper[0], { attributes: !1 }) }, y.disconnectObservers = function() {
                        for (var t = 0; t < y.observers.length; t++) y.observers[t].disconnect();
                        y.observers = [] }, y.createLoop = function() { y.wrapper.children("." + y.params.slideClass + "." + y.params.slideDuplicateClass).remove();
                        var t = y.wrapper.children("." + y.params.slideClass); "auto" !== y.params.slidesPerView || y.params.loopedSlides || (y.params.loopedSlides = t.length), y.loopedSlides = parseInt(y.params.loopedSlides || y.params.slidesPerView, 10), y.loopedSlides = y.loopedSlides + y.params.loopAdditionalSlides, y.loopedSlides > t.length && (y.loopedSlides = t.length);
                        var i, a = [],
                            n = [];
                        for (t.each(function(i, o) {
                                var s = e(this);
                                i < y.loopedSlides && n.push(o), i < t.length && i >= t.length - y.loopedSlides && a.push(o), s.attr("data-swiper-slide-index", i) }), i = 0; i < n.length; i++) y.wrapper.append(e(n[i].cloneNode(!0)).addClass(y.params.slideDuplicateClass));
                        for (i = a.length - 1; i >= 0; i--) y.wrapper.prepend(e(a[i].cloneNode(!0)).addClass(y.params.slideDuplicateClass)) }, y.destroyLoop = function() { y.wrapper.children("." + y.params.slideClass + "." + y.params.slideDuplicateClass).remove(), y.slides.removeAttr("data-swiper-slide-index") }, y.reLoop = function(t) {
                        var e = y.activeIndex - y.loopedSlides;
                        y.destroyLoop(), y.createLoop(), y.updateSlidesSize(), t && y.slideTo(e + y.loopedSlides, 0, !1) }, y.fixLoop = function() {
                        var t;
                        y.activeIndex < y.loopedSlides ? (t = y.slides.length - 3 * y.loopedSlides + y.activeIndex, t += y.loopedSlides, y.slideTo(t, 0, !1, !0)) : ("auto" === y.params.slidesPerView && y.activeIndex >= 2 * y.loopedSlides || y.activeIndex > y.slides.length - 2 * y.params.slidesPerView) && (t = -y.slides.length + y.activeIndex + y.loopedSlides, t += y.loopedSlides, y.slideTo(t, 0, !1, !0)) }, y.appendSlide = function(t) {
                        if (y.params.loop && y.destroyLoop(), "object" == typeof t && t.length)
                            for (var e = 0; e < t.length; e++) t[e] && y.wrapper.append(t[e]);
                        else y.wrapper.append(t);
                        y.params.loop && y.createLoop(), y.params.observer && y.support.observer || y.update(!0) }, y.prependSlide = function(t) { y.params.loop && y.destroyLoop();
                        var e = y.activeIndex + 1;
                        if ("object" == typeof t && t.length) {
                            for (var i = 0; i < t.length; i++) t[i] && y.wrapper.prepend(t[i]);
                            e = y.activeIndex + t.length } else y.wrapper.prepend(t);
                        y.params.loop && y.createLoop(), y.params.observer && y.support.observer || y.update(!0), y.slideTo(e, 0, !1) }, y.removeSlide = function(t) { y.params.loop && (y.destroyLoop(), y.slides = y.wrapper.children("." + y.params.slideClass));
                        var e, i = y.activeIndex;
                        if ("object" == typeof t && t.length) {
                            for (var a = 0; a < t.length; a++) e = t[a], y.slides[e] && y.slides.eq(e).remove(), i > e && i--;
                            i = Math.max(i, 0) } else e = t, y.slides[e] && y.slides.eq(e).remove(), i > e && i--, i = Math.max(i, 0);
                        y.params.loop && y.createLoop(), y.params.observer && y.support.observer || y.update(!0), y.params.loop ? y.slideTo(i + y.loopedSlides, 0, !1) : y.slideTo(i, 0, !1) }, y.removeAllSlides = function() {
                        for (var t = [], e = 0; e < y.slides.length; e++) t.push(e);
                        y.removeSlide(t) }, y.effects = { fade: { setTranslate: function() {
                                for (var t = 0; t < y.slides.length; t++) {
                                    var e = y.slides.eq(t),
                                        i = e[0].swiperSlideOffset,
                                        a = -i;
                                    y.params.virtualTranslate || (a -= y.translate);
                                    var n = 0;
                                    y.isHorizontal() || (n = a, a = 0);
                                    var o = y.params.fade.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                                    e.css({ opacity: o }).transform("translate3d(" + a + "px, " + n + "px, 0px)") } }, setTransition: function(t) {
                                if (y.slides.transition(t), y.params.virtualTranslate && 0 !== t) {
                                    var e = !1;
                                    y.slides.transitionEnd(function() {
                                        if (!e && y) { e = !0, y.animating = !1;
                                            for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < t.length; i++) y.wrapper.trigger(t[i]) } }) } } }, flip: { setTranslate: function() {
                                for (var t = 0; t < y.slides.length; t++) {
                                    var i = y.slides.eq(t),
                                        a = i[0].progress;
                                    y.params.flip.limitRotation && (a = Math.max(Math.min(i[0].progress, 1), -1));
                                    var n = i[0].swiperSlideOffset,
                                        o = -180 * a,
                                        s = o,
                                        r = 0,
                                        l = -n,
                                        d = 0;
                                    if (y.isHorizontal() ? y.rtl && (s = -s) : (d = l, l = 0, r = -s, s = 0), i[0].style.zIndex = -Math.abs(Math.round(a)) + y.slides.length, y.params.flip.slideShadows) {
                                        var c = y.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                            p = y.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                        0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "left" : "top") + '"></div>'), i.append(c)), 0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(p)), c.length && (c[0].style.opacity = Math.max(-a, 0)), p.length && (p[0].style.opacity = Math.max(a, 0)) }
                                    i.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + r + "deg) rotateY(" + s + "deg)") } }, setTransition: function(t) {
                                if (y.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), y.params.virtualTranslate && 0 !== t) {
                                    var i = !1;
                                    y.slides.eq(y.activeIndex).transitionEnd(function() {
                                        if (!i && y && e(this).hasClass(y.params.slideActiveClass)) { i = !0, y.animating = !1;
                                            for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = 0; a < t.length; a++) y.wrapper.trigger(t[a]) } }) } } }, cube: { setTranslate: function() {
                                var t, i = 0;
                                y.params.cube.shadow && (y.isHorizontal() ? (t = y.wrapper.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), y.wrapper.append(t)), t.css({ height: y.width + "px" })) : (t = y.container.find(".swiper-cube-shadow"), 0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'), y.container.append(t))));
                                for (var a = 0; a < y.slides.length; a++) {
                                    var n = y.slides.eq(a),
                                        o = 90 * a,
                                        s = Math.floor(o / 360);
                                    y.rtl && (o = -o, s = Math.floor(-o / 360));
                                    var r = Math.max(Math.min(n[0].progress, 1), -1),
                                        l = 0,
                                        d = 0,
                                        c = 0;
                                    a % 4 === 0 ? (l = 4 * -s * y.size, c = 0) : (a - 1) % 4 === 0 ? (l = 0, c = 4 * -s * y.size) : (a - 2) % 4 === 0 ? (l = y.size + 4 * s * y.size, c = y.size) : (a - 3) % 4 === 0 && (l = -y.size, c = 3 * y.size + 4 * y.size * s), y.rtl && (l = -l), y.isHorizontal() || (d = l, l = 0);
                                    var p = "rotateX(" + (y.isHorizontal() ? 0 : -o) + "deg) rotateY(" + (y.isHorizontal() ? o : 0) + "deg) translate3d(" + l + "px, " + d + "px, " + c + "px)";
                                    if (1 >= r && r > -1 && (i = 90 * a + 90 * r, y.rtl && (i = 90 * -a - 90 * r)), n.transform(p), y.params.cube.slideShadows) {
                                        var h = y.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                            u = y.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                        0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "left" : "top") + '"></div>'), n.append(h)), 0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(u)), h.length && (h[0].style.opacity = Math.max(-r, 0)), u.length && (u[0].style.opacity = Math.max(r, 0)) } }
                                if (y.wrapper.css({ "-webkit-transform-origin": "50% 50% -" + y.size / 2 + "px", "-moz-transform-origin": "50% 50% -" + y.size / 2 + "px", "-ms-transform-origin": "50% 50% -" + y.size / 2 + "px", "transform-origin": "50% 50% -" + y.size / 2 + "px" }), y.params.cube.shadow)
                                    if (y.isHorizontal()) t.transform("translate3d(0px, " + (y.width / 2 + y.params.cube.shadowOffset) + "px, " + -y.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + y.params.cube.shadowScale + ")");
                                    else {
                                        var f = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90),
                                            g = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2),
                                            m = y.params.cube.shadowScale,
                                            v = y.params.cube.shadowScale / g,
                                            w = y.params.cube.shadowOffset;
                                        t.transform("scale3d(" + m + ", 1, " + v + ") translate3d(0px, " + (y.height / 2 + w) + "px, " + -y.height / 2 / v + "px) rotateX(-90deg)") }
                                var b = y.isSafari || y.isUiWebView ? -y.size / 2 : 0;
                                y.wrapper.transform("translate3d(0px,0," + b + "px) rotateX(" + (y.isHorizontal() ? 0 : i) + "deg) rotateY(" + (y.isHorizontal() ? -i : 0) + "deg)") }, setTransition: function(t) { y.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), y.params.cube.shadow && !y.isHorizontal() && y.container.find(".swiper-cube-shadow").transition(t) } }, coverflow: { setTranslate: function() {
                                for (var t = y.translate, i = y.isHorizontal() ? -t + y.width / 2 : -t + y.height / 2, a = y.isHorizontal() ? y.params.coverflow.rotate : -y.params.coverflow.rotate, n = y.params.coverflow.depth, o = 0, s = y.slides.length; s > o; o++) {
                                    var r = y.slides.eq(o),
                                        l = y.slidesSizesGrid[o],
                                        d = r[0].swiperSlideOffset,
                                        c = (i - d - l / 2) / l * y.params.coverflow.modifier,
                                        p = y.isHorizontal() ? a * c : 0,
                                        h = y.isHorizontal() ? 0 : a * c,
                                        u = -n * Math.abs(c),
                                        f = y.isHorizontal() ? 0 : y.params.coverflow.stretch * c,
                                        g = y.isHorizontal() ? y.params.coverflow.stretch * c : 0;
                                    Math.abs(g) < .001 && (g = 0), Math.abs(f) < .001 && (f = 0), Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0), Math.abs(h) < .001 && (h = 0);
                                    var m = "translate3d(" + g + "px," + f + "px," + u + "px)  rotateX(" + h + "deg) rotateY(" + p + "deg)";
                                    if (r.transform(m), r[0].style.zIndex = -Math.abs(Math.round(c)) + 1, y.params.coverflow.slideShadows) {
                                        var v = y.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                                            w = y.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                        0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "left" : "top") + '"></div>'), r.append(v)), 0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (y.isHorizontal() ? "right" : "bottom") + '"></div>'), r.append(w)), v.length && (v[0].style.opacity = c > 0 ? c : 0), w.length && (w[0].style.opacity = -c > 0 ? -c : 0) } }
                                if (y.browser.ie) {
                                    var b = y.wrapper[0].style;
                                    b.perspectiveOrigin = i + "px 50%" } }, setTransition: function(t) { y.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t) } } }, y.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function(t, i) {
                            if ("undefined" != typeof t && ("undefined" == typeof i && (i = !0), 0 !== y.slides.length)) {
                                var a = y.slides.eq(t),
                                    n = a.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!a.hasClass("swiper-lazy") || a.hasClass("swiper-lazy-loaded") || a.hasClass("swiper-lazy-loading") || (n = n.add(a[0])), 0 !== n.length && n.each(function() {
                                    var t = e(this);
                                    t.addClass("swiper-lazy-loading");
                                    var n = t.attr("data-background"),
                                        o = t.attr("data-src"),
                                        s = t.attr("data-srcset");
                                    y.loadImage(t[0], o || n, s, !1, function() {
                                        if (n ? (t.css("background-image", 'url("' + n + '")'), t.removeAttr("data-background")) : (s && (t.attr("srcset", s), t.removeAttr("data-srcset")), o && (t.attr("src", o), t.removeAttr("data-src"))), t.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), a.find(".swiper-lazy-preloader, .preloader").remove(), y.params.loop && i) {
                                            var e = a.attr("data-swiper-slide-index");
                                            if (a.hasClass(y.params.slideDuplicateClass)) {
                                                var r = y.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + y.params.slideDuplicateClass + ")");
                                                y.lazy.loadImageInSlide(r.index(), !1) } else {
                                                var l = y.wrapper.children("." + y.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                y.lazy.loadImageInSlide(l.index(), !1) } }
                                        y.emit("onLazyImageReady", y, a[0], t[0]) }), y.emit("onLazyImageLoad", y, a[0], t[0]) }) } },
                        load: function() {
                            var t;
                            if (y.params.watchSlidesVisibility) y.wrapper.children("." + y.params.slideVisibleClass).each(function() { y.lazy.loadImageInSlide(e(this).index()) });
                            else if (y.params.slidesPerView > 1)
                                for (t = y.activeIndex; t < y.activeIndex + y.params.slidesPerView; t++) y.slides[t] && y.lazy.loadImageInSlide(t);
                            else y.lazy.loadImageInSlide(y.activeIndex);
                            if (y.params.lazyLoadingInPrevNext)
                                if (y.params.slidesPerView > 1 || y.params.lazyLoadingInPrevNextAmount && y.params.lazyLoadingInPrevNextAmount > 1) {
                                    var i = y.params.lazyLoadingInPrevNextAmount,
                                        a = y.params.slidesPerView,
                                        n = Math.min(y.activeIndex + a + Math.max(i, a), y.slides.length),
                                        o = Math.max(y.activeIndex - Math.max(a, i), 0);
                                    for (t = y.activeIndex + y.params.slidesPerView; n > t; t++) y.slides[t] && y.lazy.loadImageInSlide(t);
                                    for (t = o; t < y.activeIndex; t++) y.slides[t] && y.lazy.loadImageInSlide(t)
                                } else {
                                    var s = y.wrapper.children("." + y.params.slideNextClass);
                                    s.length > 0 && y.lazy.loadImageInSlide(s.index());
                                    var r = y.wrapper.children("." + y.params.slidePrevClass);
                                    r.length > 0 && y.lazy.loadImageInSlide(r.index()) }
                        },
                        onTransitionStart: function() { y.params.lazyLoading && (y.params.lazyLoadingOnTransitionStart || !y.params.lazyLoadingOnTransitionStart && !y.lazy.initialImageLoaded) && y.lazy.load() },
                        onTransitionEnd: function() { y.params.lazyLoading && !y.params.lazyLoadingOnTransitionStart && y.lazy.load() }
                    }, y.scrollbar = { isTouched: !1, setDragPosition: function(t) {
                            var e = y.scrollbar,
                                i = y.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY,
                                a = i - e.track.offset()[y.isHorizontal() ? "left" : "top"] - e.dragSize / 2,
                                n = -y.minTranslate() * e.moveDivider,
                                o = -y.maxTranslate() * e.moveDivider;
                            n > a ? a = n : a > o && (a = o), a = -a / e.moveDivider, y.updateProgress(a), y.setWrapperTranslate(a, !0) }, dragStart: function(t) {
                            var e = y.scrollbar;
                            e.isTouched = !0, t.preventDefault(), t.stopPropagation(), e.setDragPosition(t), clearTimeout(e.dragTimeout), e.track.transition(0), y.params.scrollbarHide && e.track.css("opacity", 1), y.wrapper.transition(100), e.drag.transition(100), y.emit("onScrollbarDragStart", y) }, dragMove: function(t) {
                            var e = y.scrollbar;
                            e.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.setDragPosition(t), y.wrapper.transition(0), e.track.transition(0), e.drag.transition(0), y.emit("onScrollbarDragMove", y)) }, dragEnd: function(t) {
                            var e = y.scrollbar;
                            e.isTouched && (e.isTouched = !1, y.params.scrollbarHide && (clearTimeout(e.dragTimeout), e.dragTimeout = setTimeout(function() { e.track.css("opacity", 0), e.track.transition(400) }, 1e3)), y.emit("onScrollbarDragEnd", y), y.params.scrollbarSnapOnRelease && y.slideReset()) }, enableDraggable: function() {
                            var t = y.scrollbar,
                                i = y.support.touch ? t.track : document;
                            e(t.track).on(y.touchEvents.start, t.dragStart), e(i).on(y.touchEvents.move, t.dragMove), e(i).on(y.touchEvents.end, t.dragEnd) }, disableDraggable: function() {
                            var t = y.scrollbar,
                                i = y.support.touch ? t.track : document;
                            e(t.track).off(y.touchEvents.start, t.dragStart), e(i).off(y.touchEvents.move, t.dragMove), e(i).off(y.touchEvents.end, t.dragEnd) }, set: function() {
                            if (y.params.scrollbar) {
                                var t = y.scrollbar;
                                t.track = e(y.params.scrollbar), y.params.uniqueNavElements && "string" == typeof y.params.scrollbar && t.track.length > 1 && 1 === y.container.find(y.params.scrollbar).length && (t.track = y.container.find(y.params.scrollbar)), t.drag = t.track.find(".swiper-scrollbar-drag"), 0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'), t.track.append(t.drag)), t.drag[0].style.width = "", t.drag[0].style.height = "", t.trackSize = y.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight, t.divider = y.size / y.virtualSize, t.moveDivider = t.divider * (t.trackSize / y.size), t.dragSize = t.trackSize * t.divider, y.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px", t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "", y.params.scrollbarHide && (t.track[0].style.opacity = 0) } }, setTranslate: function() {
                            if (y.params.scrollbar) {
                                var t, e = y.scrollbar,
                                    i = (y.translate || 0, e.dragSize);
                                t = (e.trackSize - e.dragSize) * y.progress, y.rtl && y.isHorizontal() ? (t = -t, t > 0 ? (i = e.dragSize - t, t = 0) : -t + e.dragSize > e.trackSize && (i = e.trackSize + t)) : 0 > t ? (i = e.dragSize + t, t = 0) : t + e.dragSize > e.trackSize && (i = e.trackSize - t), y.isHorizontal() ? (y.support.transforms3d ? e.drag.transform("translate3d(" + t + "px, 0, 0)") : e.drag.transform("translateX(" + t + "px)"), e.drag[0].style.width = i + "px") : (y.support.transforms3d ? e.drag.transform("translate3d(0px, " + t + "px, 0)") : e.drag.transform("translateY(" + t + "px)"), e.drag[0].style.height = i + "px"), y.params.scrollbarHide && (clearTimeout(e.timeout), e.track[0].style.opacity = 1, e.timeout = setTimeout(function() { e.track[0].style.opacity = 0, e.track.transition(400) }, 1e3)) } }, setTransition: function(t) { y.params.scrollbar && y.scrollbar.drag.transition(t) } }, y.controller = { LinearSpline: function(t, e) { this.x = t, this.y = e, this.lastIndex = t.length - 1;
                            var i, a;
                            this.x.length, this.interpolate = function(t) {
                                return t ? (a = n(this.x, t), i = a - 1, (t - this.x[i]) * (this.y[a] - this.y[i]) / (this.x[a] - this.x[i]) + this.y[i]) : 0 };
                            var n = function() {
                                var t, e, i;
                                return function(a, n) {
                                    for (e = -1, t = a.length; t - e > 1;) a[i = t + e >> 1] <= n ? e = i : t = i;
                                    return t } }() }, getInterpolateFunction: function(t) { y.controller.spline || (y.controller.spline = y.params.loop ? new y.controller.LinearSpline(y.slidesGrid, t.slidesGrid) : new y.controller.LinearSpline(y.snapGrid, t.snapGrid)) }, setTranslate: function(t, e) {
                            function a(e) { t = e.rtl && "horizontal" === e.params.direction ? -y.translate : y.translate, "slide" === y.params.controlBy && (y.controller.getInterpolateFunction(e), o = -y.controller.spline.interpolate(-t)), o && "container" !== y.params.controlBy || (n = (e.maxTranslate() - e.minTranslate()) / (y.maxTranslate() - y.minTranslate()), o = (t - y.minTranslate()) * n + e.minTranslate()), y.params.controlInverse && (o = e.maxTranslate() - o), e.updateProgress(o), e.setWrapperTranslate(o, !1, y), e.updateActiveIndex() }
                            var n, o, s = y.params.control;
                            if (y.isArray(s))
                                for (var r = 0; r < s.length; r++) s[r] !== e && s[r] instanceof i && a(s[r]);
                            else s instanceof i && e !== s && a(s) }, setTransition: function(t, e) {
                            function a(e) { e.setWrapperTransition(t, y), 0 !== t && (e.onTransitionStart(), e.wrapper.transitionEnd(function() { o && (e.params.loop && "slide" === y.params.controlBy && e.fixLoop(), e.onTransitionEnd()) })) }
                            var n, o = y.params.control;
                            if (y.isArray(o))
                                for (n = 0; n < o.length; n++) o[n] !== e && o[n] instanceof i && a(o[n]);
                            else o instanceof i && e !== o && a(o) } }, y.hashnav = { init: function() {
                            if (y.params.hashnav) { y.hashnav.initialized = !0;
                                var t = document.location.hash.replace("#", "");
                                if (t)
                                    for (var e = 0, i = 0, a = y.slides.length; a > i; i++) {
                                        var n = y.slides.eq(i),
                                            o = n.attr("data-hash");
                                        if (o === t && !n.hasClass(y.params.slideDuplicateClass)) {
                                            var s = n.index();
                                            y.slideTo(s, e, y.params.runCallbacksOnInit, !0) } } } }, setHash: function() { y.hashnav.initialized && y.params.hashnav && (document.location.hash = y.slides.eq(y.activeIndex).attr("data-hash") || "") } }, y.disableKeyboardControl = function() { y.params.keyboardControl = !1, e(document).off("keydown", l) }, y.enableKeyboardControl = function() { y.params.keyboardControl = !0, e(document).on("keydown", l) }, y.mousewheel = { event: !1, lastScrollTime: (new window.Date).getTime() }, y.params.mousewheelControl) {
                    try { new window.WheelEvent("wheel"), y.mousewheel.event = "wheel" } catch (R) {
                        (window.WheelEvent || y.container[0] && "wheel" in y.container[0]) && (y.mousewheel.event = "wheel") }!y.mousewheel.event && window.WheelEvent, y.mousewheel.event || void 0 === document.onmousewheel || (y.mousewheel.event = "mousewheel"), y.mousewheel.event || (y.mousewheel.event = "DOMMouseScroll") }
                y.disableMousewheelControl = function() {
                    return y.mousewheel.event ? (y.container.off(y.mousewheel.event, d), !0) : !1 }, y.enableMousewheelControl = function() {
                    return y.mousewheel.event ? (y.container.on(y.mousewheel.event, d), !0) : !1 }, y.parallax = { setTranslate: function() { y.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() { c(this, y.progress) }), y.slides.each(function() {
                            var t = e(this);
                            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                var e = Math.min(Math.max(t[0].progress, -1), 1);
                                c(this, e) }) }) }, setTransition: function(t) { "undefined" == typeof t && (t = y.params.speed), y.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var i = e(this),
                                a = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                            0 === t && (a = 0), i.transition(a) }) } }, y._plugins = [];
                for (var F in y.plugins) {
                    var $ = y.plugins[F](y, y.params[F]);
                    $ && y._plugins.push($) }
                return y.callPlugins = function(t) {
                    for (var e = 0; e < y._plugins.length; e++) t in y._plugins[e] && y._plugins[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) }, y.emitterEventListeners = {}, y.emit = function(t) { y.params[t] && y.params[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    var e;
                    if (y.emitterEventListeners[t])
                        for (e = 0; e < y.emitterEventListeners[t].length; e++) y.emitterEventListeners[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                    y.callPlugins && y.callPlugins(t, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) }, y.on = function(t, e) {
                    return t = p(t), y.emitterEventListeners[t] || (y.emitterEventListeners[t] = []), y.emitterEventListeners[t].push(e), y }, y.off = function(t, e) {
                    var i;
                    if (t = p(t), "undefined" == typeof e) return y.emitterEventListeners[t] = [], y;
                    if (y.emitterEventListeners[t] && 0 !== y.emitterEventListeners[t].length) {
                        for (i = 0; i < y.emitterEventListeners[t].length; i++) y.emitterEventListeners[t][i] === e && y.emitterEventListeners[t].splice(i, 1);
                        return y } }, y.once = function(t, e) { t = p(t);
                    var i = function() { e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), y.off(t, i) };
                    return y.on(t, i), y }, y.a11y = { makeFocusable: function(t) {
                        return t.attr("tabIndex", "0"), t }, addRole: function(t, e) {
                        return t.attr("role", e), t }, addLabel: function(t, e) {
                        return t.attr("aria-label", e), t }, disable: function(t) {
                        return t.attr("aria-disabled", !0), t }, enable: function(t) {
                        return t.attr("aria-disabled", !1), t }, onEnterKey: function(t) { 13 === t.keyCode && (e(t.target).is(y.params.nextButton) ? (y.onClickNext(t), y.isEnd ? y.a11y.notify(y.params.lastSlideMessage) : y.a11y.notify(y.params.nextSlideMessage)) : e(t.target).is(y.params.prevButton) && (y.onClickPrev(t), y.isBeginning ? y.a11y.notify(y.params.firstSlideMessage) : y.a11y.notify(y.params.prevSlideMessage)), e(t.target).is("." + y.params.bulletClass) && e(t.target)[0].click()) }, liveRegion: e('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'), notify: function(t) {
                        var e = y.a11y.liveRegion;
                        0 !== e.length && (e.html(""), e.html(t)) }, init: function() { y.params.nextButton && y.nextButton && y.nextButton.length > 0 && (y.a11y.makeFocusable(y.nextButton), y.a11y.addRole(y.nextButton, "button"), y.a11y.addLabel(y.nextButton, y.params.nextSlideMessage)), y.params.prevButton && y.prevButton && y.prevButton.length > 0 && (y.a11y.makeFocusable(y.prevButton), y.a11y.addRole(y.prevButton, "button"), y.a11y.addLabel(y.prevButton, y.params.prevSlideMessage)), e(y.container).append(y.a11y.liveRegion) }, initPagination: function() { y.params.pagination && y.params.paginationClickable && y.bullets && y.bullets.length && y.bullets.each(function() {
                            var t = e(this);
                            y.a11y.makeFocusable(t), y.a11y.addRole(t, "button"), y.a11y.addLabel(t, y.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1)) }) }, destroy: function() { y.a11y.liveRegion && y.a11y.liveRegion.length > 0 && y.a11y.liveRegion.remove() } }, y.init = function() { y.params.loop && y.createLoop(), y.updateContainerSize(), y.updateSlidesSize(), y.updatePagination(), y.params.scrollbar && y.scrollbar && (y.scrollbar.set(), y.params.scrollbarDraggable && y.scrollbar.enableDraggable()), "slide" !== y.params.effect && y.effects[y.params.effect] && (y.params.loop || y.updateProgress(), y.effects[y.params.effect].setTranslate()), y.params.loop ? y.slideTo(y.params.initialSlide + y.loopedSlides, 0, y.params.runCallbacksOnInit) : (y.slideTo(y.params.initialSlide, 0, y.params.runCallbacksOnInit), 0 === y.params.initialSlide && (y.parallax && y.params.parallax && y.parallax.setTranslate(), y.lazy && y.params.lazyLoading && (y.lazy.load(), y.lazy.initialImageLoaded = !0))), y.attachEvents(), y.params.observer && y.support.observer && y.initObservers(), y.params.preloadImages && !y.params.lazyLoading && y.preloadImages(), y.params.autoplay && y.startAutoplay(), y.params.keyboardControl && y.enableKeyboardControl && y.enableKeyboardControl(), y.params.mousewheelControl && y.enableMousewheelControl && y.enableMousewheelControl(), y.params.hashnav && y.hashnav && y.hashnav.init(), y.params.a11y && y.a11y && y.a11y.init(), y.emit("onInit", y) }, y.cleanupStyles = function() { y.container.removeClass(y.classNames.join(" ")).removeAttr("style"), y.wrapper.removeAttr("style"), y.slides && y.slides.length && y.slides.removeClass([y.params.slideVisibleClass, y.params.slideActiveClass, y.params.slideNextClass, y.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), y.paginationContainer && y.paginationContainer.length && y.paginationContainer.removeClass(y.params.paginationHiddenClass), y.bullets && y.bullets.length && y.bullets.removeClass(y.params.bulletActiveClass), y.params.prevButton && e(y.params.prevButton).removeClass(y.params.buttonDisabledClass), y.params.nextButton && e(y.params.nextButton).removeClass(y.params.buttonDisabledClass), y.params.scrollbar && y.scrollbar && (y.scrollbar.track && y.scrollbar.track.length && y.scrollbar.track.removeAttr("style"), y.scrollbar.drag && y.scrollbar.drag.length && y.scrollbar.drag.removeAttr("style")) }, y.destroy = function(t, e) { y.detachEvents(), y.stopAutoplay(), y.params.scrollbar && y.scrollbar && y.params.scrollbarDraggable && y.scrollbar.disableDraggable(), y.params.loop && y.destroyLoop(), e && y.cleanupStyles(), y.disconnectObservers(), y.params.keyboardControl && y.disableKeyboardControl && y.disableKeyboardControl(), y.params.mousewheelControl && y.disableMousewheelControl && y.disableMousewheelControl(), y.params.a11y && y.a11y && y.a11y.destroy(), y.emit("onDestroy"), t !== !1 && (y = null) }, y.init(), y
            }
        };
        i.prototype = { isSafari: function() {
                var t = navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0 }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent), isArray: function(t) {
                return "[object Array]" === Object.prototype.toString.apply(t) }, browser: { ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled, ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1 }, device: function() {
                var t = navigator.userAgent,
                    e = t.match(/(Android);?[\s\/]+([\d.]+)?/),
                    i = t.match(/(iPad).*OS\s([\d_]+)/),
                    a = t.match(/(iPod)(.*OS\s([\d_]+))?/),
                    n = !i && t.match(/(iPhone\sOS)\s([\d_]+)/);
                return { ios: i || n || a, android: e } }(), support: { touch: window.Modernizr && Modernizr.touch === !0 || function() {
                    return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch) }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                    var t = document.createElement("div").style;
                    return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t }(), flexbox: function() {
                    for (var t = document.createElement("div").style, e = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < e.length; i++)
                        if (e[i] in t) return !0 }(), observer: function() {
                    return "MutationObserver" in window || "WebkitMutationObserver" in window }() }, plugins: {} };
        for (var a = ["jQuery", "Zepto", "Dom7"], n = 0; n < a.length; n++) window[a[n]] && t(window[a[n]]);
        var o;
        o = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, o && ("transitionEnd" in o.fn || (o.fn.transitionEnd = function(t) {
            function e(o) {
                if (o.target === this)
                    for (t.call(this, o), i = 0; i < a.length; i++) n.off(a[i], e) }
            var i, a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                n = this;
            if (t)
                for (i = 0; i < a.length; i++) n.on(a[i], e);
            return this }), "transform" in o.fn || (o.fn.transform = function(t) {
            for (var e = 0; e < this.length; e++) {
                var i = this[e].style;
                i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t }
            return this }), "transition" in o.fn || (o.fn.transition = function(t) { "string" != typeof t && (t += "ms");
            for (var e = 0; e < this.length; e++) {
                var i = this[e].style;
                i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = t }
            return this })), window.Swiper = i
    }(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() { "use strict";
        return window.Swiper }), ! function(t) { "use strict";

        function e(e, i) { this.element = t(e), this.settings = t.extend({}, a, i), this._defaults = a, this._init() }
        var i = "Morphext",
            a = { animation: "bounceIn", separator: ",", speed: 2e3, complete: t.noop };
        e.prototype = { _init: function() {
                var e = this;
                this.phrases = [], this.element.addClass("morphext"), t.each(this.element.text().split(this.settings.separator), function(i, a) { e.phrases.push(t.trim(a)) }), this.index = -1, this.animate(), this.start() }, animate: function() { this.index = ++this.index % this.phrases.length, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", t.isFunction(this.settings.complete) && this.settings.complete.call(this) }, start: function() {
                var t = this;
                this._interval = setInterval(function() { t.animate() }, this.settings.speed) }, stop: function() { this._interval = clearInterval(this._interval) } }, t.fn[i] = function(a) {
            return this.each(function() { t.data(this, "plugin_" + i) || t.data(this, "plugin_" + i, new e(this, a)) }) } }(jQuery), ! function(t) { "use strict";
        var e = function(e, i) { this.el = t(e), this.options = t.extend({}, t.fn.typed.defaults, i), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build() };
        e.prototype = { constructor: e, init: function() {
                var t = this;
                t.timeout = setTimeout(function() {
                    for (var e = 0; e < t.strings.length; ++e) t.sequence[e] = e;
                    t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos) }, t.startDelay) }, build: function() { this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.init() }, typewrite: function(t, e) {
                if (this.stop !== !0) {
                    var i = Math.round(70 * Math.random()) + this.typeSpeed,
                        a = this;
                    a.timeout = setTimeout(function() {
                        var i = 0,
                            n = t.substr(e);
                        if ("^" === n.charAt(0)) {
                            var o = 1; /^\^\d+/.test(n) && (n = /\d+/.exec(n)[0], o += n.length, i = parseInt(n)), t = t.substring(0, e) + t.substring(e + o) }
                        if ("html" === a.contentType) {
                            var s = t.substr(e).charAt(0);
                            if ("<" === s || "&" === s) {
                                var r = "",
                                    l = "";
                                for (l = "<" === s ? ">" : ";"; t.substr(e).charAt(0) !== l;) r += t.substr(e).charAt(0), e++;
                                e++, r += l } }
                        a.timeout = setTimeout(function() {
                            if (e === t.length) {
                                if (a.options.onStringTyped(a.arrayPos), a.arrayPos === a.strings.length - 1 && (a.options.callback(), a.curLoop++, a.loop === !1 || a.curLoop === a.loopCount)) return;
                                a.timeout = setTimeout(function() { a.backspace(t, e) }, a.backDelay) } else { 0 === e && a.options.preStringTyped(a.arrayPos);
                                var i = t.substr(0, e + 1);
                                a.attr ? a.el.attr(a.attr, i) : a.isInput ? a.el.val(i) : "html" === a.contentType ? a.el.html(i) : a.el.text(i), e++, a.typewrite(t, e) } }, i) }, i) } }, backspace: function(t, e) {
                if (this.stop !== !0) {
                    var i = Math.round(70 * Math.random()) + this.backSpeed,
                        a = this;
                    a.timeout = setTimeout(function() {
                        if ("html" === a.contentType && ">" === t.substr(e).charAt(0)) {
                            for (var i = "";
                                "<" !== t.substr(e).charAt(0);) i -= t.substr(e).charAt(0), e--;
                            e--, i += "<" }
                        var n = t.substr(0, e);
                        a.attr ? a.el.attr(a.attr, n) : a.isInput ? a.el.val(n) : "html" === a.contentType ? a.el.html(n) : a.el.text(n), e > a.stopNum ? (e--, a.backspace(t, e)) : e <= a.stopNum && (a.arrayPos++, a.arrayPos === a.strings.length ? (a.arrayPos = 0, a.shuffle && (a.sequence = a.shuffleArray(a.sequence)), a.init()) : a.typewrite(a.strings[a.sequence[a.arrayPos]], e)) }, i) } }, shuffleArray: function(t) {
                var e, i, a = t.length;
                if (a)
                    for (; --a;) i = Math.floor(Math.random() * (a + 1)), e = t[i], t[i] = t[a], t[a] = e;
                return t }, reset: function() {
                var t = this;
                clearInterval(t.timeout);
                var e = this.el.attr("id");
                this.el.after('<span id="' + e + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), t.options.resetCallback() } }, t.fn.typed = function(i) {
            return this.each(function() {
                var a = t(this),
                    n = a.data("typed"),
                    o = "object" == typeof i && i;
                n || a.data("typed", n = new e(this, o)), "string" == typeof i && n[i]() }) }, t.fn.typed.defaults = { strings: ["Heyyyyyyyyyyyyyyyyyyyy", "this is a test"], typeSpeed: 0, startDelay: 0, backSpeed: 0, shuffle: !1, backDelay: 500, loop: !1, loopCount: !1, showCursor: !0, cursorChar: "|", attr: null, contentType: "html", callback: function() {}, preStringTyped: function() {}, onStringTyped: function() {}, resetCallback: function() {} } }(window.jQuery), function(t) { "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery) }(function(t) {
        function e(e) {
            return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = c), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipetp.defaults, e), this.each(function() {
                var a = t(this),
                    n = a.data(I);
                n || (n = new i(this, e), a.data(I, n)) }) }

        function i(e, i) {
            function a(e) {
                if (!(dt() || t(e.target).closest(i.excludedElements, Qt).length > 0)) {
                    var a, n = e.originalEvent ? e.originalEvent : e,
                        o = n.touches,
                        s = o ? o[0] : n;
                    return Vt = x, o ? Xt = o.length : e.preventDefault(), Dt = 0, jt = null, Ht = null, Rt = 0, Ft = 0, $t = 0, Wt = 1, Bt = 0, Yt = ft(), Nt = vt(), rt(), !o || Xt === i.fingers || i.fingers === y || N() ? (pt(0, s), qt = kt(), 2 == Xt && (pt(1, o[1]), Ft = $t = bt(Yt[0].start, Yt[1].start)), (i.swipeStatus || i.pinchStatus) && (a = D(n, Vt))) : a = !1, a === !1 ? (Vt = C, D(n, Vt), a) : (i.hold && (te = setTimeout(t.proxy(function() { Qt.trigger("hold", [n.target]), i.hold && (a = i.hold.call(Qt, n, n.target)) }, this), i.longTapThreshold)), ct(!0), null) } }

            function A(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                if (Vt !== T && Vt !== C && !lt()) {
                    var a, n = e.touches,
                        o = n ? n[0] : e,
                        s = ht(o);
                    if (Gt = kt(), n && (Xt = n.length), i.hold && clearTimeout(te), Vt = _, 2 == Xt && (0 == Ft ? (pt(1, n[1]), Ft = $t = bt(Yt[0].start, Yt[1].start)) : (ht(n[1]), $t = bt(Yt[0].end, Yt[1].end), Ht = _t(Yt[0].end, Yt[1].end)), Wt = xt(Ft, $t), Bt = Math.abs(Ft - $t)), Xt === i.fingers || i.fingers === y || !n || N()) {
                        if (jt = St(s.start, s.end), B(t, jt), Dt = Tt(s.start, s.end), Rt = yt(), gt(jt, Dt), (i.swipeStatus || i.pinchStatus) && (a = D(e, Vt)), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
                            var r = !0;
                            if (i.triggerOnTouchLeave) {
                                var l = Pt(this);
                                r = It(s.end, l) }!i.triggerOnTouchEnd && r ? Vt = E(_) : i.triggerOnTouchLeave && !r && (Vt = E(T)), Vt != C && Vt != T || D(e, Vt) } } else Vt = C, D(e, Vt);
                    a === !1 && (Vt = C, D(e, Vt)) } }

            function L(t) {
                var e = t.originalEvent ? t.originalEvent : t,
                    a = e.touches;
                return a && a.length ? (st(), !0) : (lt() && (Xt = Zt), Gt = kt(), Rt = yt(), F() || !R() ? (Vt = C, D(e, Vt)) : i.triggerOnTouchEnd || 0 == i.triggerOnTouchEnd && Vt === _ ? (t.preventDefault(), Vt = T, D(e, Vt)) : !i.triggerOnTouchEnd && U() ? (Vt = T, j(e, Vt, f)) : Vt === _ && (Vt = C, D(e, Vt)), ct(!1), null) }

            function O() { Xt = 0, Gt = 0, qt = 0, Ft = 0, $t = 0, Wt = 1, rt(), ct(!1) }

            function M(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                i.triggerOnTouchLeave && (Vt = E(T), D(e, Vt)) }

            function z() { Qt.unbind(Lt, a), Qt.unbind(Et, O), Qt.unbind(Ot, A), Qt.unbind(Mt, L), zt && Qt.unbind(zt, M), ct(!1) }

            function E(t) {
                var e = t,
                    a = W(),
                    n = R(),
                    o = F();
                return !a || o ? e = C : !n || t != _ || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !n && t == T && i.triggerOnTouchLeave && (e = C) : e = T, e }

            function D(t, e) {
                var i, a = t.touches;
                return Y() || X() || Q() || N() ? ((Y() || X()) && (i = j(t, e, h)), (Q() || N()) && i !== !1 && (i = j(t, e, u))) : nt() && i !== !1 ? i = j(t, e, g) : ot() && i !== !1 ? i = j(t, e, m) : at() && i !== !1 && (i = j(t, e, f)), e === C && O(t), e === T && (a ? a.length || O(t) : O(t)), i }

            function j(e, a, c) {
                var p;
                if (c == h) {
                    if (Qt.trigger("swipeStatus", [a, jt || null, Dt || 0, Rt || 0, Xt, Yt]), i.swipeStatus && (p = i.swipeStatus.call(Qt, e, a, jt || null, Dt || 0, Rt || 0, Xt, Yt), p === !1)) return !1;
                    if (a == T && V()) {
                        if (Qt.trigger("swipe", [jt, Dt, Rt, Xt, Yt]), i.swipe && (p = i.swipe.call(Qt, e, jt, Dt, Rt, Xt, Yt), p === !1)) return !1;
                        switch (jt) {
                            case n:
                                Qt.trigger("swipeLeft", [jt, Dt, Rt, Xt, Yt]), i.swipeLeft && (p = i.swipeLeft.call(Qt, e, jt, Dt, Rt, Xt, Yt));
                                break;
                            case o:
                                Qt.trigger("swipeRight", [jt, Dt, Rt, Xt, Yt]), i.swipeRight && (p = i.swipeRight.call(Qt, e, jt, Dt, Rt, Xt, Yt));
                                break;
                            case s:
                                Qt.trigger("swipeUp", [jt, Dt, Rt, Xt, Yt]), i.swipeUp && (p = i.swipeUp.call(Qt, e, jt, Dt, Rt, Xt, Yt));
                                break;
                            case r:
                                Qt.trigger("swipeDown", [jt, Dt, Rt, Xt, Yt]), i.swipeDown && (p = i.swipeDown.call(Qt, e, jt, Dt, Rt, Xt, Yt)) } } }
                if (c == u) {
                    if (Qt.trigger("pinchStatus", [a, Ht || null, Bt || 0, Rt || 0, Xt, Wt, Yt]), i.pinchStatus && (p = i.pinchStatus.call(Qt, e, a, Ht || null, Bt || 0, Rt || 0, Xt, Wt, Yt), p === !1)) return !1;
                    if (a == T && H()) switch (Ht) {
                        case l:
                            Qt.trigger("pinchIn", [Ht || null, Bt || 0, Rt || 0, Xt, Wt, Yt]), i.pinchIn && (p = i.pinchIn.call(Qt, e, Ht || null, Bt || 0, Rt || 0, Xt, Wt, Yt));
                            break;
                        case d:
                            Qt.trigger("pinchOut", [Ht || null, Bt || 0, Rt || 0, Xt, Wt, Yt]), i.pinchOut && (p = i.pinchOut.call(Qt, e, Ht || null, Bt || 0, Rt || 0, Xt, Wt, Yt)) } }
                return c == f ? a !== C && a !== T || (clearTimeout(Jt), clearTimeout(te), Z() && !tt() ? (Kt = kt(), Jt = setTimeout(t.proxy(function() { Kt = null, Qt.trigger("tap", [e.target]), i.tap && (p = i.tap.call(Qt, e, e.target)) }, this), i.doubleTapThreshold)) : (Kt = null, Qt.trigger("tap", [e.target]), i.tap && (p = i.tap.call(Qt, e, e.target)))) : c == g ? a !== C && a !== T || (clearTimeout(Jt), Kt = null, Qt.trigger("doubletap", [e.target]), i.doubleTap && (p = i.doubleTap.call(Qt, e, e.target))) : c == m && (a !== C && a !== T || (clearTimeout(Jt), Kt = null, Qt.trigger("longtap", [e.target]), i.longTap && (p = i.longTap.call(Qt, e, e.target)))), p }

            function R() {
                var t = !0;
                return null !== i.threshold && (t = Dt >= i.threshold), t }

            function F() {
                var t = !1;
                return null !== i.cancelThreshold && null !== jt && (t = mt(jt) - Dt >= i.cancelThreshold), t }

            function $() {
                return null !== i.pinchThreshold ? Bt >= i.pinchThreshold : !0 }

            function W() {
                var t;
                return t = i.maxTimeThreshold ? !(Rt >= i.maxTimeThreshold) : !0 }

            function B(t, e) {
                if (i.preventDefaultEvents !== !1)
                    if (i.allowPageScroll === c) t.preventDefault();
                    else {
                        var a = i.allowPageScroll === p;
                        switch (e) {
                            case n:
                                (i.swipeLeft && a || !a && i.allowPageScroll != v) && t.preventDefault();
                                break;
                            case o:
                                (i.swipeRight && a || !a && i.allowPageScroll != v) && t.preventDefault();
                                break;
                            case s:
                                (i.swipeUp && a || !a && i.allowPageScroll != w) && t.preventDefault();
                                break;
                            case r:
                                (i.swipeDown && a || !a && i.allowPageScroll != w) && t.preventDefault() } } }

            function H() {
                var t = q(),
                    e = G(),
                    i = $();
                return t && e && i }

            function N() {
                return !!(i.pinchStatus || i.pinchIn || i.pinchOut) }

            function Q() {
                return !(!H() || !N()) }

            function V() {
                var t = W(),
                    e = R(),
                    i = q(),
                    a = G(),
                    n = F(),
                    o = !n && a && i && e && t;
                return o }

            function X() {
                return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown) }

            function Y() {
                return !(!V() || !X()) }

            function q() {
                return Xt === i.fingers || i.fingers === y || !S }

            function G() {
                return 0 !== Yt[0].end.x }

            function U() {
                return !!i.tap }

            function Z() {
                return !!i.doubleTap }

            function K() {
                return !!i.longTap }

            function J() {
                if (null == Kt) return !1;
                var t = kt();
                return Z() && t - Kt <= i.doubleTapThreshold }

            function tt() {
                return J() }

            function et() {
                return (1 === Xt || !S) && (isNaN(Dt) || Dt < i.threshold) }

            function it() {
                return Rt > i.longTapThreshold && b > Dt }

            function at() {
                return !(!et() || !U()) }

            function nt() {
                return !(!J() || !Z()) }

            function ot() {
                return !(!it() || !K()) }

            function st() { Ut = kt(), Zt = event.touches.length + 1 }

            function rt() { Ut = 0, Zt = 0 }

            function lt() {
                var t = !1;
                if (Ut) {
                    var e = kt() - Ut;
                    e <= i.fingerReleaseThreshold && (t = !0) }
                return t }

            function dt() {
                return !(Qt.data(I + "_intouch") !== !0) }

            function ct(t) { t === !0 ? (Qt.bind(Ot, A), Qt.bind(Mt, L), zt && Qt.bind(zt, M)) : (Qt.unbind(Ot, A, !1), Qt.unbind(Mt, L, !1), zt && Qt.unbind(zt, M, !1)), Qt.data(I + "_intouch", t === !0) }

            function pt(t, e) {
                var i = void 0 !== e.identifier ? e.identifier : 0;
                return Yt[t].identifier = i, Yt[t].start.x = Yt[t].end.x = e.pageX || e.clientX, Yt[t].start.y = Yt[t].end.y = e.pageY || e.clientY, Yt[t] }

            function ht(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0,
                    i = ut(e);
                return i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i }

            function ut(t) {
                for (var e = 0; e < Yt.length; e++)
                    if (Yt[e].identifier == t) return Yt[e] }

            function ft() {
                for (var t = [], e = 0; 5 >= e; e++) t.push({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, identifier: 0 });
                return t }

            function gt(t, e) { e = Math.max(e, mt(t)), Nt[t].distance = e }

            function mt(t) {
                return Nt[t] ? Nt[t].distance : void 0 }

            function vt() {
                var t = {};
                return t[n] = wt(n), t[o] = wt(o), t[s] = wt(s), t[r] = wt(r), t }

            function wt(t) {
                return { direction: t, distance: 0 } }

            function yt() {
                return Gt - qt }

            function bt(t, e) {
                var i = Math.abs(t.x - e.x),
                    a = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(i * i + a * a)) }

            function xt(t, e) {
                var i = e / t * 1;
                return i.toFixed(2) }

            function _t() {
                return 1 > Wt ? d : l }

            function Tt(t, e) {
                return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))) }

            function Ct(t, e) {
                var i = t.x - e.x,
                    a = e.y - t.y,
                    n = Math.atan2(a, i),
                    o = Math.round(180 * n / Math.PI);
                return 0 > o && (o = 360 - Math.abs(o)), o }

            function St(t, e) {
                var i = Ct(t, e);
                return 45 >= i && i >= 0 ? n : 360 >= i && i >= 315 ? n : i >= 135 && 225 >= i ? o : i > 45 && 135 > i ? r : s }

            function kt() {
                var t = new Date;
                return t.getTime() }

            function Pt(e) { e = t(e);
                var i = e.offset(),
                    a = { left: i.left, right: i.left + e.outerWidth(), top: i.top, bottom: i.top + e.outerHeight() };
                return a }

            function It(t, e) {
                return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom }
            var At = S || P || !i.fallbackToMouseEvents,
                Lt = At ? P ? k ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                Ot = At ? P ? k ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                Mt = At ? P ? k ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                zt = At ? null : "mouseleave",
                Et = P ? k ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                Dt = 0,
                jt = null,
                Rt = 0,
                Ft = 0,
                $t = 0,
                Wt = 1,
                Bt = 0,
                Ht = 0,
                Nt = null,
                Qt = t(e),
                Vt = "start",
                Xt = 0,
                Yt = null,
                qt = 0,
                Gt = 0,
                Ut = 0,
                Zt = 0,
                Kt = 0,
                Jt = null,
                te = null;
            try { Qt.bind(Lt, a), Qt.bind(Et, O) } catch (ee) { t.error("events not supported " + Lt + "," + Et + " on jQuery.swipetp") }
            this.enable = function() {
                return Qt.bind(Lt, a), Qt.bind(Et, O), Qt }, this.disable = function() {
                return z(), Qt }, this.destroy = function() { z(), Qt.data(I, null), Qt = null }, this.option = function(e, a) {
                if (void 0 !== i[e]) {
                    if (void 0 === a) return i[e];
                    i[e] = a } else t.error("Option " + e + " does not exist on jQuery.swipetp.options");
                return null } }
        var a = "1.6.9",
            n = "left",
            o = "right",
            s = "up",
            r = "down",
            l = "in",
            d = "out",
            c = "none",
            p = "auto",
            h = "swipe",
            u = "pinch",
            f = "tap",
            g = "doubletap",
            m = "longtap",
            v = "horizontal",
            w = "vertical",
            y = "all",
            b = 10,
            x = "start",
            _ = "move",
            T = "end",
            C = "cancel",
            S = "ontouchstart" in window,
            k = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
            P = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            I = "TouchSwipe",
            A = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: !0, triggerOnTouchLeave: !1, allowPageScroll: "auto", fallbackToMouseEvents: !0, excludedElements: "label, button, input, select, textarea, a, .noSwipe", preventDefaultEvents: !0 };
        t.fn.swipetp = function(i) {
            var a = t(this),
                n = a.data(I);
            if (n && "string" == typeof i) {
                if (n[i]) return n[i].apply(this, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + i + " does not exist on jQuery.swipetp") } else if (!(n || "object" != typeof i && i)) return e.apply(this, arguments);
            return a }, t.fn.swipetp.version = a, t.fn.swipetp.defaults = A, t.fn.swipetp.phases = { PHASE_START: x, PHASE_MOVE: _, PHASE_END: T, PHASE_CANCEL: C }, t.fn.swipetp.directions = { LEFT: n, RIGHT: o, UP: s, DOWN: r, IN: l, OUT: d }, t.fn.swipetp.pageScroll = { NONE: c, HORIZONTAL: v, VERTICAL: w, AUTO: p }, t.fn.swipetp.fingers = { ONE: 1, TWO: 2, THREE: 3, ALL: y } }), "undefined" == typeof console) {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {} }
if (1 == window.tplogs) try { console.groupCollapsed("ThemePunch GreenSocks Logs") } catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (1 == window.tplogs) try { console.info("Build GreenSock SandBox for ThemePunch Plugins"), console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin") } catch (e) {}! function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var a, n, o, s, r, l = function(t) {
                var e, a = t.split("."),
                    n = i;
                for (e = 0; a.length > e; e++) n[a[e]] = n = n[a[e]] || {};
                return n },
            d = l("com.greensock"),
            c = 1e-10,
            p = function(t) {
                var e, i = [],
                    a = t.length;
                for (e = 0; e !== a; i.push(t[e++]));
                return i },
            h = function() {},
            u = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e) } }(),
            f = {},
            g = function(a, n, o, s) {
                this.sc = f[a] ? f[a].sc : [], f[a] = this, this.gsClass = null,
                    this.func = o;
                var r = [];
                this.check = function(d) {
                    for (var c, p, h, u, m, v = n.length, w = v; --v > -1;)(c = f[n[v]] || new g(n[v], [])).gsClass ? (r[v] = c.gsClass, w--) : d && c.sc.push(this);
                    if (0 === w && o)
                        for (p = ("com.greensock." + a).split("."), h = p.pop(), u = l(p.join("."))[h] = this.gsClass = o.apply(o, r), s && (i[h] = u, m = "undefined" != typeof module && module.exports, !m && "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function() {
                                return u }) : a === e && m && (module.exports = u)), v = 0; this.sc.length > v; v++) this.sc[v].check() }, this.check(!0)
            },
            m = t._gsDefine = function(t, e, i, a) {
                return new g(t, e, i, a) },
            v = d._class = function(t, e, i) {
                return e = e || function() {}, m(t, [], function() {
                    return e }, i), e };
        m.globals = i;
        var w = [0, 0, 1, 1],
            y = [],
            b = v("easing.Ease", function(t, e, i, a) { this._func = t, this._type = i || 0, this._power = a || 0, this._params = e ? w.concat(e) : w }, !0),
            x = b.map = {},
            _ = b.register = function(t, e, i, a) {
                for (var n, o, s, r, l = e.split(","), c = l.length, p = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                    for (o = l[c], n = a ? v("easing." + o, null, !0) : d.easing[o] || {}, s = p.length; --s > -1;) r = p[s], x[o + "." + r] = x[r + o] = n[r] = t.getRatio ? t : t[r] || new t };
        for (o = b.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    a = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? a *= a : 2 === i ? a *= a * a : 3 === i ? a *= a * a * a : 4 === i && (a *= a * a * a * a), 1 === e ? 1 - a : 2 === e ? a : .5 > t ? a / 2 : 1 - a / 2 }, a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = a.length; --n > -1;) o = a[n] + ",Power" + n, _(new b(null, null, 1, n), o, "easeOut", !0), _(new b(null, null, 2, n), o, "easeIn" + (0 === n ? ",easeNone" : "")), _(new b(null, null, 3, n), o, "easeInOut");
        x.linear = d.easing.Linear.easeIn, x.swing = d.easing.Quad.easeInOut;
        var T = v("events.EventDispatcher", function(t) { this._listeners = {}, this._eventTarget = t || this });
        o = T.prototype, o.addEventListener = function(t, e, i, a, n) { n = n || 0;
            var o, l, d = this._listeners[t],
                c = 0;
            for (null == d && (this._listeners[t] = d = []), l = d.length; --l > -1;) o = d[l], o.c === e && o.s === i ? d.splice(l, 1) : 0 === c && n > o.pr && (c = l + 1);
            d.splice(c, 0, { c: e, s: i, up: a, pr: n }), this !== s || r || s.wake() }, o.removeEventListener = function(t, e) {
            var i, a = this._listeners[t];
            if (a)
                for (i = a.length; --i > -1;)
                    if (a[i].c === e) return void a.splice(i, 1) }, o.dispatchEvent = function(t) {
            var e, i, a, n = this._listeners[t];
            if (n)
                for (e = n.length, i = this._eventTarget; --e > -1;) a = n[e], a && (a.up ? a.c.call(a.s || i, { type: t, target: i }) : a.c.call(a.s || i)) };
        var C = t.requestAnimationFrame,
            S = t.cancelAnimationFrame,
            k = Date.now || function() {
                return (new Date).getTime() },
            P = k();
        for (a = ["ms", "moz", "webkit", "o"], n = a.length; --n > -1 && !C;) C = t[a[n] + "RequestAnimationFrame"], S = t[a[n] + "CancelAnimationFrame"] || t[a[n] + "CancelRequestAnimationFrame"];
        v("Ticker", function(t, e) {
            var i, a, n, o, l, d = this,
                p = k(),
                u = e !== !1 && C,
                f = 500,
                g = 33,
                m = "tick",
                v = function(t) {
                    var e, s, r = k() - P;
                    r > f && (p += r - g), P += r, d.time = (P - p) / 1e3, e = d.time - l, (!i || e > 0 || t === !0) && (d.frame++, l += e + (e >= o ? .004 : o - e), s = !0), t !== !0 && (n = a(v)), s && d.dispatchEvent(m) };
            T.call(d), d.time = d.frame = 0, d.tick = function() { v(!0) }, d.lagSmoothing = function(t, e) { f = t || 1 / c, g = Math.min(e, f, 0) }, d.sleep = function() { null != n && (u && S ? S(n) : clearTimeout(n), a = h, n = null, d === s && (r = !1)) }, d.wake = function() { null !== n ? d.sleep() : d.frame > 10 && (P = k() - f + 5), a = 0 === i ? h : u && C ? C : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - d.time) + 1) }, d === s && (r = !0), v(2) }, d.fps = function(t) {
                return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, void d.wake()) : i }, d.useRAF = function(t) {
                return arguments.length ? (d.sleep(), u = t, void d.fps(i)) : u }, d.fps(t), setTimeout(function() { u && 5 > d.frame && d.useRAF(!1) }, 1500) }), o = d.Ticker.prototype = new d.events.EventDispatcher, o.constructor = d.Ticker;
        var I = v("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Y) { r || s.wake();
                var i = this.vars.useFrames ? X : Y;
                i.add(this, i._time), this.vars.paused && this.paused(!0) } });
        s = I.ticker = new d.Ticker, o = I.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
        var A = function() { r && k() - P > 2e3 && s.wake(), setTimeout(A, 2e3) };
        A(), o.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, o.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0) }, o.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1) }, o.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1) }, o.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0) }, o.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, o.render = function() {}, o.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this }, o.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t }, o._enabled = function(t, e) {
            return r || s.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, o._kill = function() {
            return this._enabled(!1, !1) }, o.kill = function(t, e) {
            return this._kill(t, e), this }, o._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this }, o._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i }, o._callback = function(t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || y) }, o.eventCallback = function(t, e, i, a) {
            if ("on" === (t || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[t];
                null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = u(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = a), "onUpdate" === t && (this._onUpdate = e) }
            return this }, o.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, o.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, o.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, o.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, o.totalTime = function(t, e, i) {
            if (r || s.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) { this._dirty && this.totalDuration();
                    var a = this._totalDuration,
                        n = this._timeline;
                    if (t > a && !i && (t = a), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? a - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                        for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (E.length && G(), this.render(t, e, !1), E.length && G()) }
            return this }, o.progress = o.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio }, o.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, o.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, o.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t }
            return this._timeScale = t, this._uncache(!1) }, o.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, o.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, a = this._timeline;
            return t != this._paused && a && (r || t || s.wake(), e = a.rawTime(), i = e - this._pauseTime, !t && a.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = a.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this };
        var L = v("core.SimpleTimeline", function(t) { I.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 });
        o = L.prototype = new I, o.constructor = L, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e) {
            var i, a;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (a = t._startTime; i && i._startTime > a;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this }, o._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, o.render = function(t, e, i) {
            var a, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; n;) a = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a }, o.rawTime = function() {
            return r || s.wake(), this._totalTime };
        var O = v("TweenLite", function(e, i, a) {
                if (I.call(this, i, a), this.render = O.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : O.selector(e) || e;
                var n, o, s, r = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? V[O.defaultOverwrite] : "number" == typeof l ? l >> 0 : V[l], (r || e instanceof Array || e.push && u(e)) && "number" != typeof e[0])
                    for (this._targets = s = p(e), this._propLookup = [], this._siblings = [], n = 0; s.length > n; n++) o = s[n], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(n--, 1), this._targets = s = s.concat(p(o))) : (this._siblings[n] = U(o, this, !1), 1 === l && this._siblings[n].length > 1 && K(o, this, null, 1, this._siblings[n])) : (o = s[n--] = O.selector(o), "string" == typeof o && s.splice(n + 1, 1)) : s.splice(n--, 1);
                else this._propLookup = {}, this._siblings = U(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay)) }, !0),
            M = function(e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType) },
            z = function(t, e) {
                var i, a = {};
                for (i in t) Q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!B[i] || B[i] && B[i]._autoCSS) || (a[i] = t[i], delete t[i]);
                t.css = a };
        o = O.prototype = new I, o.constructor = O, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, O.version = "1.18.0", O.defaultEase = o._ease = new b(null, null, 1, 1), O.defaultOverwrite = "auto", O.ticker = s, O.autoSleep = 120, O.lagSmoothing = function(t, e) { s.lagSmoothing(t, e) }, O.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (O.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) };
        var E = [],
            D = {},
            j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            R = function(t) {
                for (var e, i = this._firstPT, a = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : a > e && e > -a && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next },
            F = function(t, e, i, a) {
                var n, o, s, r, l, d, c, p = [t, e],
                    h = 0,
                    u = "",
                    f = 0;
                for (p.start = t, i && (i(p), t = p[0], e = p[1]), p.length = 0, n = t.match(j) || [], o = e.match(j) || [], a && (a._next = null, a.blob = 1, p._firstPT = a), l = o.length, r = 0; l > r; r++) c = o[r], d = e.substr(h, e.indexOf(c, h) - h), u += d || !r ? d : ",", h += d.length, f ? f = (f + 1) % 5 : "rgba(" === d.substr(-5) && (f = 1), c === n[r] || r >= n.length ? u += c : (u && (p.push(u), u = ""), s = parseFloat(n[r]), p.push(s), p._firstPT = { _next: p._firstPT, t: p, p: p.length - 1, s: s, c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - s) || 0, f: 0, r: f && 4 > f }), h += c.length;
                return u += e.substr(h), u && p.push(u), p.setRatio = R, p },
            $ = function(t, e, i, a, n, o, s, r) {
                var l, d, c = "get" === i ? t[e] : i,
                    p = typeof t[e],
                    h = "string" == typeof a && "=" === a.charAt(1),
                    u = { t: t, p: e, s: c, f: "function" === p, pg: 0, n: n || e, r: o, pr: 0, c: h ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - c || 0 };
                return "number" !== p && ("function" === p && "get" === i && (d = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), u.s = c = s ? t[d](s) : t[d]()), "string" == typeof c && (s || isNaN(c)) ? (u.fp = s, l = F(c, a, r || O.defaultStringFilter, u), u = { t: l, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: n || e, pr: 0 }) : h || (u.c = parseFloat(a) - parseFloat(c) || 0)), u.c ? ((u._next = this._firstPT) && (u._next._prev = u), this._firstPT = u, u) : void 0 },
            W = O._internals = { isArray: u, isSelector: M, lazyTweens: E, blobDif: F },
            B = O._plugins = {},
            H = W.tweenLookup = {},
            N = 0,
            Q = W.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1 },
            V = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, "true": 1, "false": 0 },
            X = I._rootFramesTimeline = new L,
            Y = I._rootTimeline = new L,
            q = 30,
            G = W.lazyRender = function() {
                var t, e = E.length;
                for (D = {}; --e > -1;) t = E[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                E.length = 0 };
        Y._startTime = s.time, X._startTime = s.frame, Y._active = X._active = !0, setTimeout(G, 1), I._updateRoot = O.render = function() {
            var t, e, i;
            if (E.length && G(), Y.render((s.time - Y._startTime) * Y._timeScale, !1, !1), X.render((s.frame - X._startTime) * X._timeScale, !1, !1), E.length && G(), s.frame >= q) { q = s.frame + (parseInt(O.autoSleep, 10) || 120);
                for (i in H) {
                    for (e = H[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete H[i] }
                if (i = Y._first, (!i || i._paused) && O.autoSleep && !X._first && 1 === s._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || s.sleep() } } }, s.addEventListener("tick", I._updateRoot);
        var U = function(t, e, i) {
                var a, n, o = t._gsTweenID;
                if (H[o || (t._gsTweenID = o = "t" + N++)] || (H[o] = { target: t, tweens: [] }), e && (a = H[o].tweens, a[n = a.length] = e, i))
                    for (; --n > -1;) a[n] === e && a.splice(n, 1);
                return H[o].tweens },
            Z = function(t, e, i, a) {
                var n, o, s = t.vars.onOverwrite;
                return s && (n = s(t, e, i, a)), s = O.onOverwrite, s && (o = s(t, e, i, a)), n !== !1 && o !== !1 },
            K = function(t, e, i, a, n) {
                var o, s, r, l;
                if (1 === a || a >= 4) {
                    for (l = n.length, o = 0; l > o; o++)
                        if ((r = n[o]) !== e) r._gc || r._kill(null, t, e) && (s = !0);
                        else if (5 === a) break;
                    return s }
                var d, p = e._startTime + c,
                    h = [],
                    u = 0,
                    f = 0 === e._duration;
                for (o = n.length; --o > -1;)(r = n[o]) === e || r._gc || r._paused || (r._timeline !== e._timeline ? (d = d || J(e, 0, f), 0 === J(r, d, f) && (h[u++] = r)) : p >= r._startTime && r._startTime + r.totalDuration() / r._timeScale > p && ((f || !r._initted) && 2e-10 >= p - r._startTime || (h[u++] = r)));
                for (o = u; --o > -1;)
                    if (r = h[o], 2 === a && r._kill(i, t, e) && (s = !0), 2 !== a || !r._firstPT && r._initted) {
                        if (2 !== a && !Z(r, e)) continue;
                        r._enabled(!1, !1) && (s = !0) }
                return s },
            J = function(t, e, i) {
                for (var a = t._timeline, n = a._timeScale, o = t._startTime; a._timeline;) {
                    if (o += a._startTime, n *= a._timeScale, a._paused) return -100;
                    a = a._timeline }
                return o /= n, o > e ? o - e : i && o === e || !t._initted && 2 * c > o - e ? c : (o += t.totalDuration() / t._timeScale / n) > e + c ? 0 : o - e - c };
        o._init = function() {
            var t, e, i, a, n, o = this.vars,
                s = this._overwrittenProps,
                r = this._duration,
                l = !!o.immediateRender,
                d = o.ease;
            if (o.startAt) { this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                for (a in o.startAt) n[a] = o.startAt[a];
                if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && o.lazy !== !1, n.startAt = n.delay = null, this._startAt = O.to(this.target, 0, n), l)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== r) return } else if (o.runBackwards && 0 !== r)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else { 0 !== this._time && (l = !1), i = {};
                    for (a in o) Q[a] && "autoCSS" !== a || (i[a] = o[a]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && o.lazy !== !1, i.immediateRender = l, this._startAt = O.to(this.target, 0, i), l) {
                        if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) }
            if (this._ease = d = d ? d instanceof b ? d : "function" == typeof d ? new b(d, o.easeParams) : x[d] || O.defaultEase : O.defaultEase, o.easeParams instanceof Array && d.config && (this._ease = d.config.apply(d, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, s);
            if (e && O._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = o.onUpdate, this._initted = !0 }, o._initProps = function(e, i, a, n) {
            var o, s, r, l, d, c;
            if (null == e) return !1;
            D[e._gsTweenID] && G(), this.vars.css || e.style && e !== t && e.nodeType && B.css && this.vars.autoCSS !== !1 && z(this.vars, e);
            for (o in this.vars)
                if (c = this.vars[o], Q[o]) c && (c instanceof Array || c.push && u(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                else if (B[o] && (l = new B[o])._onInitTween(e, this.vars[o], this)) {
                for (this._firstPT = d = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: 1, n: o, pg: 1, pr: l._priority }, s = l._overwriteProps.length; --s > -1;) i[l._overwriteProps[s]] = this._firstPT;
                (l._priority || l._onInitAllProps) && (r = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), d._next && (d._next._prev = d) } else i[o] = $.call(this, e, o, "get", c, o, 0, null, this.vars.stringFilter);
            return n && this._kill(n, e) ? this._initProps(e, i, a, n) : this._overwrite > 1 && this._firstPT && a.length > 1 && K(e, this, i, this._overwrite, a) ? (this._kill(i, e), this._initProps(e, i, a, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (D[e._gsTweenID] = !0), r) }, o.render = function(t, e, i) {
            var a, n, o, s, r = this._time,
                l = this._duration,
                d = this._rawPrevTime;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (a = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > d || d === c && "isPause" !== this.data) && d !== t && (i = !0, d > c && (n = "onReverseComplete")), this._rawPrevTime = s = !e || t || d === t ? t : c);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === l && d > 0) && (n = "onReverseComplete", a = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (d >= 0 && (d !== c || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || d === t ? t : c)), this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var p = t / l,
                    h = this._easeType,
                    u = this._easePower;
                (1 === h || 3 === h && p >= .5) && (p = 1 - p), 3 === h && (p *= 2), 1 === u ? p *= p : 2 === u ? p *= p * p : 3 === u ? p *= p * p * p : 4 === u && (p *= p * p * p * p), this.ratio = 1 === h ? 1 - p : 2 === h ? p : .5 > t / l ? p / 2 : 1 - p / 2 } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== r || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = r, this._rawPrevTime = d, E.push(this), void(this._lazy = [t, e]);
                    this._time && !a ? this.ratio = this._ease.getRatio(this._time / l) : a && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== r && t >= 0 && (this._active = !0), 0 === r && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== r || a) && this._callback("onUpdate")), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && this._rawPrevTime === c && s !== c && (this._rawPrevTime = 0)) } }, o._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : O.selector(e) || e;
            var a, n, o, s, r, l, d, c, p, h = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((u(e) || M(e)) && "number" != typeof e[0])
                for (a = e.length; --a > -1;) this._kill(t, e[a], i) && (l = !0);
            else {
                if (this._targets) {
                    for (a = this._targets.length; --a > -1;)
                        if (e === this._targets[a]) { r = this._propLookup[a] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[a] = t ? this._overwrittenProps[a] || {} : "all";
                            break } } else {
                    if (e !== this.target) return !1;
                    r = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all" }
                if (r) {
                    if (d = t || r, c = t !== n && "all" !== n && t !== r && ("object" != typeof t || !t._tempKill), i && (O.onOverwrite || this.vars.onOverwrite)) {
                        for (o in d) r[o] && (p || (p = []), p.push(o));
                        if ((p || !t) && !Z(this, i, e, p)) return !1 }
                    for (o in d)(s = r[o]) && (h && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(d) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete r[o]), c && (n[o] = 1);!this._firstPT && this._initted && this._enabled(!1, !1) } }
            return l }, o.invalidate = function() {
            return this._notifyPluginsOfEnabled && O._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], I.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -c, this.render(-this._delay)), this }, o._enabled = function(t, e) {
            if (r || s.wake(), t && this._gc) {
                var i, a = this._targets;
                if (a)
                    for (i = a.length; --i > -1;) this._siblings[i] = U(a[i], this, !0);
                else this._siblings = U(this.target, this, !0) }
            return I.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? O._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1 }, O.to = function(t, e, i) {
            return new O(t, e, i) }, O.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new O(t, e, i) }, O.fromTo = function(t, e, i, a) {
            return a.startAt = i, a.immediateRender = 0 != a.immediateRender && 0 != i.immediateRender, new O(t, e, a) }, O.delayedCall = function(t, e, i, a, n) {
            return new O(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: a, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: n, overwrite: 0 }) }, O.set = function(t, e) {
            return new O(t, 0, e) }, O.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : O.selector(t) || t;
            var i, a, n, o;
            if ((u(t) || M(t)) && "number" != typeof t[0]) {
                for (i = t.length, a = []; --i > -1;) a = a.concat(O.getTweensOf(t[i], e));
                for (i = a.length; --i > -1;)
                    for (o = a[i], n = i; --n > -1;) o === a[n] && a.splice(i, 1) } else
                for (a = U(t).concat(), i = a.length; --i > -1;)(a[i]._gc || e && !a[i].isActive()) && a.splice(i, 1);
            return a }, O.killTweensOf = O.killDelayedCallsTo = function(t, e, i) { "object" == typeof e && (i = e, e = !1);
            for (var a = O.getTweensOf(t, e), n = a.length; --n > -1;) a[n]._kill(i, t) };
        var tt = v("plugins.TweenPlugin", function(t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype }, !0);
        if (o = tt.prototype, tt.version = "1.18.0", tt.API = 2, o._firstPT = null, o._addTween = $, o.setRatio = R, o._kill = function(t) {
                var e, i = this._overwriteProps,
                    a = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; a;) null != t[a.n] && (a._next && (a._next._prev = a._prev), a._prev ? (a._prev._next = a._next, a._prev = null) : this._firstPT === a && (this._firstPT = a._next)), a = a._next;
                return !1 }, o._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next }, O._onPluginEvent = function(t, e) {
                var i, a, n, o, s, r = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; r;) {
                        for (s = r._next, a = n; a && a.pr > r.pr;) a = a._next;
                        (r._prev = a ? a._prev : o) ? r._prev._next = r: n = r, (r._next = a) ? a._prev = r : o = r, r = s }
                    r = e._firstPT = n }
                for (; r;) r.pg && "function" == typeof r.t[t] && r.t[t]() && (i = !0), r = r._next;
                return i }, tt.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === tt.API && (B[(new t[e])._propName] = t[e]);
                return !0 }, m.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    a = t.priority || 0,
                    n = t.overwriteProps,
                    o = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_roundProps", initAll: "_onInitAllProps" },
                    s = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() { tt.call(this, i, a), this._overwriteProps = n || [] }, t.global === !0),
                    r = s.prototype = new tt(i);
                r.constructor = s, s.API = t.API;
                for (e in o) "function" == typeof t[e] && (r[o[e]] = t[e]);
                return s.version = t.version, tt.activate([s]), s }, a = t._gsQueue) {
            for (n = 0; a.length > n; n++) a[n]();
            for (o in f) f[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o) }
        r = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
            var a = function(t) { e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                    var i, a, n = this.vars;
                    for (a in n) i = n[a], l(i) && -1 !== i.join("").indexOf("{self}") && (n[a] = this._swapSelfInParams(i));
                    l(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger) },
                n = 1e-10,
                o = i._internals,
                s = a._internals = {},
                r = o.isSelector,
                l = o.isArray,
                d = o.lazyTweens,
                c = o.lazyRender,
                p = _gsScope._gsDefine.globals,
                h = function(t) {
                    var e, i = {};
                    for (e in t) i[e] = t[e];
                    return i },
                u = function(t, e, i) {
                    var a, n, o = t.cycle;
                    for (a in o) n = o[a], t[a] = "function" == typeof n ? n.call(e[i], i) : n[i % n.length];
                    delete t.cycle },
                f = s.pauseCallback = function() {},
                g = function(t) {
                    var e, i = [],
                        a = t.length;
                    for (e = 0; e !== a; i.push(t[e++]));
                    return i },
                m = a.prototype = new e;
            return a.version = "1.18.0", m.constructor = a, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, a, n) {
                var o = a.repeat && p.TweenMax || i;
                return e ? this.add(new o(t, e, a), n) : this.set(t, a, n) }, m.from = function(t, e, a, n) {
                return this.add((a.repeat && p.TweenMax || i).from(t, e, a), n) }, m.fromTo = function(t, e, a, n, o) {
                var s = n.repeat && p.TweenMax || i;
                return e ? this.add(s.fromTo(t, e, a, n), o) : this.set(t, n, o) }, m.staggerTo = function(t, e, n, o, s, l, d, c) {
                var p, f, m = new a({ onComplete: l, onCompleteParams: d, callbackScope: c, smoothChildTiming: this.smoothChildTiming }),
                    v = n.cycle;
                for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], r(t) && (t = g(t)), o = o || 0, 0 > o && (t = g(t), t.reverse(), o *= -1), f = 0; t.length > f; f++) p = h(n), p.startAt && (p.startAt = h(p.startAt), p.startAt.cycle && u(p.startAt, t, f)), v && u(p, t, f), m.to(t[f], e, p, f * o);
                return this.add(m, s) }, m.staggerFrom = function(t, e, i, a, n, o, s, r) {
                return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, a, n, o, s, r) }, m.staggerFromTo = function(t, e, i, a, n, o, s, r, l) {
                return a.startAt = i, a.immediateRender = 0 != a.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, a, n, o, s, r, l) }, m.call = function(t, e, a, n) {
                return this.add(i.delayedCall(0, t, e, a), n) }, m.set = function(t, e, a) {
                return a = this._parseTimeOrLabel(a, 0, !0), null == e.immediateRender && (e.immediateRender = a === this._time && !this._paused), this.add(new i(t, 0, e), a) }, a.exportRoot = function(t, e) { t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                var n, o, s = new a(t),
                    r = s._timeline;
                for (null == e && (e = !0), r._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = r._time, n = r._first; n;) o = n._next, e && n instanceof i && n.target === n.vars.onComplete || s.add(n, n._startTime - n._delay), n = o;
                return r.add(s, 0), s }, m.add = function(n, o, s, r) {
                var d, c, p, h, u, f;
                if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, n)), !(n instanceof t)) {
                    if (n instanceof Array || n && n.push && l(n)) {
                        for (s = s || "normal", r = r || 0, d = o, c = n.length, p = 0; c > p; p++) l(h = n[p]) && (h = new a({ tweens: h })), this.add(h, d), "string" != typeof h && "function" != typeof h && ("sequence" === s ? d = h._startTime + h.totalDuration() / h._timeScale : "start" === s && (h._startTime -= h.delay())), d += r;
                        return this._uncache(!0) }
                    if ("string" == typeof n) return this.addLabel(n, o);
                    if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                    n = i.delayedCall(0, n) }
                if (e.prototype.add.call(this, n, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                    for (u = this, f = u.rawTime() > n._startTime; u._timeline;) f && u._timeline.smoothChildTiming ? u.totalTime(u._totalTime, !0) : u._gc && u._enabled(!0, !1), u = u._timeline;
                return this }, m.remove = function(e) {
                if (e instanceof t) { this._remove(e, !1);
                    var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                    return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this }
                if (e instanceof Array || e && e.push && l(e)) {
                    for (var a = e.length; --a > -1;) this.remove(e[a]);
                    return this }
                return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, m._remove = function(t, i) { e.prototype._remove.call(this, t, i);
                var a = this._last;
                return a ? this._time > a._startTime + a._totalDuration / a._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, m.append = function(t, e) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, m.insert = m.insertMultiple = function(t, e, i, a) {
                return this.add(t, e || 0, i, a) }, m.appendMultiple = function(t, e, i, a) {
                return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, a) }, m.addLabel = function(t, e) {
                return this._labels[t] = this._parseTimeOrLabel(e), this }, m.addPause = function(t, e, a, n) {
                var o = i.delayedCall(0, f, a, n || this);
                return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t) }, m.removeLabel = function(t) {
                return delete this._labels[t], this }, m.getLabelTime = function(t) {
                return null != this._labels[t] ? this._labels[t] : -1 }, m._parseTimeOrLabel = function(e, i, a, n) {
                var o;
                if (n instanceof t && n.timeline === this) this.remove(n);
                else if (n && (n instanceof Array || n.push && l(n)))
                    for (o = n.length; --o > -1;) n[o] instanceof t && n[o].timeline === this && this.remove(n[o]);
                if ("string" == typeof i) return this._parseTimeOrLabel(i, a && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, a);
                if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                else {
                    if (o = e.indexOf("="), -1 === o) return null == this._labels[e] ? a ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                    i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, a) : this.duration() }
                return Number(e) + i }, m.seek = function(t, e) {
                return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1) }, m.stop = function() {
                return this.paused(!0) }, m.gotoAndPlay = function(t, e) {
                return this.play(t, e) }, m.gotoAndStop = function(t, e) {
                return this.pause(t, e) }, m.render = function(t, e, i) {
                this._gc && this._enabled(!0, !1);
                var a, o, s, r, l, p, h = this._dirty ? this.totalDuration() : this._totalDuration,
                    u = this._time,
                    f = this._startTime,
                    g = this._timeScale,
                    m = this._paused;
                if (t >= h) this._totalTime = this._time = h, this._reversed || this._hasPausedChild() || (o = !0, r = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === n) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > n && (r = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, t = h + 1e-4;
                else if (1e-7 > t)
                    if (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && this._rawPrevTime !== n && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (r = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, r = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                    else {
                        if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : n, 0 === t && o)
                            for (a = this._first; a && 0 === a._startTime;) a._duration || (o = !1), a = a._next;
                        t = 0, this._initted || (l = !0) }
                else {
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                        if (t >= u)
                            for (a = this._first; a && t >= a._startTime && !p;) a._duration || "isPause" !== a.data || a.ratio || 0 === a._startTime && 0 === this._rawPrevTime || (p = a), a = a._next;
                        else
                            for (a = this._last; a && a._startTime >= t && !p;) a._duration || "isPause" === a.data && a._rawPrevTime > 0 && (p = a), a = a._prev;
                        p && (this._time = t = p._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)) }
                    this._totalTime = this._time = this._rawPrevTime = t }
                if (this._time !== u && this._first || i || l || p) {
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && t > 0 && (this._active = !0), 0 === u && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= u)
                        for (a = this._first; a && (s = a._next, !this._paused || m);)(a._active || a._startTime <= this._time && !a._paused && !a._gc) && (p === a && this.pause(), a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (t - a._startTime) * a._timeScale, e, i) : a.render((t - a._startTime) * a._timeScale, e, i)), a = s;
                    else
                        for (a = this._last; a && (s = a._prev, !this._paused || m);) {
                            if (a._active || u >= a._startTime && !a._paused && !a._gc) {
                                if (p === a) {
                                    for (p = a._prev; p && p.endTime() > this._time;) p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, i), p = p._prev;
                                    p = null, this.pause() }
                                a._reversed ? a.render((a._dirty ? a.totalDuration() : a._totalDuration) - (t - a._startTime) * a._timeScale, e, i) : a.render((t - a._startTime) * a._timeScale, e, i) }
                            a = s }
                    this._onUpdate && (e || (d.length && c(), this._callback("onUpdate"))), r && (this._gc || (f === this._startTime || g !== this._timeScale) && (0 === this._time || h >= this.totalDuration()) && (o && (d.length && c(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r))) }
            }, m._hasPausedChild = function() {
                for (var t = this._first; t;) {
                    if (t._paused || t instanceof a && t._hasPausedChild()) return !0;
                    t = t._next }
                return !1 }, m.getChildren = function(t, e, a, n) { n = n || -9999999999;
                for (var o = [], s = this._first, r = 0; s;) n > s._startTime || (s instanceof i ? e !== !1 && (o[r++] = s) : (a !== !1 && (o[r++] = s), t !== !1 && (o = o.concat(s.getChildren(!0, e, a)), r = o.length))), s = s._next;
                return o }, m.getTweensOf = function(t, e) {
                var a, n, o = this._gc,
                    s = [],
                    r = 0;
                for (o && this._enabled(!0, !0), a = i.getTweensOf(t), n = a.length; --n > -1;)(a[n].timeline === this || e && this._contains(a[n])) && (s[r++] = a[n]);
                return o && this._enabled(!1, !0), s }, m.recent = function() {
                return this._recent }, m._contains = function(t) {
                for (var e = t.timeline; e;) {
                    if (e === this) return !0;
                    e = e.timeline }
                return !1 }, m.shiftChildren = function(t, e, i) { i = i || 0;
                for (var a, n = this._first, o = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
                if (e)
                    for (a in o) o[a] >= i && (o[a] += t);
                return this._uncache(!0) }, m._kill = function(t, e) {
                if (!t && !e) return this._enabled(!1, !1);
                for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), a = i.length, n = !1; --a > -1;) i[a]._kill(t, e) && (n = !0);
                return n }, m.clear = function(t) {
                var e = this.getChildren(!1, !0, !0),
                    i = e.length;
                for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                return t !== !1 && (this._labels = {}), this._uncache(!0) }, m.invalidate = function() {
                for (var e = this._first; e;) e.invalidate(), e = e._next;
                return t.prototype.invalidate.call(this) }, m._enabled = function(t, i) {
                if (t === this._gc)
                    for (var a = this._first; a;) a._enabled(t, !0), a = a._next;
                return e.prototype._enabled.call(this, t, i) }, m.totalTime = function() { this._forcingPlayhead = !0;
                var e = t.prototype.totalTime.apply(this, arguments);
                return this._forcingPlayhead = !1, e }, m.duration = function(t) {
                return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, m.totalDuration = function(t) {
                if (!arguments.length) {
                    if (this._dirty) {
                        for (var e, i, a = 0, n = this._last, o = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > o && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : o = n._startTime, 0 > n._startTime && !n._paused && (a -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), o = 0), i = n._startTime + n._totalDuration / n._timeScale, i > a && (a = i), n = e;
                        this._duration = this._totalDuration = a, this._dirty = !1 }
                    return this._totalDuration }
                return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this }, m.paused = function(e) {
                if (!e)
                    for (var i = this._first, a = this._time; i;) i._startTime === a && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                return t.prototype.paused.apply(this, arguments) }, m.usesFrames = function() {
                for (var e = this._timeline; e._timeline;) e = e._timeline;
                return e === t._rootFramesTimeline }, m.rawTime = function() {
                return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale }, a
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) { "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t] }; "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("./TweenLite.js"), module.exports = e()) }("TimelineLite");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() { "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, a, n = _gsScope.GreenSockGlobals || _gsScope,
            o = n.com.greensock,
            s = 2 * Math.PI,
            r = Math.PI / 2,
            l = o._class,
            d = function(e, i) {
                var a = l("easing." + e, function() {}, !0),
                    n = a.prototype = new t;
                return n.constructor = a, n.getRatio = i, a },
            c = t.register || function() {},
            p = function(t, e, i, a) {
                var n = l("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new a }, !0);
                return c(n, t), n },
            h = function(t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) },
            u = function(e, i) {
                var a = l("easing." + e, function(t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0),
                    n = a.prototype = new t;
                return n.constructor = a, n.getRatio = i, n.config = function(t) {
                    return new a(t) }, a },
            f = p("Back", u("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), u("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1) }), u("BackInOut", function(t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })),
            g = l("easing.SlowMo", function(t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0 }, !0),
            m = g.prototype = new t;
        return m.constructor = g, m.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, g.ease = new g(.7, .7), m.config = g.config = function(t, e, i) {
            return new g(t, e, i) }, e = l("easing.SteppedEase", function(t) { t = t || 1, this._p1 = 1 / t, this._p2 = t + 1 }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1 }, m.config = e.config = function(t) {
            return new e(t) }, i = l("easing.RoughEase", function(e) { e = e || {};
            for (var i, a, n, o, s, r, l = e.taper || "none", d = [], c = 0, p = 0 | (e.points || 20), u = p, f = e.randomize !== !1, g = e.clamp === !0, m = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --u > -1;) i = f ? Math.random() : 1 / p * u, a = m ? m.getRatio(i) : i, "none" === l ? n = v : "out" === l ? (o = 1 - i, n = o * o * v) : "in" === l ? n = i * i * v : .5 > i ? (o = 2 * i, n = .5 * o * o * v) : (o = 2 * (1 - i), n = .5 * o * o * v), f ? a += Math.random() * n - .5 * n : u % 2 ? a += .5 * n : a -= .5 * n, g && (a > 1 ? a = 1 : 0 > a && (a = 0)), d[c++] = { x: i, y: a };
            for (d.sort(function(t, e) {
                    return t.x - e.x }), r = new h(1, 1, null), u = p; --u > -1;) s = d[u], r = new h(s.x, s.y, r);
            this._prev = new h(0, 0, 0 !== r.t ? r : r.next) }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c }, m.config = function(t) {
            return new i(t) }, i.ease = new i, p("Bounce", d("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), d("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), d("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), p("Circ", d("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t) }), d("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1) }), d("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), a = function(e, i, a) {
            var n = l("easing." + e, function(t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || a) / (1 > t ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2 }, !0),
                o = n.prototype = new t;
            return o.constructor = n, o.getRatio = i, o.config = function(t, e) {
                return new n(t, e) }, n }, p("Elastic", a("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1 }, .3), a("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) }, .3), a("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1 }, .45)), p("Expo", d("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t) }), d("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001 }), d("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), p("Sine", d("SineOut", function(t) {
            return Math.sin(t * r) }), d("SineIn", function(t) {
            return -Math.cos(t * r) + 1 }), d("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1) })), l("easing.EaseLookup", { find: function(e) {
                return t.map[e] } }, !0), c(n.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f }, !0) }), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, a, n, o, s = function() { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio },
                r = _gsScope._gsDefine.globals,
                l = {},
                d = s.prototype = new t("css");
            d.constructor = s, s.version = "1.18.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, d = "px", s.suffixMap = { top: d, right: d, bottom: d, left: d, width: d, height: d, fontSize: d, padding: d, margin: d, perspective: d, lineHeight: "" };
            var c, p, h, u, f, g, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                b = /(?:\d|\-|\+|=|#|\.)*/g,
                x = /opacity *= *([^)]*)/i,
                _ = /opacity:([^;]*)/i,
                T = /alpha\(opacity *=.+?\)/i,
                C = /^(rgb|hsl)/,
                S = /([A-Z])/g,
                k = /-([a-z])/gi,
                P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                I = function(t, e) {
                    return e.toUpperCase() },
                A = /(?:Left|Right|Width)/i,
                L = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                M = /,(?=[^\)]*(?:\(|$))/gi,
                z = Math.PI / 180,
                E = 180 / Math.PI,
                D = {},
                j = document,
                R = function(t) {
                    return j.createElementNS ? j.createElementNS("http://www.w3.org/1999/xhtml", t) : j.createElement(t) },
                F = R("div"),
                $ = R("img"),
                W = s._internals = { _specialProps: l },
                B = navigator.userAgent,
                H = function() {
                    var t = B.indexOf("Android"),
                        e = R("a");
                    return h = -1 !== B.indexOf("Safari") && -1 === B.indexOf("Chrome") && (-1 === t || Number(B.substr(t + 8, 1)) > 3), f = h && 6 > Number(B.substr(B.indexOf("Version/") + 8, 1)), u = -1 !== B.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(B) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(B)) && (g = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1 }(),
                N = function(t) {
                    return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 },
                Q = function(t) { window.console && console.log(t) },
                V = "",
                X = "",
                Y = function(t, e) { e = e || F;
                    var i, a, n = e.style;
                    if (void 0 !== n[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], a = 5; --a > -1 && void 0 === n[i[a] + t];);
                    return a >= 0 ? (X = 3 === a ? "ms" : i[a], V = "-" + X.toLowerCase() + "-", X + t) : null },
                q = j.defaultView ? j.defaultView.getComputedStyle : function() {},
                G = s.getStyle = function(t, e, i, a, n) {
                    var o;
                    return H || "opacity" !== e ? (!a && t.style[e] ? o = t.style[e] : (i = i || q(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == n || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : n) : N(t) },
                U = W.convertToPixels = function(t, i, a, n, o) {
                    if ("px" === n || !n) return a;
                    if ("auto" === n || !a) return 0;
                    var r, l, d, c = A.test(i),
                        p = t,
                        h = F.style,
                        u = 0 > a;
                    if (u && (a = -a), "%" === n && -1 !== i.indexOf("border")) r = a / 100 * (c ? t.clientWidth : t.clientHeight);
                    else {
                        if (h.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== n && p.appendChild && "v" !== n.charAt(0) && "rem" !== n) h[c ? "borderLeftWidth" : "borderTopWidth"] = a + n;
                        else {
                            if (p = t.parentNode || j.body, l = p._gsCache, d = e.ticker.frame, l && c && l.time === d) return l.width * a / 100;
                            h[c ? "width" : "height"] = a + n }
                        p.appendChild(F), r = parseFloat(F[c ? "offsetWidth" : "offsetHeight"]), p.removeChild(F), c && "%" === n && s.cacheWidths !== !1 && (l = p._gsCache = p._gsCache || {}, l.time = d, l.width = 100 * (r / a)), 0 !== r || o || (r = U(t, i, a, n, !0)) }
                    return u ? -r : r },
                Z = W.calculateOffset = function(t, e, i) {
                    if ("absolute" !== G(t, "position", i)) return 0;
                    var a = "left" === e ? "Left" : "Top",
                        n = G(t, "margin" + a, i);
                    return t["offset" + a] - (U(t, e, parseFloat(n), n.replace(b, "")) || 0) },
                K = function(t, e) {
                    var i, a, n, o = {};
                    if (e = e || q(t, null))
                        if (i = e.length)
                            for (; --i > -1;) n = e[i], (-1 === n.indexOf("-transform") || St === n) && (o[n.replace(k, I)] = e.getPropertyValue(n));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || Ct === i) && (o[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(k, I)] = e[i]);
                    return H || (o.opacity = N(t)), a = Rt(t, e, !1), o.rotation = a.rotation, o.skewX = a.skewX, o.scaleX = a.scaleX, o.scaleY = a.scaleY, o.x = a.x, o.y = a.y, Pt && (o.z = a.z, o.rotationX = a.rotationX, o.rotationY = a.rotationY, o.scaleZ = a.scaleZ), o.filters && delete o.filters, o },
                J = function(t, e, i, a, n) {
                    var o, s, r, l = {},
                        d = t.style;
                    for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || n && n[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(y, "") ? o : 0 : Z(t, s), void 0 !== d[s] && (r = new ft(d, s, d[s], r)));
                    if (a)
                        for (s in a) "className" !== s && (l[s] = a[s]);
                    return { difs: l, firstMPT: r } },
                tt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                it = function(t, e, i) {
                    var a = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        n = tt[e],
                        o = n.length;
                    for (i = i || q(t, null); --o > -1;) a -= parseFloat(G(t, "padding" + n[o], i, !0)) || 0, a -= parseFloat(G(t, "border" + n[o] + "Width", i, !0)) || 0;
                    return a },
                at = function(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                    (null == t || "" === t) && (t = "0 0");
                    var i = t.split(" "),
                        a = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    return null == n ? n = "center" === a ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === a || isNaN(parseFloat(a)) && -1 === (a + "").indexOf("=")) && (a = "50%"), t = a + " " + n + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== a.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === a.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(a.replace(y, "")), e.oy = parseFloat(n.replace(y, "")), e.v = t), e || t },
                nt = function(t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) },
                ot = function(t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) },
                st = function(t, e, i, a) {
                    var n, o, s, r, l, d = 1e-6;
                    return null == t ? r = e : "number" == typeof t ? r = t : (n = 360, o = t.split("_"), l = "=" === t.charAt(1), s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : E) - (l ? 0 : e), o.length && (a && (a[i] = e + s), -1 !== t.indexOf("short") && (s %= n, s !== s % (n / 2) && (s = 0 > s ? s + n : s - n)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * n) % n - (0 | s / n) * n : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * n) % n - (0 | s / n) * n)), r = e + s), d > r && r > -d && (r = 0), r },
                rt = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] },
                lt = function(t, e, i) {
                    return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5 },
                dt = s.parseColor = function(t, e) {
                    var i, a, n, o, s, r, l, d, c, p, h;
                    if (t)
                        if ("number" == typeof t) i = [t >> 16, 255 & t >> 8, 255 & t];
                        else {
                            if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), rt[t]) i = rt[t];
                            else if ("#" === t.charAt(0)) 4 === t.length && (a = t.charAt(1), n = t.charAt(2), o = t.charAt(3), t = "#" + a + a + n + n + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, 255 & t >> 8, 255 & t];
                            else if ("hsl" === t.substr(0, 3))
                                if (i = h = t.match(m), e) {
                                    if (-1 !== t.indexOf("=")) return t.match(v) } else s = Number(i[0]) % 360 / 360, r = Number(i[1]) / 100, l = Number(i[2]) / 100, n = .5 >= l ? l * (r + 1) : l + r - l * r, a = 2 * l - n, i.length > 3 && (i[3] = Number(t[3])), i[0] = lt(s + 1 / 3, a, n), i[1] = lt(s, a, n), i[2] = lt(s - 1 / 3, a, n);
                            else i = t.match(m) || rt.transparent;
                            i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3])) }
                    else i = rt.black;
                    return e && !h && (a = i[0] / 255, n = i[1] / 255, o = i[2] / 255, d = Math.max(a, n, o), c = Math.min(a, n, o), l = (d + c) / 2, d === c ? s = r = 0 : (p = d - c, r = l > .5 ? p / (2 - d - c) : p / (d + c), s = d === a ? (n - o) / p + (o > n ? 6 : 0) : d === n ? (o - a) / p + 2 : (a - n) / p + 4, s *= 60), i[0] = 0 | s + .5, i[1] = 0 | 100 * r + .5, i[2] = 0 | 100 * l + .5), i },
                ct = function(t, e) {
                    var i, a, n, o = t.match(pt) || [],
                        s = 0,
                        r = o.length ? "" : t;
                    for (i = 0; o.length > i; i++) a = o[i], n = t.substr(s, t.indexOf(a, s) - s), s += n.length + a.length, a = dt(a, e), 3 === a.length && a.push(1), r += n + (e ? "hsla(" + a[0] + "," + a[1] + "%," + a[2] + "%," + a[3] : "rgba(" + a.join(",")) + ")";
                    return r },
                pt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (d in rt) pt += "|" + d + "\\b";
            pt = RegExp(pt + ")", "gi"), s.colorStringFilter = function(t) {
                var e, i = t[0] + t[1];
                pt.lastIndex = 0, pt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ct(t[0], e), t[1] = ct(t[1], e)) }, e.defaultStringFilter || (e.defaultStringFilter = s.colorStringFilter);
            var ht = function(t, e, i, a) {
                    if (null == t) return function(t) {
                        return t };
                    var n, o = e ? (t.match(pt) || [""])[0] : "",
                        s = t.split(o).join("").match(w) || [],
                        r = t.substr(0, t.indexOf(s[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        d = -1 !== t.indexOf(" ") ? " " : ",",
                        c = s.length,
                        p = c > 0 ? s[0].replace(m, "") : "";
                    return c ? n = e ? function(t) {
                        var e, h, u, f;
                        if ("number" == typeof t) t += p;
                        else if (a && M.test(t)) {
                            for (f = t.replace(M, "|").split("|"), u = 0; f.length > u; u++) f[u] = n(f[u]);
                            return f.join(",") }
                        if (e = (t.match(pt) || [o])[0], h = t.split(e).join("").match(w) || [], u = h.length, c > u--)
                            for (; c > ++u;) h[u] = i ? h[0 | (u - 1) / 2] : s[u];
                        return r + h.join(d) + d + e + l + (-1 !== t.indexOf("inset") ? " inset" : "") } : function(t) {
                        var e, o, h;
                        if ("number" == typeof t) t += p;
                        else if (a && M.test(t)) {
                            for (o = t.replace(M, "|").split("|"), h = 0; o.length > h; h++) o[h] = n(o[h]);
                            return o.join(",") }
                        if (e = t.match(w) || [], h = e.length, c > h--)
                            for (; c > ++h;) e[h] = i ? e[0 | (h - 1) / 2] : s[h];
                        return r + e.join(d) + l } : function(t) {
                        return t } },
                ut = function(t) {
                    return t = t.split(","),
                        function(e, i, a, n, o, s, r) {
                            var l, d = (i + "").split(" ");
                            for (r = {}, l = 0; 4 > l; l++) r[t[l]] = d[l] = d[l] || d[(l - 1) / 2 >> 0];
                            return n.parse(e, r, o, s) } },
                ft = (W._setPluginRatio = function(t) { this.plugin.setRatio(t);
                    for (var e, i, a, n, o = this.data, s = o.proxy, r = o.firstMPT, l = 1e-6; r;) e = s[r.v], r.r ? e = Math.round(e) : l > e && e > -l && (e = 0), r.t[r.p] = e, r = r._next;
                    if (o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === t)
                        for (r = o.firstMPT; r;) {
                            if (i = r.t, i.type) {
                                if (1 === i.type) {
                                    for (n = i.xs0 + i.s + i.xs1, a = 1; i.l > a; a++) n += i["xn" + a] + i["xs" + (a + 1)];
                                    i.e = n } } else i.e = i.s + i.xs0;
                            r = r._next } }, function(t, e, i, a, n) { this.t = t, this.p = e, this.v = i, this.r = n, a && (a._prev = this, this._next = a) }),
                gt = (W._parseToProxy = function(t, e, i, a, n, o) {
                    var s, r, l, d, c, p = a,
                        h = {},
                        u = {},
                        f = i._transform,
                        g = D;
                    for (i._transform = null, D = e, a = c = i.parse(t, e, a, n), D = g, o && (i._transform = f, p && (p._prev = null, p._prev && (p._prev._next = null))); a && a !== p;) {
                        if (1 >= a.type && (r = a.p, u[r] = a.s + a.c, h[r] = a.s, o || (d = new ft(a, "s", r, d, a.r), a.c = 0), 1 === a.type))
                            for (s = a.l; --s > 0;) l = "xn" + s, r = a.p + "_" + l, u[r] = a.data[l], h[r] = a[l], o || (d = new ft(a, l, r, d, a.rxp[l]));
                        a = a._next }
                    return { proxy: h, end: u, firstMPT: d, pt: c } }, W.CSSPropTween = function(t, e, a, n, s, r, l, d, c, p, h) { this.t = t, this.p = e, this.s = a, this.c = n, this.n = l || e, t instanceof gt || o.push(this.n), this.r = d, this.type = r || 0, c && (this.pr = c, i = !0), this.b = void 0 === p ? a : p, this.e = void 0 === h ? a + n : h, s && (this._next = s, s._prev = this) }),
                mt = function(t, e, i, a, n, o) {
                    var s = new gt(t, e, i, a - i, n, -1, o);
                    return s.b = i, s.e = s.xs0 = a, s },
                vt = s.parseComplex = function(t, e, i, a, n, o, s, r, l, d) { i = i || o || "", s = new gt(t, e, 0, 0, s, d ? 2 : 1, null, !1, r, i, a), a += "";
                    var p, h, u, f, g, w, y, b, x, _, T, C, S, k = i.split(", ").join(",").split(" "),
                        P = a.split(", ").join(",").split(" "),
                        I = k.length,
                        A = c !== !1;
                    for ((-1 !== a.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(M, ", ").split(" "), P = P.join(" ").replace(M, ", ").split(" "), I = k.length), I !== P.length && (k = (o || "").split(" "), I = k.length), s.plugin = l, s.setRatio = d, pt.lastIndex = 0, p = 0; I > p; p++)
                        if (f = k[p], g = P[p], b = parseFloat(f), b || 0 === b) s.appendXtra("", b, nt(g, b), g.replace(v, ""), A && -1 !== g.indexOf("px"), !0);
                        else if (n && pt.test(f)) C = "," === g.charAt(g.length - 1) ? ")," : ")", S = -1 !== g.indexOf("hsl") && H, f = dt(f, S), g = dt(g, S), x = f.length + g.length > 6, x && !H && 0 === g[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(P[p]).join("transparent")) : (H || (x = !1), S ? s.appendXtra(x ? "hsla(" : "hsl(", f[0], nt(g[0], f[0]), ",", !1, !0).appendXtra("", f[1], nt(g[1], f[1]), "%,", !1).appendXtra("", f[2], nt(g[2], f[2]), x ? "%," : "%" + C, !1) : s.appendXtra(x ? "rgba(" : "rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], x ? "," : C, !0), x && (f = 4 > f.length ? 1 : f[3], s.appendXtra("", f, (4 > g.length ? 1 : g[3]) - f, C, !1))), pt.lastIndex = 0;
                    else if (w = f.match(m)) {
                        if (y = g.match(v), !y || y.length !== w.length) return s;
                        for (u = 0, h = 0; w.length > h; h++) T = w[h], _ = f.indexOf(T, u), s.appendXtra(f.substr(u, _ - u), Number(T), nt(y[h], T), "", A && "px" === f.substr(_ + T.length, 2), 0 === h), u = _ + T.length;
                        s["xs" + s.l] += f.substr(u) } else s["xs" + s.l] += s.l ? " " + f : f;
                    if (-1 !== a.indexOf("=") && s.data) {
                        for (C = s.xs0 + s.data.s, p = 1; s.l > p; p++) C += s["xs" + p] + s.data["xn" + p];
                        s.e = C + s["xs" + p] }
                    return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s },
                wt = 9;
            for (d = gt.prototype, d.l = d.pr = 0; --wt > 0;) d["xn" + wt] = 0, d["xs" + wt] = "";
            d.xs0 = "", d._next = d._prev = d.xfirst = d.data = d.plugin = d.setRatio = d.rxp = null, d.appendXtra = function(t, e, i, a, n, o) {
                var s = this,
                    r = s.l;
                return s["xs" + r] += o && r ? " " + t : t || "", i || 0 === r || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = a || "", r > 0 ? (s.data["xn" + r] = e + i, s.rxp["xn" + r] = n, s["xn" + r] = e, s.plugin || (s.xfirst = new gt(s, "xn" + r, e, i, s.xfirst || s, 0, s.n, n, s.pr), s.xfirst.xs0 = 0), s) : (s.data = { s: e + i }, s.rxp = {}, s.s = e, s.c = i, s.r = n, s)) : (s["xs" + r] += e + (a || ""), s) };
            var yt = function(t, e) { e = e || {}, this.p = e.prefix ? Y(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ht(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 },
                bt = W._registerComplexSpecialProp = function(t, e, i) { "object" != typeof e && (e = { parser: i });
                    var a, n, o = t.split(","),
                        s = e.defaultValue;
                    for (i = i || [s], a = 0; o.length > a; a++) e.prefix = 0 === a && e.prefix, e.defaultValue = i[a] || s, n = new yt(o[a], e) },
                xt = function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        bt(t, { parser: function(t, i, a, n, o, s, d) {
                                var c = r.com.greensock.plugins[e];
                                return c ? (c._cssRegister(), l[a].parse(t, i, a, n, o, s, d)) : (Q("Error: " + e + " js file not loaded."), o) } }) } };
            d = yt.prototype, d.parseComplex = function(t, e, i, a, n, o) {
                var s, r, l, d, c, p, h = this.keyword;
                if (this.multi && (M.test(i) || M.test(e) ? (r = e.replace(M, "|").split("|"), l = i.replace(M, "|").split("|")) : h && (r = [e], l = [i])), l) {
                    for (d = l.length > r.length ? l.length : r.length, s = 0; d > s; s++) e = r[s] = r[s] || this.dflt, i = l[s] = l[s] || this.dflt, h && (c = e.indexOf(h), p = i.indexOf(h), c !== p && (-1 === p ? r[s] = r[s].split(h).join("") : -1 === c && (r[s] += " " + h)));
                    e = r.join(", "), i = l.join(", ") }
                return vt(t, this.p, e, i, this.clrs, this.dflt, a, this.pr, n, o) }, d.parse = function(t, e, i, a, o, s) {
                return this.parseComplex(t.style, this.format(G(t, this.p, n, !1, this.dflt)), this.format(e), o, s) }, s.registerSpecialProp = function(t, e, i) { bt(t, { parser: function(t, a, n, o, s, r) {
                        var l = new gt(t, n, 0, 0, s, 2, n, !1, i);
                        return l.plugin = r, l.setRatio = e(t, a, o._tween, n), l }, priority: i }) }, s.useSVGTransformAttr = h || u;
            var _t, Tt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Ct = Y("transform"),
                St = V + "transform",
                kt = Y("transformOrigin"),
                Pt = null !== Y("perspective"),
                It = W.Transform = function() { this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = s.defaultForce3D !== !1 && Pt ? s.defaultForce3D || "auto" : !1 },
                At = window.SVGElement,
                Lt = function(t, e, i) {
                    var a, n = j.createElementNS("http://www.w3.org/2000/svg", t),
                        o = /([a-z])([A-Z])/g;
                    for (a in i) n.setAttributeNS(null, a.replace(o, "$1-$2").toLowerCase(), i[a]);
                    return e.appendChild(n), n },
                Ot = j.documentElement,
                Mt = function() {
                    var t, e, i, a = g || /Android/i.test(B) && !window.chrome;
                    return j.createElementNS && !a && (t = Lt("svg", Ot), e = Lt("rect", t, { width: 100, height: 50, x: 100 }), i = e.getBoundingClientRect().width, e.style[kt] = "50% 50%", e.style[Ct] = "scaleX(0.5)", a = i === e.getBoundingClientRect().width && !(u && Pt), Ot.removeChild(t)), a }(),
                zt = function(t, e, i, a, n) {
                    var o, r, l, d, c, p, h, u, f, g, m, v, w, y, b = t._gsTransform,
                        x = jt(t, !0);
                    b && (w = b.xOrigin, y = b.yOrigin), (!a || 2 > (o = a.split(" ")).length) && (h = t.getBBox(), e = at(e).split(" "), o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * h.width : parseFloat(e[0])) + h.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * h.height : parseFloat(e[1])) + h.y]), i.xOrigin = d = parseFloat(o[0]), i.yOrigin = c = parseFloat(o[1]), a && x !== Dt && (p = x[0], h = x[1], u = x[2], f = x[3], g = x[4], m = x[5], v = p * f - h * u, r = d * (f / v) + c * (-u / v) + (u * m - f * g) / v, l = d * (-h / v) + c * (p / v) - (p * m - h * g) / v, d = i.xOrigin = o[0] = r, c = i.yOrigin = o[1] = l), b && (n || n !== !1 && s.defaultSmoothOrigin !== !1 ? (r = d - w, l = c - y, b.xOffset += r * x[0] + l * x[2] - r, b.yOffset += r * x[1] + l * x[3] - l) : b.xOffset = b.yOffset = 0), t.setAttribute("data-svg-origin", o.join(" ")) },
                Et = function(t) {
                    return !!(At && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM)) },
                Dt = [1, 0, 0, 1, 0, 0],
                jt = function(t, e) {
                    var i, a, n, o, s, r = t._gsTransform || new It,
                        l = 1e5;
                    if (Ct ? a = G(t, St, null, !0) : t.currentStyle && (a = t.currentStyle.filter.match(L), a = a && 4 === a.length ? [a[0].substr(4), Number(a[2].substr(4)), Number(a[1].substr(4)), a[3].substr(4), r.x || 0, r.y || 0].join(",") : ""), i = !a || "none" === a || "matrix(1, 0, 0, 1, 0, 0)" === a, (r.svg || t.getBBox && Et(t)) && (i && -1 !== (t.style[Ct] + "").indexOf("matrix") && (a = t.style[Ct], i = 0), n = t.getAttribute("transform"), i && n && (-1 !== n.indexOf("matrix") ? (a = n, i = 0) : -1 !== n.indexOf("translate") && (a = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Dt;
                    for (n = (a || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], wt = n.length; --wt > -1;) o = Number(n[wt]), n[wt] = (s = o - (o |= 0)) ? (0 | s * l + (0 > s ? -.5 : .5)) / l + o : o;
                    return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n },
                Rt = W.getTransform = function(t, i, a, o) {
                    if (t._gsTransform && a && !o) return t._gsTransform;
                    var r, l, d, c, p, h, u = a ? t._gsTransform || new It : new It,
                        f = 0 > u.scaleX,
                        g = 2e-5,
                        m = 1e5,
                        v = Pt ? parseFloat(G(t, kt, i, !1, "0 0 0").split(" ")[2]) || u.zOrigin || 0 : 0,
                        w = parseFloat(s.defaultTransformPerspective) || 0;
                    if (u.svg = !(!t.getBBox || !Et(t)), u.svg && (zt(t, G(t, kt, n, !1, "50% 50%") + "", u, t.getAttribute("data-svg-origin")), _t = s.useSVGTransformAttr || Mt), r = jt(t), r !== Dt) {
                        if (16 === r.length) {
                            var y, b, x, _, T, C = r[0],
                                S = r[1],
                                k = r[2],
                                P = r[3],
                                I = r[4],
                                A = r[5],
                                L = r[6],
                                O = r[7],
                                M = r[8],
                                z = r[9],
                                D = r[10],
                                j = r[12],
                                R = r[13],
                                F = r[14],
                                $ = r[11],
                                W = Math.atan2(L, D);
                            u.zOrigin && (F = -u.zOrigin, j = M * F - r[12], R = z * F - r[13], F = D * F + u.zOrigin - r[14]), u.rotationX = W * E, W && (_ = Math.cos(-W), T = Math.sin(-W), y = I * _ + M * T, b = A * _ + z * T, x = L * _ + D * T, M = I * -T + M * _, z = A * -T + z * _, D = L * -T + D * _, $ = O * -T + $ * _, I = y, A = b, L = x), W = Math.atan2(M, D), u.rotationY = W * E, W && (_ = Math.cos(-W), T = Math.sin(-W), y = C * _ - M * T, b = S * _ - z * T, x = k * _ - D * T, z = S * T + z * _, D = k * T + D * _, $ = P * T + $ * _, C = y, S = b, k = x), W = Math.atan2(S, C), u.rotation = W * E, W && (_ = Math.cos(-W), T = Math.sin(-W), C = C * _ + I * T, b = S * _ + A * T, A = S * -T + A * _, L = k * -T + L * _, S = b), u.rotationX && Math.abs(u.rotationX) + Math.abs(u.rotation) > 359.9 && (u.rotationX = u.rotation = 0, u.rotationY += 180), u.scaleX = (0 | Math.sqrt(C * C + S * S) * m + .5) / m, u.scaleY = (0 | Math.sqrt(A * A + z * z) * m + .5) / m, u.scaleZ = (0 | Math.sqrt(L * L + D * D) * m + .5) / m, u.skewX = 0, u.perspective = $ ? 1 / (0 > $ ? -$ : $) : 0, u.x = j, u.y = R, u.z = F, u.svg && (u.x -= u.xOrigin - (u.xOrigin * C - u.yOrigin * I), u.y -= u.yOrigin - (u.yOrigin * S - u.xOrigin * A)) } else if (!(Pt && !o && r.length && u.x === r[4] && u.y === r[5] && (u.rotationX || u.rotationY) || void 0 !== u.x && "none" === G(t, "display", i))) {
                            var B = r.length >= 6,
                                H = B ? r[0] : 1,
                                N = r[1] || 0,
                                Q = r[2] || 0,
                                V = B ? r[3] : 1;
                            u.x = r[4] || 0, u.y = r[5] || 0, d = Math.sqrt(H * H + N * N), c = Math.sqrt(V * V + Q * Q), p = H || N ? Math.atan2(N, H) * E : u.rotation || 0, h = Q || V ? Math.atan2(Q, V) * E + p : u.skewX || 0, Math.abs(h) > 90 && 270 > Math.abs(h) && (f ? (d *= -1, h += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (c *= -1, h += 0 >= h ? 180 : -180)), u.scaleX = d, u.scaleY = c, u.rotation = p, u.skewX = h, Pt && (u.rotationX = u.rotationY = u.z = 0, u.perspective = w, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * H + u.yOrigin * Q), u.y -= u.yOrigin - (u.xOrigin * N + u.yOrigin * V)) }
                        u.zOrigin = v;
                        for (l in u) g > u[l] && u[l] > -g && (u[l] = 0) }
                    return a && (t._gsTransform = u, u.svg && (_t && t.style[Ct] ? e.delayedCall(.001, function() { Bt(t.style, Ct) }) : !_t && t.getAttribute("transform") && e.delayedCall(.001, function() { t.removeAttribute("transform") }))), u },
                Ft = function(t) {
                    var e, i, a = this.data,
                        n = -a.rotation * z,
                        o = n + a.skewX * z,
                        s = 1e5,
                        r = (0 | Math.cos(n) * a.scaleX * s) / s,
                        l = (0 | Math.sin(n) * a.scaleX * s) / s,
                        d = (0 | Math.sin(o) * -a.scaleY * s) / s,
                        c = (0 | Math.cos(o) * a.scaleY * s) / s,
                        p = this.t.style,
                        h = this.t.currentStyle;
                    if (h) { i = l, l = -d, d = -i, e = h.filter, p.filter = "";
                        var u, f, m = this.t.offsetWidth,
                            v = this.t.offsetHeight,
                            w = "absolute" !== h.position,
                            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + r + ", M12=" + l + ", M21=" + d + ", M22=" + c,
                            _ = a.x + m * a.xPercent / 100,
                            T = a.y + v * a.yPercent / 100;
                        if (null != a.ox && (u = (a.oxp ? .01 * m * a.ox : a.ox) - m / 2, f = (a.oyp ? .01 * v * a.oy : a.oy) - v / 2, _ += u - (u * r + f * l), T += f - (u * d + f * c)), w ? (u = m / 2, f = v / 2, y += ", Dx=" + (u - (u * r + f * l) + _) + ", Dy=" + (f - (u * d + f * c) + T) + ")") : y += ", sizingMethod='auto expand')", p.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, y) : y + " " + e, (0 === t || 1 === t) && 1 === r && 0 === l && 0 === d && 1 === c && (w && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && p.removeAttribute("filter")), !w) {
                            var C, S, k, P = 8 > g ? 1 : -1;
                            for (u = a.ieOffsetX || 0, f = a.ieOffsetY || 0, a.ieOffsetX = Math.round((m - ((0 > r ? -r : r) * m + (0 > l ? -l : l) * v)) / 2 + _), a.ieOffsetY = Math.round((v - ((0 > c ? -c : c) * v + (0 > d ? -d : d) * m)) / 2 + T), wt = 0; 4 > wt; wt++) S = et[wt], C = h[S], i = -1 !== C.indexOf("px") ? parseFloat(C) : U(this.t, S, parseFloat(C), C.replace(b, "")) || 0, k = i !== a[S] ? 2 > wt ? -a.ieOffsetX : -a.ieOffsetY : 2 > wt ? u - a.ieOffsetX : f - a.ieOffsetY, p[S] = (a[S] = Math.round(i - k * (0 === wt || 2 === wt ? 1 : P))) + "px" } } },
                $t = W.set3DTransformRatio = W.setTransformRatio = function(t) {
                    var e, i, a, n, o, s, r, l, d, c, p, h, f, g, m, v, w, y, b, x, _, T, C, S = this.data,
                        k = this.t.style,
                        P = S.rotation,
                        I = S.rotationX,
                        A = S.rotationY,
                        L = S.scaleX,
                        O = S.scaleY,
                        M = S.scaleZ,
                        E = S.x,
                        D = S.y,
                        j = S.z,
                        R = S.svg,
                        F = S.perspective,
                        $ = S.force3D;
                    if (!((1 !== t && 0 !== t || "auto" !== $ || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && $ || j || F || A || I) || _t && R || !Pt) return void(P || S.skewX || R ? (P *= z,
                        T = S.skewX * z, C = 1e5, e = Math.cos(P) * L, n = Math.sin(P) * L, i = Math.sin(P - T) * -O, o = Math.cos(P - T) * O, T && "simple" === S.skewType && (w = Math.tan(T), w = Math.sqrt(1 + w * w), i *= w, o *= w, S.skewY && (e *= w, n *= w)), R && (E += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, D += S.yOrigin - (S.xOrigin * n + S.yOrigin * o) + S.yOffset, _t && (S.xPercent || S.yPercent) && (g = this.t.getBBox(), E += .01 * S.xPercent * g.width, D += .01 * S.yPercent * g.height), g = 1e-6, g > E && E > -g && (E = 0), g > D && D > -g && (D = 0)), b = (0 | e * C) / C + "," + (0 | n * C) / C + "," + (0 | i * C) / C + "," + (0 | o * C) / C + "," + E + "," + D + ")", R && _t ? this.t.setAttribute("transform", "matrix(" + b) : k[Ct] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + b) : k[Ct] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + L + ",0,0," + O + "," + E + "," + D + ")");
                    if (u && (g = 1e-4, g > L && L > -g && (L = M = 2e-5), g > O && O > -g && (O = M = 2e-5), !F || S.z || S.rotationX || S.rotationY || (F = 0)), P || S.skewX) P *= z, m = e = Math.cos(P), v = n = Math.sin(P), S.skewX && (P -= S.skewX * z, m = Math.cos(P), v = Math.sin(P), "simple" === S.skewType && (w = Math.tan(S.skewX * z), w = Math.sqrt(1 + w * w), m *= w, v *= w, S.skewY && (e *= w, n *= w))), i = -v, o = m;
                    else {
                        if (!(A || I || 1 !== M || F || R)) return void(k[Ct] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + E + "px," + D + "px," + j + "px)" + (1 !== L || 1 !== O ? " scale(" + L + "," + O + ")" : ""));
                        e = o = 1, i = n = 0 }
                    d = 1, a = s = r = l = c = p = 0, h = F ? -1 / F : 0, f = S.zOrigin, g = 1e-6, x = ",", _ = "0", P = A * z, P && (m = Math.cos(P), v = Math.sin(P), r = -v, c = h * -v, a = e * v, s = n * v, d = m, h *= m, e *= m, n *= m), P = I * z, P && (m = Math.cos(P), v = Math.sin(P), w = i * m + a * v, y = o * m + s * v, l = d * v, p = h * v, a = i * -v + a * m, s = o * -v + s * m, d *= m, h *= m, i = w, o = y), 1 !== M && (a *= M, s *= M, d *= M, h *= M), 1 !== O && (i *= O, o *= O, l *= O, p *= O), 1 !== L && (e *= L, n *= L, r *= L, c *= L), (f || R) && (f && (E += a * -f, D += s * -f, j += d * -f + f), R && (E += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, D += S.yOrigin - (S.xOrigin * n + S.yOrigin * o) + S.yOffset), g > E && E > -g && (E = _), g > D && D > -g && (D = _), g > j && j > -g && (j = 0)), b = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", b += (g > e && e > -g ? _ : e) + x + (g > n && n > -g ? _ : n) + x + (g > r && r > -g ? _ : r), b += x + (g > c && c > -g ? _ : c) + x + (g > i && i > -g ? _ : i) + x + (g > o && o > -g ? _ : o), I || A ? (b += x + (g > l && l > -g ? _ : l) + x + (g > p && p > -g ? _ : p) + x + (g > a && a > -g ? _ : a), b += x + (g > s && s > -g ? _ : s) + x + (g > d && d > -g ? _ : d) + x + (g > h && h > -g ? _ : h) + x) : b += ",0,0,0,0,1,0,", b += E + x + D + x + j + x + (F ? 1 + -j / F : 1) + ")", k[Ct] = b
                };
            d = It.prototype, d.x = d.y = d.z = d.skewX = d.skewY = d.rotation = d.rotationX = d.rotationY = d.zOrigin = d.xPercent = d.yPercent = d.xOffset = d.yOffset = 0, d.scaleX = d.scaleY = d.scaleZ = 1, bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function(t, e, i, a, o, r, l) {
                    if (a._lastParsedTransform === l) return o;
                    a._lastParsedTransform = l;
                    var d, c, p, h, u, f, g, m, v, w, y = t._gsTransform,
                        b = t.style,
                        x = 1e-6,
                        _ = Tt.length,
                        T = l,
                        C = {},
                        S = "transformOrigin";
                    if (l.display ? (h = G(t, "display"), b.display = "block", d = Rt(t, n, !0, l.parseTransform), b.display = h) : d = Rt(t, n, !0, l.parseTransform), a._transform = d, "string" == typeof T.transform && Ct) h = F.style, h[Ct] = T.transform, h.display = "block", h.position = "absolute", j.body.appendChild(F), c = Rt(F, null, !1), j.body.removeChild(F), c.perspective || (c.perspective = d.perspective), null != T.xPercent && (c.xPercent = ot(T.xPercent, d.xPercent)), null != T.yPercent && (c.yPercent = ot(T.yPercent, d.yPercent));
                    else if ("object" == typeof T) {
                        if (c = { scaleX: ot(null != T.scaleX ? T.scaleX : T.scale, d.scaleX), scaleY: ot(null != T.scaleY ? T.scaleY : T.scale, d.scaleY), scaleZ: ot(T.scaleZ, d.scaleZ), x: ot(T.x, d.x), y: ot(T.y, d.y), z: ot(T.z, d.z), xPercent: ot(T.xPercent, d.xPercent), yPercent: ot(T.yPercent, d.yPercent), perspective: ot(T.transformPerspective, d.perspective) }, m = T.directionalRotation, null != m)
                            if ("object" == typeof m)
                                for (h in m) T[h] = m[h];
                            else T.rotation = m;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (c.x = 0, c.xPercent = ot(T.x, d.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (c.y = 0, c.yPercent = ot(T.y, d.yPercent)), c.rotation = st("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : d.rotation, d.rotation, "rotation", C), Pt && (c.rotationX = st("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", C), c.rotationY = st("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", C)), c.skewX = null == T.skewX ? d.skewX : st(T.skewX, d.skewX), c.skewY = null == T.skewY ? d.skewY : st(T.skewY, d.skewY), (p = c.skewY - d.skewY) && (c.skewX += p, c.rotation += p) }
                    for (Pt && null != T.force3D && (d.force3D = T.force3D, g = !0), d.skewType = T.skewType || d.skewType || s.defaultSkewType, f = d.force3D || d.z || d.rotationX || d.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, f || null == T.scale || (c.scaleZ = 1); --_ > -1;) i = Tt[_], u = c[i] - d[i], (u > x || -x > u || null != T[i] || null != D[i]) && (g = !0, o = new gt(d, i, d[i], u, o), i in C && (o.e = C[i]), o.xs0 = 0, o.plugin = r, a._overwriteProps.push(o.n));
                    return u = T.transformOrigin, d.svg && (u || T.svgOrigin) && (v = d.xOffset, w = d.yOffset, zt(t, at(u), c, T.svgOrigin, T.smoothOrigin), o = mt(d, "xOrigin", (y ? d : c).xOrigin, c.xOrigin, o, S), o = mt(d, "yOrigin", (y ? d : c).yOrigin, c.yOrigin, o, S), (v !== d.xOffset || w !== d.yOffset) && (o = mt(d, "xOffset", y ? v : d.xOffset, d.xOffset, o, S), o = mt(d, "yOffset", y ? w : d.yOffset, d.yOffset, o, S)), u = _t ? null : "0px 0px"), (u || Pt && f && d.zOrigin) && (Ct ? (g = !0, i = kt, u = (u || G(t, i, n, !1, "50% 50%")) + "", o = new gt(b, i, 0, 0, o, -1, S), o.b = b[i], o.plugin = r, Pt ? (h = d.zOrigin, u = u.split(" "), d.zOrigin = (u.length > 2 && (0 === h || "0px" !== u[2]) ? parseFloat(u[2]) : h) || 0, o.xs0 = o.e = u[0] + " " + (u[1] || "50%") + " 0px", o = new gt(d, "zOrigin", 0, 0, o, -1, o.n), o.b = h, o.xs0 = o.e = d.zOrigin) : o.xs0 = o.e = u) : at(u + "", d)), g && (a._transformType = d.svg && _t || !f && 3 !== this._transformType ? 2 : 3), o }, prefix: !0 }), bt("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), bt("borderRadius", { defaultValue: "0px", parser: function(t, e, i, o, s) { e = this.format(e);
                    var r, l, d, c, p, h, u, f, g, m, v, w, y, b, x, _, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        C = t.style;
                    for (g = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), r = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = Y(T[l])), p = c = G(t, T[l], n, !1, "0px"), -1 !== p.indexOf(" ") && (c = p.split(" "), p = c[0], c = c[1]), h = d = r[l], u = parseFloat(p), w = p.substr((u + "").length), y = "=" === h.charAt(1), y ? (f = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), f *= parseFloat(h), v = h.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(h), v = h.substr((f + "").length)), "" === v && (v = a[i] || w), v !== w && (b = U(t, "borderLeft", u, w), x = U(t, "borderTop", u, w), "%" === v ? (p = 100 * (b / g) + "%", c = 100 * (x / m) + "%") : "em" === v ? (_ = U(t, "borderLeft", 1, "em"), p = b / _ + "em", c = x / _ + "em") : (p = b + "px", c = x + "px"), y && (h = parseFloat(p) + f + v, d = parseFloat(c) + f + v)), s = vt(C, T[l], p + " " + c, h + " " + d, !1, "0px", s);
                    return s }, prefix: !0, formatter: ht("0px 0px 0px 0px", !1, !0) }), bt("backgroundPosition", { defaultValue: "0 0", parser: function(t, e, i, a, o, s) {
                    var r, l, d, c, p, h, u = "background-position",
                        f = n || q(t, null),
                        m = this.format((f ? g ? f.getPropertyValue(u + "-x") + " " + f.getPropertyValue(u + "-y") : f.getPropertyValue(u) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        v = this.format(e);
                    if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && (h = G(t, "backgroundImage").replace(P, ""), h && "none" !== h)) {
                        for (r = m.split(" "), l = v.split(" "), $.setAttribute("src", h), d = 2; --d > -1;) m = r[d], c = -1 !== m.indexOf("%"), c !== (-1 !== l[d].indexOf("%")) && (p = 0 === d ? t.offsetWidth - $.width : t.offsetHeight - $.height, r[d] = c ? parseFloat(m) / 100 * p + "px" : 100 * (parseFloat(m) / p) + "%");
                        m = r.join(" ") }
                    return this.parseComplex(t.style, m, v, o, s) }, formatter: at }), bt("backgroundSize", { defaultValue: "0 0", formatter: at }), bt("perspective", { defaultValue: "0px", prefix: !0 }), bt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), bt("transformStyle", { prefix: !0 }), bt("backfaceVisibility", { prefix: !0 }), bt("userSelect", { prefix: !0 }), bt("margin", { parser: ut("marginTop,marginRight,marginBottom,marginLeft") }), bt("padding", { parser: ut("paddingTop,paddingRight,paddingBottom,paddingLeft") }), bt("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function(t, e, i, a, o, s) {
                    var r, l, d;
                    return 9 > g ? (l = t.currentStyle, d = 8 > g ? " " : ",", r = "rect(" + l.clipTop + d + l.clipRight + d + l.clipBottom + d + l.clipLeft + ")", e = this.format(e).split(",").join(d)) : (r = this.format(G(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, r, e, o, s) } }), bt("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), bt("autoRound,strictUnits", { parser: function(t, e, i, a, n) {
                    return n } }), bt("border", { defaultValue: "0px solid #000", parser: function(t, e, i, a, o, s) {
                    return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", n, !1, "0px") + " " + G(t, "borderTopStyle", n, !1, "solid") + " " + G(t, "borderTopColor", n, !1, "#000")), this.format(e), o, s) }, color: !0, formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(pt) || ["#000"])[0] } }), bt("borderWidth", { parser: ut("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), bt("float,cssFloat,styleFloat", { parser: function(t, e, i, a, n) {
                    var o = t.style,
                        s = "cssFloat" in o ? "cssFloat" : "styleFloat";
                    return new gt(o, s, 0, 0, n, -1, i, !1, 0, o[s], e) } });
            var Wt = function(t) {
                var e, i = this.t,
                    a = i.filter || G(this.data, "filter") || "",
                    n = 0 | this.s + this.c * t;
                100 === n && (-1 === a.indexOf("atrix(") && -1 === a.indexOf("radient(") && -1 === a.indexOf("oader(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = a.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = a = a || "alpha(opacity=" + n + ")"), -1 === a.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = a + " alpha(opacity=" + n + ")") : i.filter = a.replace(x, "opacity=" + n)) };
            bt("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function(t, e, i, a, o, s) {
                    var r = parseFloat(G(t, "opacity", n, !1, "1")),
                        l = t.style,
                        d = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + r), d && 1 === r && "hidden" === G(t, "visibility", n) && 0 !== e && (r = 0), H ? o = new gt(l, "opacity", r, e - r, o) : (o = new gt(l, "opacity", 100 * r, 100 * (e - r), o), o.xn1 = d ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Wt), d && (o = new gt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== r ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", a._overwriteProps.push(o.n), a._overwriteProps.push(i)), o } });
            var Bt = function(t, e) { e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e)) },
                Ht = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) { this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Bt(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e) };
            bt("className", { parser: function(t, e, a, o, s, r, l) {
                    var d, c, p, h, u, f = t.getAttribute("class") || "",
                        g = t.style.cssText;
                    if (s = o._classNamePT = new gt(t, a, 0, 0, s, 2), s.setRatio = Ht, s.pr = -11, i = !0, s.b = f, c = K(t, n), p = t._gsClassPT) {
                        for (h = {}, u = p.data; u;) h[u.p] = 1, u = u._next;
                        p.setRatio(1) }
                    return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), d = J(t, c, K(t), l, h), t.setAttribute("class", f), s.data = d.firstMPT, t.style.cssText = g, s = s.xfirst = o.parse(t, d.difs, s, r) } });
            var Nt = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, a, n, o, s = this.t.style,
                        r = l.transform.parse;
                    if ("all" === this.e) s.cssText = "", n = !0;
                    else
                        for (e = this.e.split(" ").join("").split(","), a = e.length; --a > -1;) i = e[a], l[i] && (l[i].parse === r ? n = !0 : i = "transformOrigin" === i ? kt : l[i].p), Bt(s, i);
                    n && (Bt(s, Ct), o = this.t._gsTransform, o && (o.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform)) } };
            for (bt("clearProps", { parser: function(t, e, a, n, o) {
                        return o = new gt(t, a, 0, 0, o, 2), o.setRatio = Nt, o.e = e, o.pr = -10, o.data = n._tween, i = !0, o } }), d = "bezier,throwProps,physicsProps,physics2D".split(","), wt = d.length; wt--;) xt(d[wt]);
            d = s.prototype, d._firstPT = d._lastParsedTransform = d._transform = null, d._onInitTween = function(t, e, r) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = r, this._vars = e, c = e.autoRound, i = !1, a = e.suffixMap || s.suffixMap, n = q(t, ""), o = this._overwriteProps;
                var d, u, g, m, v, w, y, b, x, T = t.style;
                if (p && "" === T.zIndex && (d = G(t, "zIndex", n), ("auto" === d || "" === d) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (m = T.cssText, d = K(t, n), T.cssText = m + ";" + e, d = J(t, d, K(t)).difs, !H && _.test(e) && (d.opacity = parseFloat(RegExp.$1)), e = d, T.cssText = m), this._firstPT = u = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                    for (x = 3 === this._transformType, Ct ? h && (p = !0, "" === T.zIndex && (y = G(t, "zIndex", n), ("auto" === y || "" === y) && this._addLazySet(T, "zIndex", 0)), f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : T.zoom = 1, g = u; g && g._next;) g = g._next;
                    b = new gt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, g), b.setRatio = Ct ? $t : Ft, b.data = this._transform || Rt(t, n, !0), b.tween = r, b.pr = -1, o.pop() }
                if (i) {
                    for (; u;) {
                        for (w = u._next, g = m; g && g.pr > u.pr;) g = g._next;
                        (u._prev = g ? g._prev : v) ? u._prev._next = u: m = u, (u._next = g) ? g._prev = u : v = u, u = w }
                    this._firstPT = m }
                return !0 }, d.parse = function(t, e, i, o) {
                var s, r, d, p, h, u, f, g, m, v, w = t.style;
                for (s in e) u = e[s], r = l[s], r ? i = r.parse(t, u, s, this, i, o, e) : (h = G(t, s, n) + "", m = "string" == typeof u, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || m && C.test(u) ? (m || (u = dt(u), u = (u.length > 3 ? "rgba(" : "rgb(") + u.join(",") + ")"), i = vt(w, s, h, u, !0, "transparent", i, 0, o)) : !m || -1 === u.indexOf(" ") && -1 === u.indexOf(",") ? (d = parseFloat(h), f = d || 0 === d ? h.substr((d + "").length) : "", ("" === h || "auto" === h) && ("width" === s || "height" === s ? (d = it(t, s, n), f = "px") : "left" === s || "top" === s ? (d = Z(t, s, n), f = "px") : (d = "opacity" !== s ? 0 : 1, f = "")), v = m && "=" === u.charAt(1), v ? (p = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), p *= parseFloat(u), g = u.replace(b, "")) : (p = parseFloat(u), g = m ? u.replace(b, "") : ""), "" === g && (g = s in a ? a[s] : f), u = p || 0 === p ? (v ? p + d : p) + g : e[s], f !== g && "" !== g && (p || 0 === p) && d && (d = U(t, s, d, f), "%" === g ? (d /= U(t, s, 100, "%") / 100, e.strictUnits !== !0 && (h = d + "%")) : "em" === g || "rem" === g ? d /= U(t, s, 1, g) : "px" !== g && (p = U(t, s, p, g), g = "px"), v && (p || 0 === p) && (u = p + d + g)), v && (p += d), !d && 0 !== d || !p && 0 !== p ? void 0 !== w[s] && (u || "NaN" != u + "" && null != u) ? (i = new gt(w, s, p || d || 0, 0, i, -1, s, !1, 0, h, u), i.xs0 = "none" !== u || "display" !== s && -1 === s.indexOf("Style") ? u : h) : Q("invalid " + s + " tween value: " + e[s]) : (i = new gt(w, s, d, p - d, i, 0, s, c !== !1 && ("px" === g || "zIndex" === s), 0, h, u), i.xs0 = g)) : i = vt(w, s, h, u, !0, null, i, 0, o)), o && i && !i.plugin && (i.plugin = o);
                return i }, d.setRatio = function(t) {
                var e, i, a, n = this._firstPT,
                    o = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; n;) {
                            if (e = n.c * t + n.s, n.r ? e = Math.round(e) : o > e && e > -o && (e = 0), n.type)
                                if (1 === n.type)
                                    if (a = n.l, 2 === a) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                    else if (3 === a) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                            else if (4 === a) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                            else if (5 === a) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                            else {
                                for (i = n.xs0 + e + n.xs1, a = 1; n.l > a; a++) i += n["xn" + a] + n["xs" + (a + 1)];
                                n.t[n.p] = i } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                            else n.t[n.p] = e + n.xs0;
                            n = n._next } else
                            for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                    else
                        for (; n;) {
                            if (2 !== n.type)
                                if (n.r && -1 !== n.type)
                                    if (e = Math.round(n.s + n.c), n.type) {
                                        if (1 === n.type) {
                                            for (a = n.l, i = n.xs0 + e + n.xs1, a = 1; n.l > a; a++) i += n["xn" + a] + n["xs" + (a + 1)];
                                            n.t[n.p] = i } } else n.t[n.p] = e + n.xs0;
                            else n.t[n.p] = n.e;
                            else n.setRatio(t);
                            n = n._next } }, d._enableTransforms = function(t) { this._transform = this._transform || Rt(this._target, n, !0), this._transformType = this._transform.svg && _t || !t && 3 !== this._transformType ? 2 : 3 };
            var Qt = function() { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) };
            d._addLazySet = function(t, e, i) {
                var a = this._firstPT = new gt(t, e, 0, 0, this._firstPT, 2);
                a.e = i, a.setRatio = Qt, a.data = this }, d._linkCSSP = function(t, e, i, a) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, a = !0), i ? i._next = t : a || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, d._kill = function(e) {
                var i, a, n, o = e;
                if (e.autoAlpha || e.alpha) { o = {};
                    for (a in e) o[a] = e[a];
                    o.opacity = 1, o.autoAlpha && (o.visibility = 1) }
                return e.className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), t.prototype._kill.call(this, o) };
            var Vt = function(t, e, i) {
                var a, n, o, s;
                if (t.slice)
                    for (n = t.length; --n > -1;) Vt(t[n], e, i);
                else
                    for (a = t.childNodes, n = a.length; --n > -1;) o = a[n], s = o.type, o.style && (e.push(K(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Vt(o, e, i) };
            return s.cascadeTo = function(t, i, a) {
                var n, o, s, r, l = e.to(t, i, a),
                    d = [l],
                    c = [],
                    p = [],
                    h = [],
                    u = e._internals.reservedProps;
                for (t = l._targets || l.target, Vt(t, c, h), l.render(i, !0, !0), Vt(t, p), l.render(0, !0, !0), l._enabled(!0), n = h.length; --n > -1;)
                    if (o = J(h[n], c[n], p[n]), o.firstMPT) { o = o.difs;
                        for (s in a) u[s] && (o[s] = a[s]);
                        r = {};
                        for (s in o) r[s] = c[n][s];
                        d.push(e.fromTo(h[n], i, r, o)) }
                return d }, t.activate([s]), s
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) { "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t] }; "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e()) }("CSSPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
! function(t) { "use strict";
    var e = t.GreenSockGlobals || t,
        i = function(t) {
            var i, a = t.split("."),
                n = e;
            for (i = 0; a.length > i; i++) n[a[i]] = n = n[a[i]] || {};
            return n },
        a = i("com.greensock.utils"),
        n = function(t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += n(t) } else if (3 === e || 4 === e) return t.nodeValue;
            return i },
        o = document,
        s = o.defaultView ? o.defaultView.getComputedStyle : function() {},
        r = /([A-Z])/g,
        l = function(t, e, i, a) {
            var n;
            return (i = i || s(t, null)) ? (t = i.getPropertyValue(e.replace(r, "-$1").toLowerCase()), n = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, n = i[e]), a ? n : parseInt(n, 10) || 0 },
        d = function(t) {
            return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0])) },
        c = function(t) {
            var e, i, a, n = [],
                o = t.length;
            for (e = 0; o > e; e++)
                if (i = t[e], d(i))
                    for (a = i.length, a = 0; i.length > a; a++) n.push(i[a]);
                else n.push(i);
            return n },
        p = ")eefec303079ad17405c",
        h = /(?:<br>|<br\/>|<br \/>)/gi,
        u = o.all && !o.addEventListener,
        f = "<div style='position:relative;display:inline-block;" + (u ? "*display:inline;*zoom:1;'" : "'"),
        g = function(t) { t = t || "";
            var e = -1 !== t.indexOf("++"),
                i = 1;
            return e && (t = t.split("++").join("")),
                function() {
                    return f + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">") } },
        m = a.SplitText = e.SplitText = function(t, e) {
            if ("string" == typeof t && (t = m.selector(t)), !t) throw "cannot split a null element.";
            this.elements = d(t) ? c(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e) },
        v = function(t, e, i) {
            var a = t.nodeType;
            if (1 === a || 9 === a || 11 === a)
                for (t = t.firstChild; t; t = t.nextSibling) v(t, e, i);
            else(3 === a || 4 === a) && (t.nodeValue = t.nodeValue.split(e).join(i)) },
        w = function(t, e) {
            for (var i = e.length; --i > -1;) t.push(e[i]) },
        y = function(t, e, i, a, r) { h.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(h, p));
            var d, c, u, f, m, y, b, x, _, T, C, S, k, P, I = n(t),
                A = e.type || e.split || "chars,words,lines",
                L = -1 !== A.indexOf("lines") ? [] : null,
                O = -1 !== A.indexOf("words"),
                M = -1 !== A.indexOf("chars"),
                z = "absolute" === e.position || e.absolute === !0,
                E = z ? "&#173; " : " ",
                D = -999,
                j = s(t),
                R = l(t, "paddingLeft", j),
                F = l(t, "borderBottomWidth", j) + l(t, "borderTopWidth", j),
                $ = l(t, "borderLeftWidth", j) + l(t, "borderRightWidth", j),
                W = l(t, "paddingTop", j) + l(t, "paddingBottom", j),
                B = l(t, "paddingLeft", j) + l(t, "paddingRight", j),
                H = l(t, "textAlign", j, !0),
                N = t.clientHeight,
                Q = t.clientWidth,
                V = "</div>",
                X = g(e.wordsClass),
                Y = g(e.charsClass),
                q = -1 !== (e.linesClass || "").indexOf("++"),
                G = e.linesClass,
                U = -1 !== I.indexOf("<"),
                Z = !0,
                K = [],
                J = [],
                tt = [];
            for (q && (G = G.split("++").join("")), U && (I = I.split("<").join("{{LT}}")), d = I.length, f = X(), m = 0; d > m; m++)
                if (b = I.charAt(m), ")" === b && I.substr(m, 20) === p) f += (Z ? V : "") + "<BR/>", Z = !1, m !== d - 20 && I.substr(m + 20, 20) !== p && (f += " " + X(), Z = !0), m += 19;
                else if (" " === b && " " !== I.charAt(m - 1) && m !== d - 1 && I.substr(m - 20, 20) !== p) {
                for (f += Z ? V : "", Z = !1;
                    " " === I.charAt(m + 1);) f += E, m++;
                (")" !== I.charAt(m + 1) || I.substr(m + 1, 20) !== p) && (f += E + X(), Z = !0) } else "{" === b && "{{LT}}" === I.substr(m, 6) ? (f += M ? Y() + "{{LT}}</div>" : "{{LT}}", m += 5) : f += M && " " !== b ? Y() + b + "</div>" : b;
            for (t.innerHTML = f + (Z ? V : ""), U && v(t, "{{LT}}", "<"), y = t.getElementsByTagName("*"), d = y.length, x = [], m = 0; d > m; m++) x[m] = y[m];
            if (L || z)
                for (m = 0; d > m; m++) _ = x[m], u = _.parentNode === t, (u || z || M && !O) && (T = _.offsetTop, L && u && T !== D && "BR" !== _.nodeName && (c = [], L.push(c), D = T), z && (_._x = _.offsetLeft, _._y = T, _._w = _.offsetWidth, _._h = _.offsetHeight), L && (O !== u && M || (c.push(_), _._x -= R), u && m && (x[m - 1]._wordEnd = !0), "BR" === _.nodeName && _.nextSibling && "BR" === _.nextSibling.nodeName && L.push([])));
            for (m = 0; d > m; m++) _ = x[m], u = _.parentNode === t, "BR" !== _.nodeName ? (z && (S = _.style, O || u || (_._x += _.parentNode._x, _._y += _.parentNode._y), S.left = _._x + "px", S.top = _._y + "px", S.position = "absolute", S.display = "block", S.width = _._w + 1 + "px", S.height = _._h + "px"), O ? u && "" !== _.innerHTML ? J.push(_) : M && K.push(_) : u ? (t.removeChild(_), x.splice(m--, 1), d--) : !u && M && (T = !L && !z && _.nextSibling, t.appendChild(_), T || t.appendChild(o.createTextNode(" ")), K.push(_))) : L || z ? (t.removeChild(_), x.splice(m--, 1), d--) : O || t.appendChild(_);
            if (L) {
                for (z && (C = o.createElement("div"), t.appendChild(C), k = C.offsetWidth + "px", T = C.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(C)), S = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (P = !z || !O && !M, m = 0; L.length > m; m++) {
                    for (c = L[m], C = o.createElement("div"), C.style.cssText = "display:block;text-align:" + H + ";position:" + (z ? "absolute;" : "relative;"), G && (C.className = G + (q ? m + 1 : "")), tt.push(C), d = c.length, y = 0; d > y; y++) "BR" !== c[y].nodeName && (_ = c[y], C.appendChild(_), P && (_._wordEnd || O) && C.appendChild(o.createTextNode(" ")), z && (0 === y && (C.style.top = _._y + "px", C.style.left = R + T + "px"), _.style.top = "0px", T && (_.style.left = _._x - T + "px")));
                    0 === d && (C.innerHTML = "&nbsp;"), O || M || (C.innerHTML = n(C).split(String.fromCharCode(160)).join(" ")), z && (C.style.width = k, C.style.height = _._h + "px"), t.appendChild(C) }
                t.style.cssText = S }
            z && (N > t.clientHeight && (t.style.height = N - W + "px", N > t.clientHeight && (t.style.height = N + F + "px")), Q > t.clientWidth && (t.style.width = Q - B + "px", Q > t.clientWidth && (t.style.width = Q + $ + "px"))), w(i, K), w(a, J), w(r, tt) },
        b = m.prototype;
    b.split = function(t) { this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e = this.elements.length; --e > -1;) this._originals[e] = this.elements[e].innerHTML, y(this.elements[e], this.vars, this.chars, this.words, this.lines);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this }, b.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; --t > -1;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this }, m.selector = t.$ || t.jQuery || function(e) {
        var i = t.$ || t.jQuery;
        return i ? (m.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) }, m.version = "0.3.4" }(_gsScope),
function(t) { "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t] }; "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (module.exports = e()) }("SplitText");
try { window.GreenSockGlobals = null, window._gsQueue = null, window._gsDefine = null, delete window.GreenSockGlobals, delete window._gsQueue, delete window._gsDefine } catch (e) {}
try { window.GreenSockGlobals = oldgs, window._gsQueue = oldgs_queue } catch (e) {}
if (1 == window.tplogs) try { console.groupEnd() } catch (e) {}! function(t, e) { t.waitForImages = { hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"] }, t.expr[":"].uncached = function(e) {
            var i = document.createElement("img");
            return i.src = e.src, t(e).is('img[src!=""]') && !i.complete }, t.fn.waitForImages = function(e, i, a) {
            if (t.isPlainObject(arguments[0]) && (i = e.each, a = e.waitForAll, e = e.finished), e = e || t.noop, i = i || t.noop, a = !!a, !t.isFunction(e) || !t.isFunction(i)) throw new TypeError("An invalid callback was supplied.");
            return this.each(function() {
                var n = t(this),
                    o = [];
                if (a) {
                    var s = t.waitForImages.hasImageProperties || [],
                        r = /url\((['"]?)(.*?)\1\)/g;
                    n.find("*").each(function() {
                        var e = t(this);
                        e.is("img:uncached") && o.push({ src: e.attr("src"), element: e[0] }), t.each(s, function(t, i) {
                            var a = e.css(i);
                            if (!a) return !0;
                            for (var n; n = r.exec(a);) o.push({ src: n[2], element: e[0] }) }) }) } else n.find("img:uncached").each(function() { o.push({ src: this.src, element: this }) });
                var l = o.length,
                    d = 0;
                0 == l && e.call(n[0]), t.each(o, function(a, o) {
                    var s = new Image;
                    t(s).bind("load error", function(t) {
                        return d++, i.call(o.element, d, l, "load" == t.type), d == l ? (e.call(n[0]), !1) : void 0 }), s.src = o.src }) }) } }(jQuery), ! function(t, e) {
        "use strict";
        t.fn.extend({
            revolution: function(a) {
                var n = { delay: 9e3, responsiveLevels: 4064, visibilityLevels: [2048, 1024, 778, 480], gridwidth: 960, gridheight: 500, minHeight: 0, autoHeight: "off", sliderType: "standard", sliderLayout: "auto", fullScreenAutoWidth: "off", fullScreenAlignForce: "off", fullScreenOffsetContainer: "", fullScreenOffset: "0", hideCaptionAtLimit: 0, hideAllCaptionAtLimit: 0, hideSliderAtLimit: 0, disableProgressBar: "off", stopAtSlide: -1, stopAfterLoops: -1, shadow: 0, dottedOverlay: "none", startDelay: 0, lazyType: "smart", spinner: "spinner0", shuffle: "off", viewPort: { enable: !1, outof: "wait", visible_area: "60%" }, fallbacks: { isJoomla: !1, panZoomDisableOnMobile: "off", simplifyAll: "on", nextSlideOnWindowFocus: "off", disableFocusListener: !0 }, parallax: { type: "off", levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85], origo: "enterpoint", speed: 400, bgparallax: "on", opacity: "on", disable_onmobile: "off", ddd_shadow: "on", ddd_bgfreeze: "off", ddd_overflow: "visible", ddd_layer_overflow: "visible", ddd_z_correction: 65, ddd_path: "mouse" }, carousel: { horizontal_align: "center", vertical_align: "center", infinity: "on", space: 0, maxVisibleItems: 3, stretch: "off", fadeout: "on", maxRotation: 0, minScale: 0, vary_fade: "off", vary_rotation: "on", vary_scale: "off", border_radius: "0px", padding_top: 0, padding_bottom: 0 }, navigation: { keyboardNavigation: "on", keyboard_direction: "horizontal", mouseScrollNavigation: "off", onHoverStop: "on", touch: { touchenabled: "off", swipe_treshold: 75, swipe_min_touches: 1, drag_block_vertical: !1, swipe_direction: "horizontal" }, arrows: { style: "", enable: !1, hide_onmobile: !1, hide_onleave: !0, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, tmp: "", left: { h_align: "left", v_align: "center", h_offset: 20, v_offset: 0 }, right: { h_align: "right", v_align: "center", h_offset: 20, v_offset: 0 } }, bullets: { style: "", enable: !1, hide_onmobile: !1, hide_onleave: !0, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, direction: "horizontal", h_align: "left", v_align: "center", space: 0, h_offset: 20, v_offset: 0, tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>' }, thumbnails: { style: "", enable: !1, width: 100, height: 50, min_width: 100, wrapper_padding: 2, wrapper_color: "#f5f5f5", wrapper_opacity: 1, tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>', visibleAmount: 5, hide_onmobile: !1, hide_onleave: !0, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, direction: "horizontal", span: !1, position: "inner", space: 2, h_align: "left", v_align: "center", h_offset: 20, v_offset: 0 }, tabs: { style: "", enable: !1, width: 100, min_width: 100, height: 50, wrapper_padding: 10, wrapper_color: "#f5f5f5", wrapper_opacity: 1, tmp: '<span class="tp-tab-image"></span>', visibleAmount: 5, hide_onmobile: !1, hide_onleave: !0, hide_delay: 200, hide_delay_mobile: 1200, hide_under: 0, hide_over: 9999, direction: "horizontal", span: !1, space: 0, position: "inner", h_align: "left", v_align: "center", h_offset: 20, v_offset: 0 } }, extensions: "extensions/", extensions_suffix: ".min.js", debugMode: !1 };
                return a = t.extend(!0, {}, n, a), this.each(function() {
                    var n = t(this); "hero" == a.sliderType && n.find(">ul>li").each(function(e) { e > 0 && t(this).remove() }), a.jsFileLocation = a.jsFileLocation || d("themepunch.revolution.min.js"), a.jsFileLocation = a.jsFileLocation + a.extensions, a.scriptsneeded = r(a, n), a.curWinRange = 0, a.navigation != e && a.navigation.touch != e && (a.navigation.touch.swipe_min_touches = a.navigation.touch.swipe_min_touches > 5 ? 1 : a.navigation.touch.swipe_min_touches), t(this).on("scriptsloaded", function() {
                        return a.modulesfailing ? (n.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + a.errorm + "</div>").show(), !1) : (i.migration != e && (a = i.migration(n, a)), punchgs.force3D = !0, "on" !== a.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), p(n, a), void u(n, a)) }), l(n, a.scriptsneeded) }) },
            revremoveslide: function(a) {
                return this.each(function() {
                    var s = t(this);
                    if (s != e && s.length > 0 && t("body").find("#" + s.attr("id")).length > 0) {
                        var r = s.parent().find(".tp-bannertimer"),
                            l = r.data("opt");
                        if (l && l.li.length > 0 && (a > 0 || a <= l.li.length)) {
                            var d = t(l.li[a]),
                                c = d.data("index"),
                                p = !1;
                            l.slideamount = l.slideamount - 1, o(".tp-bullet", c, l), o(".tp-tab", c, l), o(".tp-thumb", c, l), d.hasClass("active-revslide") && (p = !0), d.remove(), l.li = n(l.li, a), l.carousel && l.carousel.slides && (l.carousel.slides = n(l.carousel.slides, a)), l.thumbs = n(l.thumbs, a), i.updateNavIndexes && i.updateNavIndexes(l), p && s.revnext() } } }) },
            revaddcallback: function(i) {
                return this.each(function() {
                    var a = t(this);
                    if (a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0) {
                        var n = a.parent().find(".tp-bannertimer"),
                            o = n.data("opt");
                        o.callBackArray === e && (o.callBackArray = new Array), o.callBackArray.push(i) } }) },
            revgetparallaxproc: function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    return n.scrollproc } },
            revdebugmode: function() {
                return this.each(function() {
                    var i = t(this);
                    if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                        var a = i.parent().find(".tp-bannertimer"),
                            n = a.data("opt");
                        n.debugMode = !0, w(i, n) } }) },
            revscroll: function(i) {
                return this.each(function() {
                    var a = t(this);
                    a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0 && t("body,html").animate({ scrollTop: a.offset().top + a.height() - i + "px" }, { duration: 400 }) }) },
            revredraw: function(i) {
                return this.each(function() {
                    var i = t(this);
                    if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                        var a = i.parent().find(".tp-bannertimer"),
                            n = a.data("opt");
                        w(i, n) } }) },
            revkill: function(a) {
                var n = this,
                    o = t(this);
                if (punchgs.TweenLite.killDelayedCallsTo(i.showHideNavElements), i.endMoveCaption && punchgs.TweenLite.killDelayedCallsTo(i.endMoveCaption), o != e && o.length > 0 && t("body").find("#" + o.attr("id")).length > 0) { o.data("conthover", 1), o.data("conthover-changed", 1), o.trigger("revolution.slide.onpause");
                    var s = o.parent().find(".tp-bannertimer"),
                        r = s.data("opt");
                    r.tonpause = !0, o.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(o.find("*"), !1), punchgs.TweenLite.killTweensOf(o, !1), o.unbind("hover, mouseover, mouseenter,mouseleave, resize");
                    var l = "resize.revslider-" + o.attr("id");
                    t(window).off(l), o.find("*").each(function() {
                        var i = t(this);
                        i.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), i.off("on, hover, mouseenter,mouseleave,mouseover, resize"), i.data("mySplitText", null), i.data("ctl", null), i.data("tween") != e && i.data("tween").kill(), i.data("kenburn") != e && i.data("kenburn").kill(), i.data("timeline_out") != e && i.data("timeline_out").kill(), i.data("timeline") != e && i.data("timeline").kill(), i.remove(), i.empty(), i = null }), punchgs.TweenLite.killTweensOf(o.find("*"), !1), punchgs.TweenLite.killTweensOf(o, !1), s.remove();
                    try { o.closest(".forcefullwidth_wrapper_tp_banner").remove() } catch (d) {}
                    try { o.closest(".rev_slider_wrapper").remove() } catch (d) {}
                    try { o.remove() } catch (d) {}
                    return o.empty(), o.html(), o = null, r = null, delete n.c, delete n.opt, !0 }
                return !1 },
            revpause: function() {
                return this.each(function() {
                    var i = t(this);
                    if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                        i.data("conthover", 1),
                            i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause");
                        var a = i.parent().find(".tp-bannertimer"),
                            n = a.data("opt");
                        n.tonpause = !0, i.trigger("stoptimer")
                    }
                })
            },
            revresume: function() {
                return this.each(function() {
                    var i = t(this);
                    if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) { i.data("conthover", 0), i.data("conthover-changed", 1), i.trigger("revolution.slide.onresume");
                        var a = i.parent().find(".tp-bannertimer"),
                            n = a.data("opt");
                        n.tonpause = !1, i.trigger("starttimer") } }) },
            revnext: function() {
                return this.each(function() {
                    var a = t(this);
                    if (a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0) {
                        var n = a.parent().find(".tp-bannertimer"),
                            o = n.data("opt");
                        i.callingNewSlide(o, a, 1) } }) },
            revprev: function() {
                return this.each(function() {
                    var a = t(this);
                    if (a != e && a.length > 0 && t("body").find("#" + a.attr("id")).length > 0) {
                        var n = a.parent().find(".tp-bannertimer"),
                            o = n.data("opt");
                        i.callingNewSlide(o, a, -1) } }) },
            revmaxslide: function() {
                return t(this).find(".tp-revslider-mainul >li").length },
            revcurrentslide: function() {
                var i = t(this);
                if (i != e && i.length > 0 && t("body").find("#" + i.attr("id")).length > 0) {
                    var a = i.parent().find(".tp-bannertimer"),
                        n = a.data("opt");
                    return parseInt(n.act, 0) + 1 } },
            revlastslide: function() {
                return t(this).find(".tp-revslider-mainul >li").length },
            revshowslide: function(a) {
                return this.each(function() {
                    var n = t(this);
                    if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
                        var o = n.parent().find(".tp-bannertimer"),
                            s = o.data("opt");
                        i.callingNewSlide(s, n, "to" + (a - 1)) } }) },
            revcallslidewithid: function(a) {
                return this.each(function() {
                    var n = t(this);
                    if (n != e && n.length > 0 && t("body").find("#" + n.attr("id")).length > 0) {
                        var o = n.parent().find(".tp-bannertimer"),
                            s = o.data("opt");
                        i.callingNewSlide(s, n, a) } }) }
        });
        var i = t.fn.revolution;
        t.extend(!0, i, { simp: function(t, e, i) {
                var a = Math.abs(t) - Math.floor(Math.abs(t / e)) * e;
                return i ? a : 0 > t ? -1 * a : a }, iOSVersion: function() {
                var t = !1;
                return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (t = !0) : t = !1, t }, isIE: function(e, i) {
                var a = t('<div style="display:none;"/>').appendTo(t("body"));
                a.html("<!--[if " + (i || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]-->");
                var n = a.find("a").length;
                return a.remove(), n }, is_mobile: function() {
                var t = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", , "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
                    e = !1;
                for (var i in t) navigator.userAgent.split(t[i]).length > 1 && (e = !0);
                return e }, callBackHandling: function(e, i, a) {
                try { e.callBackArray && t.each(e.callBackArray, function(t, e) { e && e.inmodule && e.inmodule === i && e.atposition && e.atposition === a && e.callback && e.callback.call() }) } catch (n) { console.log("Call Back Failed") } }, get_browser: function() {
                var t, e = navigator.appName,
                    i = navigator.userAgent,
                    a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                return a && null != (t = i.match(/version\/([\.\d]+)/i)) && (a[2] = t[1]), a = a ? [a[1], a[2]] : [e, navigator.appVersion, "-?"], a[0] }, get_browser_version: function() {
                var t, e = navigator.appName,
                    i = navigator.userAgent,
                    a = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
                return a && null != (t = i.match(/version\/([\.\d]+)/i)) && (a[2] = t[1]), a = a ? [a[1], a[2]] : [e, navigator.appVersion, "-?"], a[1] }, getHorizontalOffset: function(t, e) {
                var i = h(t, ".outer-left"),
                    a = h(t, ".outer-right");
                switch (e) {
                    case "left":
                        return i;
                    case "right":
                        return a;
                    case "both":
                        return i + a } }, callingNewSlide: function(e, i, a) {
                var n = i.find(".next-revslide").length > 0 ? i.find(".next-revslide").index() : i.find(".processing-revslide").length > 0 ? i.find(".processing-revslide").index() : i.find(".active-revslide").index(),
                    o = 0;
                i.find(".next-revslide").removeClass("next-revslide"), a && t.isNumeric(a) || a.match(/to/g) ? (1 === a || -1 === a ? (o = n + a, o = 0 > o ? e.slideamount - 1 : o >= e.slideamount ? 0 : o) : (a = t.isNumeric(a) ? a : parseInt(a.split("to")[1], 0), o = 0 > a ? 0 : a > e.slideamount - 1 ? e.slideamount - 1 : a), i.find(".tp-revslider-slidesli:eq(" + o + ")").addClass("next-revslide")) : a && i.find(".tp-revslider-slidesli").each(function() {
                    var e = t(this);
                    e.data("index") === a && e.addClass("next-revslide") }), o = i.find(".next-revslide").index(), i.trigger("revolution.nextslide.waiting"), o !== n && -1 != o ? L(i, e) : i.find(".next-revslide").removeClass("next-revslide") }, slotSize: function(i, a) { a.slotw = Math.ceil(a.width / a.slots), "fullscreen" == a.sliderLayout ? a.sloth = Math.ceil(t(window).height() / a.slots) : a.sloth = Math.ceil(a.height / a.slots), "on" == a.autoHeight && i !== e && "" !== i && (a.sloth = Math.ceil(i.height() / a.slots)) }, setSize: function(i) {
                var a = (i.top_outer || 0) + (i.bottom_outer || 0),
                    n = parseInt(i.carousel.padding_top || 0, 0),
                    o = parseInt(i.carousel.padding_bottom || 0, 0),
                    s = i.gridheight[i.curWinRange];
                if (s = s < i.minHeight ? i.minHeight : s, "fullwidth" == i.sliderLayout && "off" == i.autoHeight && punchgs.TweenLite.set(i.c, { maxHeight: s + "px" }), i.c.css({ marginTop: n, marginBottom: o }), i.width = i.ul.width(), i.height = i.ul.height(), y(i), i.height = Math.round(i.gridheight[i.curWinRange] * (i.width / i.gridwidth[i.curWinRange])), i.height > i.gridheight[i.curWinRange] && "on" != i.autoHeight && (i.height = i.gridheight[i.curWinRange]), "fullscreen" == i.sliderLayout || i.infullscreenmode) { i.height = i.bw * i.gridheight[i.curWinRange];
                    var r = (i.c.parent().width(), t(window).height());
                    if (i.fullScreenOffsetContainer != e) {
                        try {
                            var l = i.fullScreenOffsetContainer.split(",");
                            l && t.each(l, function(e, i) { r = t(i).length > 0 ? r - t(i).outerHeight(!0) : r }) } catch (d) {}
                        try { i.fullScreenOffset.split("%").length > 1 && i.fullScreenOffset != e && i.fullScreenOffset.length > 0 ? r -= t(window).height() * parseInt(i.fullScreenOffset, 0) / 100 : i.fullScreenOffset != e && i.fullScreenOffset.length > 0 && (r -= parseInt(i.fullScreenOffset, 0)) } catch (d) {} }
                    r = r < i.minHeight ? i.minHeight : r, r -= a, i.c.parent().height(r), i.c.closest(".rev_slider_wrapper").height(r), i.c.css({ height: "100%" }), i.height = r, i.minHeight != e && i.height < i.minHeight && (i.height = i.minHeight) } else i.minHeight != e && i.height < i.minHeight && (i.height = i.minHeight), i.c.height(i.height);
                var c = { height: n + o + a + i.height };
                i.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(c), i.c.closest(".rev_slider_wrapper").css(c), y(i) }, enterInViewPort: function(a) { a.waitForCountDown && (E(a.c, a), a.waitForCountDown = !1), a.waitForFirstSlide && (L(a.c, a), a.waitForFirstSlide = !1), ("playing" == a.sliderlaststatus || a.sliderlaststatus == e) && a.c.trigger("starttimer"), a.lastplayedvideos != e && a.lastplayedvideos.length > 0 && t.each(a.lastplayedvideos, function(t, e) { i.playVideo(e, a) }) }, leaveViewPort: function(a) { a.sliderlaststatus = a.sliderstatus, a.c.trigger("stoptimer"), a.playingvideos != e && a.playingvideos.length > 0 && (a.lastplayedvideos = t.extend(!0, [], a.playingvideos), a.playingvideos && t.each(a.playingvideos, function(t, e) { i.stopVideo && i.stopVideo(e, a) })) }, unToggleState: function(i) { i != e && i.length > 0 && t.each(i, function(t, e) { e.removeClass("rs-toggle-content-active") }) }, toggleState: function(i) { i != e && i.length > 0 && t.each(i, function(t, e) { e.addClass("rs-toggle-content-active") }) }, lastToggleState: function(i) {
                var a = 0;
                return i != e && i.length > 0 && t.each(i, function(t, e) { a = e.hasClass("rs-toggle-content-active") }), a } });
        var a = i.is_mobile(),
            n = function(e, i) {
                var a = [];
                return t.each(e, function(t, e) { t != i && a.push(e) }), a },
            o = function(e, i, a) { a.c.find(e).each(function() {
                    var e = t(this);
                    e.data("liref") === i && e.remove() }) },
            s = function(i, a) {
                return t("body").data(i) ? !1 : a.filesystem ? (a.errorm === e && (a.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), a.errorm = a.errorm + '<br>&lt;script type="text/javascript" src="' + a.jsFileLocation + i + a.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(a.jsFileLocation + i + a.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), a.modulesfailing = !0, !1) : (t.ajax({ url: a.jsFileLocation + i + a.extensions_suffix, dataType: "script", cache: !0, error: function(t) { console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + i + a.extensions_suffix + " on Path:" + a.jsFileLocation), console.info(t) } }), void t("body").data(i, !0)) },
            r = function(a, n) {
                var o = new Object,
                    r = a.navigation;
                return o.kenburns = !1, o.parallax = !1, o.carousel = !1, o.navigation = !1, o.videos = !1, o.actions = !1, o.layeranim = !1, o.migration = !1, n.data("version") && n.data("version").toString().match(/5./gi) ? (n.find("img").each(function() { "on" == t(this).data("kenburns") && (o.kenburns = !0) }), ("carousel" == a.sliderType || "on" == r.keyboardNavigation || "on" == r.mouseScrollNavigation || "on" == r.touch.touchenabled || r.arrows.enable || r.bullets.enable || r.thumbnails.enable || r.tabs.enable) && (o.navigation = !0), n.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function() {
                    var i = t(this);
                    (i.data("ytid") != e || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (o.videos = !0), (i.data("vimeoid") != e || i.find("iframe").length > 0 && i.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (o.videos = !0), i.data("actions") !== e && (o.actions = !0), o.layeranim = !0 }), n.find("li").each(function() { t(this).data("link") && t(this).data("link") != e && (o.layeranim = !0, o.actions = !0) }), !o.videos && (n.find(".rs-background-video-layer").length > 0 || n.find(".tp-videolayer").length > 0 || n.find("iframe").length > 0 || n.find("video").length > 0) && (o.videos = !0), "carousel" == a.sliderType && (o.carousel = !0), ("off" !== a.parallax.type || a.viewPort.enable || "true" == a.viewPort.enable) && (o.parallax = !0)) : (o.kenburns = !0, o.parallax = !0, o.carousel = !1, o.navigation = !0, o.videos = !0, o.actions = !0, o.layeranim = !0, o.migration = !0), "hero" == a.sliderType && (o.carousel = !1, o.navigation = !1), window.location.href.match(/file:/gi) && (o.filesystem = !0, a.filesystem = !0), o.videos && "undefined" == typeof i.isVideoPlaying && s("revolution.extension.video", a), o.carousel && "undefined" == typeof i.prepareCarousel && s("revolution.extension.carousel", a), o.carousel || "undefined" != typeof i.animateSlide || s("revolution.extension.slideanims", a), o.actions && "undefined" == typeof i.checkActions && s("revolution.extension.actions", a), o.layeranim && "undefined" == typeof i.handleStaticLayers && s("revolution.extension.layeranimation", a), o.kenburns && "undefined" == typeof i.stopKenBurn && s("revolution.extension.kenburn", a), o.navigation && "undefined" == typeof i.createNavigation && s("revolution.extension.navigation", a), o.migration && "undefined" == typeof i.migration && s("revolution.extension.migration", a), o.parallax && "undefined" == typeof i.checkForParallax && s("revolution.extension.parallax", a), o },
            l = function(t, e) { e.filesystem || "undefined" != typeof punchgs && (!e.kenburns || e.kenburns && "undefined" != typeof i.stopKenBurn) && (!e.navigation || e.navigation && "undefined" != typeof i.createNavigation) && (!e.carousel || e.carousel && "undefined" != typeof i.prepareCarousel) && (!e.videos || e.videos && "undefined" != typeof i.resetVideo) && (!e.actions || e.actions && "undefined" != typeof i.checkActions) && (!e.layeranim || e.layeranim && "undefined" != typeof i.handleStaticLayers) && (!e.migration || e.migration && "undefined" != typeof i.migration) && (!e.parallax || e.parallax && "undefined" != typeof i.checkForParallax) && (e.carousel || !e.carousel && "undefined" != typeof i.animateSlide) ? t.trigger("scriptsloaded") : setTimeout(function() { l(t, e) }, 50) },
            d = function(e) {
                var i = new RegExp("themepunch.revolution.min.js", "gi"),
                    a = "";
                return t("script").each(function() {
                    var e = t(this).attr("src");
                    e && e.match(i) && (a = e) }), a = a.replace("jquery.themepunch.revolution.min.js", ""), a = a.replace("jquery.themepunch.revolution.js", ""), a = a.split("?")[0] },
            c = function(e, i) {
                var a = 9999,
                    n = 0,
                    o = 0,
                    s = 0,
                    r = t(window).width(),
                    l = i && 9999 == e.responsiveLevels ? e.visibilityLevels : e.responsiveLevels;
                l && l.length && t.each(l, function(t, e) { e > r && (0 == n || n > e) && (a = e, s = t, n = e), r > e && e > n && (n = e, o = t) }), a > n && (s = o), i ? e.forcedWinRange = s : e.curWinRange = s },
            p = function(t, e) { e.carousel.maxVisibleItems = e.carousel.maxVisibleItems < 1 ? 999 : e.carousel.maxVisibleItems, e.carousel.vertical_align = "top" === e.carousel.vertical_align ? "0%" : "bottom" === e.carousel.vertical_align ? "100%" : "50%" },
            h = function(e, i) {
                var a = 0;
                return e.find(i).each(function() {
                    var e = t(this);!e.hasClass("tp-forcenotvisible") && a < e.outerWidth() && (a = e.outerWidth()) }), a },
            u = function(n, o) {
                if (n == e) return !1;
                if (n.data("aimg") != e && ("enabled" == n.data("aie8") && i.isIE(8) || "enabled" == n.data("amobile") && a) && n.html('<img class="tp-slider-alternative-image" src="' + n.data("aimg") + '">'), n.find(">ul").addClass("tp-revslider-mainul"), o.c = n, o.ul = n.find(".tp-revslider-mainul"), o.ul.find(">li").each(function(e) {
                        var i = t(this); "on" == i.data("hideslideonmobile") && a && i.remove() }), o.cid = n.attr("id"), o.ul.css({ visibility: "visible" }), o.slideamount = o.ul.find(">li").length, o.slayers = n.find(".tp-static-layers"), o.ul.find(">li").each(function(e) { t(this).data("originalindex", e) }), "on" == o.shuffle) {
                    var s = new Object,
                        r = o.ul.find(">li:first-child");
                    s.fstransition = r.data("fstransition"), s.fsmasterspeed = r.data("fsmasterspeed"), s.fsslotamount = r.data("fsslotamount");
                    for (var l = 0; l < o.slideamount; l++) {
                        var d = Math.round(Math.random() * o.slideamount);
                        o.ul.find(">li:eq(" + d + ")").prependTo(o.ul) }
                    var p = o.ul.find(">li:first-child");
                    p.data("fstransition", s.fstransition), p.data("fsmasterspeed", s.fsmasterspeed), p.data("fsslotamount", s.fsslotamount), o.li = o.ul.find(">li") }
                if (o.li = o.ul.find(">li"), o.thumbs = new Array, o.slots = 4, o.act = -1, o.firststart = 1, o.loadqueue = new Array, o.syncload = 0, o.conw = n.width(), o.conh = n.height(), o.responsiveLevels.length > 1 ? o.responsiveLevels[0] = 9999 : o.responsiveLevels = 9999, t.each(o.li, function(i, a) {
                        var a = t(a),
                            n = a.find(".rev-slidebg") || a.find("img").first(),
                            s = 0;
                        a.addClass("tp-revslider-slidesli"), a.data("index") === e && a.data("index", "rs-" + Math.round(999999 * Math.random()));
                        var r = new Object;
                        r.params = new Array, r.id = a.data("index"), r.src = a.data("thumb") !== e ? a.data("thumb") : n.data("lazyload") !== e ? n.data("lazyload") : n.attr("src"), a.data("title") !== e && r.params.push({ from: RegExp("\\{\\{title\\}\\}", "g"), to: a.data("title") }), a.data("description") !== e && r.params.push({ from: RegExp("\\{\\{description\\}\\}", "g"), to: a.data("description") });
                        for (var s = 1; 10 >= s; s++) a.data("param" + s) !== e && r.params.push({ from: RegExp("\\{\\{param" + s + "\\}\\}", "g"), to: a.data("param" + s) });
                        if (o.thumbs.push(r), a.data("origindex", a.index()), a.data("link") != e) {
                            var l = a.data("link"),
                                d = a.data("target") || "_self",
                                c = "back" === a.data("slideindex") ? 0 : 60,
                                p = a.data("linktoslide"),
                                h = p;
                            p != e && "next" != p && "prev" != p && o.li.each(function() {
                                var e = t(this);
                                e.data("origindex") + 1 == h && (p = e.data("index")) }), "slide" != l && (p = "no");
                            var u = '<div class="tp-caption sft slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + c + ';" data-x="center" data-y="center" ',
                                f = "scroll_under" === p ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === p ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === p ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + p + '","delay":"0.2"}]';
                            u = "no" == p ? u + ' data-start="0">' : u + "data-actions='" + f + '\' data-start="0">', u += '<a style="width:100%;height:100%;display:block"', u = "slide" != l ? u + ' target="' + d + '" href="' + l + '"' : u, u += '><span style="width:100%;height:100%;display:block"></span></a></div>', a.append(u) } }), o.rle = o.responsiveLevels.length || 1, o.gridwidth = f(o.gridwidth, o.rle), o.gridheight = f(o.gridheight, o.rle), "on" == o.simplifyAll && (i.isIE(8) || i.iOSVersion()) && (n.find(".tp-caption").each(function() {
                        var e = t(this);
                        e.removeClass("customin customout").addClass("fadein fadeout"), e.data("splitin", ""), e.data("speed", 400) }), o.li.each(function() {
                        var e = t(this);
                        e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1);
                        var i = e.find(".rev-slidebg") || e.find(">img").first();
                        i.data("kenburns", "off") })), o.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), o.autoHeight = "fullscreen" == o.sliderLayout ? "on" : o.autoHeight, "fullwidth" == o.sliderLayout && "off" == o.autoHeight && n.css({ maxHeight: o.gridheight[o.curWinRange] + "px" }), "auto" != o.sliderLayout && 0 == n.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== o.sliderLayout || "on" != o.fullScreenAutoWidth)) {
                    var h = n.parent(),
                        u = h.css("marginBottom"),
                        y = h.css("marginTop");
                    u = u === e ? 0 : u, y = y === e ? 0 : y, h.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:' + y + ";margin-bottom:" + u + '"></div>'), n.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + n.height() + 'px"></div>'), n.parent().css({ marginTop: "0px", marginBottom: "0px" }), n.parent().css({ position: "absolute" }) }
                if (o.shadow !== e && o.shadow > 0 && (n.parent().addClass("tp-shadow" + o.shadow), n.parent().append('<div class="tp-shadowcover"></div>'), n.parent().find(".tp-shadowcover").css({ backgroundColor: n.parent().css("backgroundColor"), backgroundImage: n.parent().css("backgroundImage") })), c(o), c(o, !0), !n.hasClass("revslider-initialised")) { n.addClass("revslider-initialised"), n.addClass("tp-simpleresponsive"), n.attr("id") == e && n.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), o.firefox13 = !1, o.ie = !t.support.opacity, o.ie9 = 9 == document.documentMode, o.origcd = o.delay;
                    var x = t.fn.jquery.split("."),
                        _ = parseFloat(x[0]),
                        T = parseFloat(x[1]);
                    parseFloat(x[2] || "0"), 1 == _ && 7 > T && n.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + x + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), _ > 1 && (o.ie = !1);
                    var C = new Object;
                    C.addedyt = 0, C.addedvim = 0, C.addedvid = 0, n.find(".tp-caption, .rs-background-video-layer").each(function(n) {
                        var s = t(this),
                            r = s.data("autoplayonlyfirsttime"),
                            l = s.data("autoplay");
                        s.hasClass("tp-static-layer") && i.handleStaticLayers && i.handleStaticLayers(s, o);
                        var d = s.data("noposteronmobile") || s.data("noPosterOnMobile") || s.data("posteronmobile") || s.data("posterOnMobile") || s.data("posterOnMObile");
                        s.data("noposteronmobile", d);
                        var c = 0;
                        if (s.find("iframe").each(function() { punchgs.TweenLite.set(t(this), { autoAlpha: 0 }), c++ }), c > 0 && s.data("iframes", !0), s.hasClass("tp-caption")) {
                            var p = s.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
                            s.wrap('<div class="tp-parallax-wrap" style="' + p + 'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="' + p + 'position:absolute;"><div class="tp-mask-wrap" style="' + p + 'position:absolute" ></div></div></div>');
                            var h = ["pendulum", "rotate", "slideloop", "pulse", "wave"],
                                u = s.closest(".tp-loop-wrap");
                            t.each(h, function(t, e) {
                                var i = s.find(".rs-" + e),
                                    a = i.data() || ""; "" != a && (u.data(a), u.addClass("rs-" + e), i.children(0).unwrap(), s.data("loopanimation", "on")) }), punchgs.TweenLite.set(s, { visibility: "hidden" }) }
                        var f = s.data("actions");
                        f !== e && i.checkActions(s, o, f), g(s, o), i.checkVideoApis && (C = i.checkVideoApis(s, o, C)), a && ((1 == r || "true" == r) && (s.data("autoplayonlyfirsttime", "false"), r = !1), (1 == l || "true" == l || "on" == l || "1sttime" == l) && (s.data("autoplay", "off"), l = "off")), (1 == r || "true" == r || "1sttime" == l) && s.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), (1 == l || "true" == l || "on" == l || "no1sttime" == l) && s.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always") }), n.hover(function() { n.trigger("tp-mouseenter"), o.overcontainer = !0 }, function() { n.trigger("tp-mouseleft"), o.overcontainer = !1 }), n.on("mouseover", function() { n.trigger("tp-mouseover"), o.overcontainer = !0 }), n.find(".tp-caption video").each(function(e) {
                        var i = t(this);
                        i.removeClass("video-js vjs-default-skin"), i.attr("preload", ""), i.css({ display: "none" }) }), "standard" !== o.sliderType && (o.lazyType = "all"), P(n.find(".tp-static-layers"), o, 0), A(n.find(".tp-static-layers img"), o, function() { n.find(".tp-static-layers img").each(function() {
                            var i = t(this),
                                a = i.data("lazyload") != e ? i.data("lazyload") : i.attr("src"),
                                n = I(o, a);
                            i.attr("src", n.src) }) }), o.li.each(function(e) {
                        var i = t(this);
                        ("all" == o.lazyType || "smart" == o.lazyType && (0 == e || 1 == e || e == o.slideamount || e == o.slideamount - 1)) && (P(i, o, e), A(i, o, function() { "carousel" == o.sliderType && punchgs.TweenLite.to(i, 1, { autoAlpha: 1, ease: punchgs.Power3.easeInOut }) })) });
                    var S = F("#")[0];
                    if (S.length < 9 && S.split("slide").length > 1) {
                        var k = parseInt(S.split("slide")[1], 0);
                        1 > k && (k = 1), k > o.slideamount && (k = o.slideamount), o.startWithSlide = k - 1 }
                    n.append('<div class="tp-loader ' + o.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 === n.find(".tp-bannertimer").length && n.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), n.find(".tp-bannertimer").css({ width: "0%" }), n.find(".tp-bannertimer").data("opt", o), o.ul.css({ display: "block" }), b(n, o), "off" !== o.parallax.type && i.checkForParallax(n, o), i.setSize(o), "hero" !== o.sliderType && i.createNavigation(n, o), i.resizeThumbsTabs && i.resizeThumbsTabs(o), m(o);
                    var O = o.viewPort;
                    o.inviewport = !1, O != e && O.enable && (t.isNumeric(O.visible_area) || -1 !== O.visible_area.indexOf("%") && (O.visible_area = parseInt(O.visible_area) / 100), i.scrollTicker && i.scrollTicker(o, n)), setTimeout(function() { "carousel" == o.sliderType && i.prepareCarousel(o), !O.enable || O.enable && o.inviewport || O.enable && !o.inviewport && "wait" == !O.outof ? L(n, o) : o.waitForFirstSlide = !0, i.manageNavigation && i.manageNavigation(o), o.slideamount > 1 && (!O.enable || O.enable && o.inviewport ? E(n, o) : o.waitForCountDown = !0), setTimeout(function() { n.trigger("revolution.slide.onloaded") }, 100) }, o.startDelay), o.startDelay = 0, t("body").data("rs-fullScreenMode", !1), t(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() { t("body").data("rs-fullScreenMode", !t("body").data("rs-fullScreenMode")), t("body").data("rs-fullScreenMode") && setTimeout(function() { t(window).trigger("resize") }, 200) });
                    var M = "resize.revslider-" + n.attr("id");
                    t(window).on(M, function() {
                        return n == e ? !1 : (0 != t("body").find(n) && m(o), void((n.outerWidth(!0) != o.width || n.is(":hidden") || "fullscreen" == o.sliderLayout && t(window).height() != o.lastwindowheight) && (o.lastwindowheight = t(window).height(), w(n, o)))) }), v(n, o), m(o), o.fallbacks.disableFocusListener || "true" == o.fallbacks.disableFocusListener || o.fallbacks.disableFocusListener === !0 || R(n, o) } },
            f = function(e, i) {
                if (!t.isArray(e)) {
                    var a = e;
                    e = new Array, e.push(a) }
                if (e.length < i)
                    for (var a = e[e.length - 1], n = 0; n < i - e.length + 2; n++) e.push(a);
                return e },
            g = function(a, n) { "sliderenter" === a.data("start") && (n.layersonhover === e && (n.c.on("tp-mouseenter", function() { n.layersonhover && t.each(n.layersonhover, function(t, a) { a.data("animdirection", "in");
                        var o = a.data("timeline_out"),
                            s = "carousel" === n.sliderType ? 0 : n.width / 2 - n.gridwidth[n.curWinRange] * n.bw / 2,
                            r = 0,
                            l = a.closest(".tp-revslider-slidesli");
                        if (l.hasClass("active-revslide") || l.hasClass("processing-revslide")) { o != e && (o.pause(0), o.kill()), i.animateSingleCaption(a, n, s, r, 0, !1, !0);
                            var d = a.data("timeline");
                            a.data("triggerstate", "on"), d.play(0) } }) }), n.c.on("tp-mouseleft", function() { n.layersonhover && t.each(n.layersonhover, function(t, e) { e.data("animdirection", "out"), e.data("triggered", !0), e.data("triggerstate", "off"), i.stopVideo && i.stopVideo(e, n), i.endMoveCaption && i.endMoveCaption(e, null, null, n) }) }), n.layersonhover = new Array), n.layersonhover.push(a)) },
            m = function(e) {
                var a = i.getHorizontalOffset(e.c, "left");
                if ("auto" == e.sliderLayout || "fullscreen" === e.sliderLayout && "on" == e.fullScreenAutoWidth) "fullscreen" == e.sliderLayout && "on" == e.fullScreenAutoWidth ? punchgs.TweenLite.set(e.ul, { left: 0, width: e.c.width() }) : punchgs.TweenLite.set(e.ul, { left: a, width: e.c.width() - i.getHorizontalOffset(e.c, "both") });
                else {
                    var n = Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - a);
                    punchgs.TweenLite.set(e.c.parent(), { left: 0 - n + "px", width: t(window).width() - i.getHorizontalOffset(e.c, "both") }) }
                e.slayers && "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout && punchgs.TweenLite.set(e.slayers, { left: a }) },
            v = function(a, n, o) {
                var s = a.parent();
                t(window).width() < n.hideSliderAtLimit ? (a.trigger("stoptimer"), "none" != s.css("display") && s.data("olddisplay", s.css("display")), s.css({ display: "none" })) : a.is(":hidden") && o && (s.data("olddisplay") != e && "undefined" != s.data("olddisplay") && "none" != s.data("olddisplay") ? s.css({ display: s.data("olddisplay") }) : s.css({ display: "block" }), a.trigger("restarttimer"), setTimeout(function() { w(a, n) }, 150)), i.hideUnHideNav && i.hideUnHideNav(n) },
            w = function(a, n) {
                if (1 == n.infullscreenmode && (n.minHeight = t(window).height()), c(n), c(n, !0), !i.resizeThumbsTabs || i.resizeThumbsTabs(n) === !0) {
                    if (v(a, n, !0), m(n), "carousel" == n.sliderType && i.prepareCarousel(n, !0), a === e) return !1;
                    i.setSize(n), n.conw = n.c.width(), n.conh = n.infullscreenmode ? n.minHeight : n.c.height();
                    var o = a.find(".active-revslide .slotholder"),
                        s = a.find(".processing-revslide .slotholder");
                    x(a, n, a, 2), "standard" === n.sliderType && (punchgs.TweenLite.set(s.find(".defaultimg"), { opacity: 0 }), o.find(".defaultimg").css({ opacity: 1 })), "carousel" == n.sliderType && n.lastconw != n.conw && (clearTimeout(n.pcartimer), n.pcartimer = setTimeout(function() { i.prepareCarousel(n, !0) }, 100), n.lastconw = n.conw), i.manageNavigation && i.manageNavigation(n), i.animateTheCaptions && i.animateTheCaptions(a.find(".active-revslide"), n, !0), "on" == s.data("kenburns") && i.startKenBurn(s, n, s.data("kbtl").progress()), "on" == o.data("kenburns") && i.startKenBurn(o, n, o.data("kbtl").progress()), i.animateTheCaptions && i.animateTheCaptions(s.closest("li"), n, !0), i.manageNavigation && i.manageNavigation(n) } },
            y = function(t) { t.bw = t.width / t.gridwidth[t.curWinRange], t.bh = t.height / t.gridheight[t.curWinRange], t.bh > t.bw ? t.bh = t.bw : t.bw = t.bh, (t.bh > 1 || t.bw > 1) && (t.bw = 1, t.bh = 1) },
            b = function(n, o) {
                if (n.find(".tp-caption").each(function() {
                        var i = t(this);
                        i.data("transition") !== e && i.addClass(i.data("transition")) }), o.ul.css({ overflow: "hidden", width: "100%", height: "100%", maxHeight: n.parent().css("maxHeight") }), "on" == o.autoHeight && (o.ul.css({ overflow: "hidden", width: "100%", height: "100%", maxHeight: "none" }), n.css({ maxHeight: "none" }), n.parent().css({ maxHeight: "none" })), o.li.each(function(i) {
                        var a = t(this),
                            n = a.data("originalindex");
                        (o.startWithSlide != e && n == o.startWithSlide || o.startWithSlide === e && 0 == i) && a.addClass("next-revslide"), a.css({ width: "100%", height: "100%", overflow: "hidden" }) }), "carousel" === o.sliderType) { o.ul.css({ overflow: "visible" }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
                    var s = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
                    o.c.parent().prepend(s), o.c.parent().append(s), i.prepareCarousel(o) }
                n.parent().css({ overflow: "visible" }), o.li.find(">img").each(function(i) {
                    var n = t(this),
                        s = n.closest("li").find(".rs-background-video-layer");
                    s.addClass("defaultvid").css({ zIndex: 30 }), n.addClass("defaultimg"), "on" == o.fallbacks.panZoomDisableOnMobile && a && (n.data("kenburns", "off"), n.data("bgfit", "cover")), n.wrap('<div class="slotholder" style="width:100%;height:100%;"></div>'), s.appendTo(n.closest("li").find(".slotholder"));
                    var r = n.data();
                    n.closest(".slotholder").data(r), s.length > 0 && r.bgparallax != e && s.data("bgparallax", r.bgparallax), "none" != o.dottedOverlay && o.dottedOverlay != e && n.closest(".slotholder").append('<div class="tp-dottedoverlay ' + o.dottedOverlay + '"></div>');
                    var l = n.attr("src");
                    r.src = l, r.bgfit = r.bgfit || "cover", r.bgrepeat = r.bgrepeat || "no-repeat", r.bgposition = r.bgposition || "center center";
                    var d = n.closest(".slotholder");
                    n.parent().append('<div class="tp-bgimg defaultimg" style="background-color:' + n.css("backgroundColor") + ";background-repeat:" + r.bgrepeat + ";background-image:url(" + l + ");background-size:" + r.bgfit + ";background-position:" + r.bgposition + ';width:100%;height:100%;"></div>');
                    var c = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + n.get(0).outerHTML);
                    n.replaceWith(c), n = d.find(".tp-bgimg"), n.data(r), n.attr("src", l), ("standard" === o.sliderType || "undefined" === o.sliderType) && n.css({ opacity: 0 }) }) },
            x = function(e, i, a, n) { i.removePrepare = i.removePrepare + n, a.find(".slot, .slot-circle-wrapper").each(function() { t(this).remove() }), i.transition = 0, i.removePrepare = 0 },
            _ = function(t) {
                var i = t;
                return t != e && t.length > 0 && (i = t.split("?")[0]), i },
            T = function(t, e) {
                var i = t.split("/"),
                    a = e.split("/");
                i.pop();
                for (var n = 0; n < a.length; n++) "." != a[n] && (".." == a[n] ? i.pop() : i.push(a[n]));
                return i.join("/") },
            C = function(e, i, a) { i.syncload--, i.loadqueue && t.each(i.loadqueue, function(t, i) {
                    var n = i.src.replace(/\.\.\/\.\.\//gi, ""),
                        o = self.location.href,
                        s = document.location.origin,
                        r = o.substring(0, o.length - 1) + "/" + n,
                        l = s + "/" + n,
                        d = T(self.location.href, i.src);
                    o = o.substring(0, o.length - 1) + n, s += n, (_(s) === _(decodeURIComponent(e.src)) || _(o) === _(decodeURIComponent(e.src)) || _(d) === _(decodeURIComponent(e.src)) || _(l) === _(decodeURIComponent(e.src)) || _(r) === _(decodeURIComponent(e.src)) || _(i.src) === _(decodeURIComponent(e.src)) || _(i.src).replace(/^.*\/\/[^\/]+/, "") === _(decodeURIComponent(e.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && _(e.src).match(new RegExp(n))) && (i.progress = a, i.width = e.width, i.height = e.height) }), S(i) },
            S = function(e) { 3 != e.syncload && e.loadqueue && t.each(e.loadqueue, function(t, i) {
                    if (i.progress.match(/prepared/g) && e.syncload <= 3) { e.syncload++;
                        var a = new Image;
                        a.onload = function() { C(this, e, "loaded") }, a.onerror = function() { C(this, e, "failed") }, a.src = i.src, i.progress = "inload" } }) },
            k = function(e, i, a) {
                var n = !1;
                if (i.loadqueue && t.each(i.loadqueue, function(t, i) { i.src === e && (n = !0) }), !n) {
                    var o = new Object;
                    o.src = e, o.prio = a, o.progress = "prepared", i.loadqueue.push(o) } },
            P = function(i, a, n) { i.find("img,.defaultimg").each(function() {
                    var i = t(this),
                        o = i.data("lazyload") !== e && "undefined" !== i.data("lazyload") ? i.data("lazyload") : i.attr("src");
                    i.data("start-to-load", t.now()), k(o, a, n) }), S(a) },
            I = function(e, i) {
                var a = new Object;
                return e.loadqueue && t.each(e.loadqueue, function(t, e) { e.src == i && (a = e) }), a },
            A = function(a, n, o) {
                var s = !1;
                a.find("img,.defaultimg").each(function() {
                    var o = t(this),
                        r = o.data("lazyload") != e ? o.data("lazyload") : o.attr("src"),
                        l = I(n, r);
                    if (o.data("loaded") === e && l !== e && l.progress && l.progress.match(/loaded/g)) {
                        if (o.attr("src", l.src), o.hasClass("defaultimg")) i.isIE(8) ? defimg.attr("src", l.src) : o.css({ backgroundImage: 'url("' + l.src + '")' }), a.data("owidth", l.width), a.data("oheight", l.height), a.find(".slotholder").data("owidth", l.width), a.find(".slotholder").data("oheight", l.height);
                        else {
                            var d = o.data("ww"),
                                c = o.data("hh");
                            o.data("owidth", l.width), o.data("oheight", l.height), d = d == e || "auto" == d || "" == d ? l.width : d, c = c == e || "auto" == c || "" == c ? l.height : c, o.data("ww", d), o.data("hh", c) }
                        o.data("loaded", !0) }
                    if (l && l.progress && l.progress.match(/inprogress|inload|prepared/g) && (t.now() - o.data("start-to-load") < 5e3 ? s = !0 : console.error(r + "  Could not be loaded !")), 1 == n.youtubeapineeded && (!window.YT || YT.Player == e) && (s = !0, t.now() - n.youtubestarttime > 5e3 && 1 != n.youtubewarning)) { n.youtubewarning = !0;
                        var p = "YouTube Api Could not be loaded !"; "https:" === location.protocol && (p += " Please Check and Renew SSL Certificate !"), console.error(p), n.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + p + "</strong></div>") }
                    if (1 == n.vimeoapineeded && !window.Froogaloop && (s = !0, t.now() - n.vimeostarttime > 5e3 && 1 != n.vimeowarning)) { n.vimeowarning = !0;
                        var p = "Vimeo Froogaloop Api Could not be loaded !"; "https:" === location.protocol && (p += " Please Check and Renew SSL Certificate !"), console.error(p), n.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + p + "</strong></div>") } }), s ? setTimeout(function() { A(a, n, o) }, 19) : o() },
            L = function(e, a) {
                if (clearTimeout(a.waitWithSwapSlide), e.find(".processing-revslide").length > 0) return a.waitWithSwapSlide = setTimeout(function() { L(e, a) }, 150), !1;
                var n = e.find(".active-revslide"),
                    o = e.find(".next-revslide"),
                    s = o.find(".defaultimg");
                return o.index() === n.index() ? (o.removeClass("next-revslide"), !1) : (o.removeClass("next-revslide").addClass("processing-revslide"), o.data("slide_on_focus_amount", o.data("slide_on_focus_amount") + 1 || 1), "on" == a.stopLoop && o.index() == a.lastslidetoshow - 1 && (e.find(".tp-bannertimer").css({ visibility: "hidden" }), e.trigger("revolution.slide.onstop"), a.noloopanymore = 1), o.index() === a.slideamount - 1 && (a.looptogo = a.looptogo - 1, a.looptogo <= 0 && (a.stopLoop = "on")), a.tonpause = !0, e.trigger("stoptimer"), a.cd = 0, "off" === a.spinner ? e.find(".tp-loader").css({
                    display: "none"
                }) : e.find(".tp-loader").css({ display: "block" }), P(o, a, 1), void A(o, a, function() { o.find(".rs-background-video-layer").each(function() {
                        var e = t(this);
                        e.hasClass("HasListener") || (e.data("bgvideo", 1), i.manageVideoLayer(e, a)), 0 == e.find(".rs-fullvideo-cover").length && e.append('<div class="rs-fullvideo-cover"></div>') }), O(a, s, e) }))
            },
            O = function(t, a, n) {
                var o = n.find(".active-revslide"),
                    s = n.find(".processing-revslide"),
                    r = o.find(".slotholder"),
                    l = s.find(".slotholder");
                t.tonpause = !1, t.cd = 0, n.trigger("nulltimer"), n.find(".tp-loader").css({ display: "none" }), i.setSize(t), i.slotSize(a, t), i.manageNavigation && i.manageNavigation(t);
                var d = {};
                d.nextslide = s, d.currentslide = o, n.trigger("revolution.slide.onbeforeswap", d), t.transition = 1, t.videoplaying = !1, s.data("delay") != e ? (t.cd = 0, t.delay = s.data("delay")) : t.delay = t.origcd;
                var c = o.index(),
                    p = s.index();
                t.sdir = c > p ? 1 : 0, "arrow" == t.sc_indicator && (0 == c && p == t.slideamount - 1 && (t.sdir = 1), c == t.slideamount - 1 && 0 == p && (t.sdir = 0)), t.lsdir = t.lsdir === e ? t.sdir : t.lsdir, t.dirc = t.lsdir != t.sdir, t.lsdir = t.sdir, o.index() != s.index() && 1 != t.firststart && i.removeTheCaptions && i.removeTheCaptions(o, t), s.hasClass("rs-pause-timer-once") || s.hasClass("rs-pause-timer-always") ? t.videoplaying = !0 : n.trigger("restarttimer"), s.removeClass("rs-pause-timer-once");
                var h, u;
                if ("carousel" == t.sliderType) u = new punchgs.TimelineLite, i.prepareCarousel(t, u), M(n, t, l, r, s, o, u), t.transition = 0, t.firststart = 0;
                else { u = new punchgs.TimelineLite({ onComplete: function() { M(n, t, l, r, s, o, u) } }), u.add(punchgs.TweenLite.set(l.find(".defaultimg"), { opacity: 0 })), u.pause(), 1 == t.firststart && (punchgs.TweenLite.set(o, { autoAlpha: 0 }), t.firststart = 0), punchgs.TweenLite.set(o, { zIndex: 18 }), punchgs.TweenLite.set(s, { autoAlpha: 0, zIndex: 20 }), "prepared" == s.data("differentissplayed") && (s.data("differentissplayed", "done"), s.data("transition", s.data("savedtransition")), s.data("slotamount", s.data("savedslotamount")), s.data("masterspeed", s.data("savedmasterspeed"))), s.data("fstransition") != e && "done" != s.data("differentissplayed") && (s.data("savedtransition", s.data("transition")), s.data("savedslotamount", s.data("slotamount")), s.data("savedmasterspeed", s.data("masterspeed")), s.data("transition", s.data("fstransition")), s.data("slotamount", s.data("fsslotamount")), s.data("masterspeed", s.data("fsmasterspeed")), s.data("differentissplayed", "prepared")), s.data("transition") == e && s.data("transition", "random"), h = 0;
                    var f = s.data("transition") !== e ? s.data("transition").split(",") : "fade",
                        g = s.data("nexttransid") == e ? -1 : s.data("nexttransid"); "on" == s.data("randomtransition") ? g = Math.round(Math.random() * f.length) : g += 1, g == f.length && (g = 0), s.data("nexttransid", g);
                    var m = f[g];
                    t.ie && ("boxfade" == m && (m = "boxslide"), "slotfade-vertical" == m && (m = "slotzoom-vertical"), "slotfade-horizontal" == m && (m = "slotzoom-horizontal")), i.isIE(8) && (m = 11), u = i.animateSlide(h, m, n, t, s, o, l, r, u), "on" == l.data("kenburns") && (i.startKenBurn(l, t), u.add(punchgs.TweenLite.set(l, { autoAlpha: 0 }))), u.pause() }
                i.scrollHandling && (i.scrollHandling(t, !0), u.eventCallback("onUpdate", function() { i.scrollHandling(t, !0) })), "off" != t.parallax.type && t.parallax.firstgo == e && i.scrollHandling && (t.parallax.firstgo = !0, t.lastscrolltop = -999, i.scrollHandling(t, !0), setTimeout(function() { t.lastscrolltop = -999, i.scrollHandling(t, !0) }, 210), setTimeout(function() { t.lastscrolltop = -999, i.scrollHandling(t, !0) }, 420)), i.animateTheCaptions ? i.animateTheCaptions(s, t, null, u) : u != e && setTimeout(function() { u.resume() }, 30), punchgs.TweenLite.to(s, .001, { autoAlpha: 1 }) },
            M = function(n, o, s, r, l, d, c) { "carousel" === o.sliderType || (o.removePrepare = 0, punchgs.TweenLite.to(s.find(".defaultimg"), .001, { zIndex: 20, autoAlpha: 1, onComplete: function() { x(n, o, l, 1) } }), l.index() != d.index() && punchgs.TweenLite.to(d, .2, { zIndex: 18, autoAlpha: 0, onComplete: function() { x(n, o, d, 1) } })), n.find(".active-revslide").removeClass("active-revslide"), n.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), o.act = l.index(), ("scroll" == o.parallax.type || "scroll+mouse" == o.parallax.type || "mouse+scroll" == o.parallax.type) && (o.lastscrolltop = -999, i.scrollHandling(o)), c.clear(), r.data("kbtl") != e && (r.data("kbtl").reverse(), r.data("kbtl").timeScale(25)), "on" == s.data("kenburns") && (s.data("kbtl") != e ? (s.data("kbtl").timeScale(1), s.data("kbtl").play()) : i.startKenBurn(s, o)), l.find(".rs-background-video-layer").each(function(e) {
                    if (a) return !1;
                    var n = t(this);
                    i.resetVideo(n, o), punchgs.TweenLite.fromTo(n, 1, { autoAlpha: 0 }, { autoAlpha: 1, ease: punchgs.Power3.easeInOut, delay: .2, onComplete: function() { i.animcompleted && i.animcompleted(n, o) } }) }), d.find(".rs-background-video-layer").each(function(e) {
                    if (a) return !1;
                    var n = t(this);
                    i.stopVideo && (i.resetVideo(n, o), i.stopVideo(n, o)), punchgs.TweenLite.to(n, 1, { autoAlpha: 0, ease: punchgs.Power3.easeInOut, delay: .2 }) });
                var p = {};
                p.slideIndex = l.index() + 1, p.slideLIIndex = l.index(), p.slide = l, p.currentslide = l, p.prevslide = d, n.trigger("revolution.slide.onchange", p), n.trigger("revolution.slide.onafterswap", p), o.duringslidechange = !1;
                var h = d.data("slide_on_focus_amount"),
                    u = d.data("hideafterloop");
                0 != u && h >= u && o.c.revremoveslide(d.index()) },
            z = function(e, i) { e.children().each(function() {
                    try { t(this).die("click") } catch (e) {}
                    try { t(this).die("mouseenter") } catch (e) {}
                    try { t(this).die("mouseleave") } catch (e) {}
                    try { t(this).unbind("hover") } catch (e) {} });
                try { e.die("click", "mouseenter", "mouseleave") } catch (a) {}
                clearInterval(i.cdint), e = null },
            E = function(n, o) { o.cd = 0, o.loop = 0, o.stopAfterLoops != e && o.stopAfterLoops > -1 ? o.looptogo = o.stopAfterLoops : o.looptogo = 9999999, o.stopAtSlide != e && o.stopAtSlide > -1 ? o.lastslidetoshow = o.stopAtSlide : o.lastslidetoshow = 999, o.stopLoop = "off", 0 == o.looptogo && (o.stopLoop = "on");
                var s = n.find(".tp-bannertimer");
                n.on("stoptimer", function() {
                    var e = t(this).find(".tp-bannertimer");
                    e.data("tween").pause(), "on" == o.disableProgressBar && e.css({ visibility: "hidden" }), o.sliderstatus = "paused", i.unToggleState(o.slidertoggledby) }), n.on("starttimer", function() { 1 != o.conthover && 1 != o.videoplaying && o.width > o.hideSliderAtLimit && 1 != o.tonpause && 1 != o.overnav && (1 === o.noloopanymore || o.viewPort.enable && !o.inviewport || (s.css({ visibility: "visible" }), s.data("tween").resume(), o.sliderstatus = "playing")), "on" == o.disableProgressBar && s.css({ visibility: "hidden" }), i.toggleState(o.slidertoggledby) }), n.on("restarttimer", function() {
                    var e = t(this).find(".tp-bannertimer");
                    return o.mouseoncontainer && "on" == o.navigation.onHoverStop && !a ? !1 : (1 === o.noloopanymore || o.viewPort.enable && !o.inviewport || (e.css({ visibility: "visible" }), e.data("tween").kill(), e.data("tween", punchgs.TweenLite.fromTo(e, o.delay / 1e3, { width: "0%" }, { force3D: "auto", width: "100%", ease: punchgs.Linear.easeNone, onComplete: r, delay: 1 })), o.sliderstatus = "playing"), "on" == o.disableProgressBar && e.css({ visibility: "hidden" }), void i.toggleState(o.slidertoggledby)) }), n.on("nulltimer", function() { s.data("tween").pause(0), "on" == o.disableProgressBar && s.css({ visibility: "hidden" }), o.sliderstatus = "paused" });
                var r = function() { 0 == t("body").find(n).length && (z(n, o), clearInterval(o.cdint)), n.trigger("revolution.slide.slideatend"), 1 == n.data("conthover-changed") && (o.conthover = n.data("conthover"), n.data("conthover-changed", 0)), i.callingNewSlide(o, n, 1) };
                s.data("tween", punchgs.TweenLite.fromTo(s, o.delay / 1e3, { width: "0%" }, { force3D: "auto", width: "100%", ease: punchgs.Linear.easeNone, onComplete: r, delay: 1 })), s.data("opt", o), o.slideamount > 1 && (0 != o.stopAfterLoops || 1 != o.stopAtSlide) ? n.trigger("starttimer") : (o.noloopanymore = 1, n.trigger("nulltimer")), n.on("tp-mouseenter", function() { o.mouseoncontainer = !0, "on" != o.navigation.onHoverStop || a || (n.trigger("stoptimer"), n.trigger("revolution.slide.onpause")) }), n.on("tp-mouseleft", function() { o.mouseoncontainer = !1, 1 != n.data("conthover") && "on" == o.navigation.onHoverStop && (1 == o.viewPort.enable && o.inviewport || 0 == o.viewPort.enable) && (n.trigger("revolution.slide.onresume"), n.trigger("starttimer")) }) },
            D = (function() {
                var t, e, i = { hidden: "visibilitychange", webkitHidden: "webkitvisibilitychange", mozHidden: "mozvisibilitychange", msHidden: "msvisibilitychange" };
                for (t in i)
                    if (t in document) { e = i[t];
                        break }
                return function(i) {
                    return i && document.addEventListener(e, i), !document[t] } }(), function(t) {
                return t == e || t.c == e ? !1 : void(1 != t.windowfocused && (t.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function() { "on" == t.fallbacks.nextSlideOnWindowFocus && t.c.revnext(), t.c.revredraw(), "playing" == t.lastsliderstatus && t.c.revresume() }))) }),
            j = function(t) { t.windowfocused = !1, t.lastsliderstatus = t.sliderstatus, t.c.revpause();
                var e = t.c.find(".active-revslide .slotholder"),
                    a = t.c.find(".processing-revslide .slotholder"); "on" == a.data("kenburns") && i.stopKenBurn(a, t), "on" == e.data("kenburns") && i.stopKenBurn(e, t) },
            R = function(i, a) {
                var n = document.documentMode === e,
                    o = window.chrome;
                n && !o ? t(window).on("focusin", function() { D(a) }).on("focusout", function() { j(a) }) : window.addEventListener ? (window.addEventListener("focus", function(t) { D(a) }, !1), window.addEventListener("blur", function(t) { j(a) }, !1)) : (window.attachEvent("focus", function(t) { D(a) }), window.attachEvent("blur", function(t) { j(a) })) },
            F = function(t) {
                for (var e, i = [], a = window.location.href.slice(window.location.href.indexOf(t) + 1).split("_"), n = 0; n < a.length; n++) a[n] = a[n].replace("%3D", "="), e = a[n].split("="), i.push(e[0]), i[e[0]] = e[1];
                return i }
    }(jQuery), ! function($) {
        var _R = jQuery.fn.revolution,
            _ISM = _R.is_mobile();
        jQuery.extend(!0, _R, { checkActions: function(t, e, i) { checkActions_intern(t, e, i) } });
        var checkActions_intern = function(t, e, i) { i && jQuery.each(i, function(i, a) { a.delay = parseInt(a.delay, 0) / 1e3, t.addClass("noSwipe"), e.fullscreen_esclistener || ("exitfullscreen" == a.action || "togglefullscreen" == a.action) && (jQuery(document).keyup(function(e) { 27 == e.keyCode && jQuery("#rs-go-fullscreen").length > 0 && t.trigger(a.event) }), e.fullscreen_esclistener = !0);
                    var n = "backgroundvideo" == a.layer ? jQuery(".rs-background-video-layer") : "firstvideo" == a.layer ? jQuery(".tp-revslider-slidesli").find(".tp-videolayer") : jQuery("#" + a.layer);
                    switch (a.action) {
                        case "togglevideo":
                            jQuery.each(n, function(e, i) { i = jQuery(i);
                                var a = i.data("videotoggledby");
                                void 0 == a && (a = new Array), a.push(t), i.data("videotoggledby", a) });
                            break;
                        case "togglelayer":
                            jQuery.each(n, function(e, i) { i = jQuery(i);
                                var a = i.data("layertoggledby");
                                void 0 == a && (a = new Array), a.push(t), i.data("layertoggledby", a) });
                            break;
                        case "toggle_mute_video":
                            jQuery.each(n, function(e, i) { i = jQuery(i);
                                var a = i.data("videomutetoggledby");
                                void 0 == a && (a = new Array), a.push(t), i.data("videomutetoggledby", a) });
                            break;
                        case "toggleslider":
                            void 0 == e.slidertoggledby && (e.slidertoggledby = new Array), e.slidertoggledby.push(t);
                            break;
                        case "togglefullscreen":
                            void 0 == e.fullscreentoggledby && (e.fullscreentoggledby = new Array), e.fullscreentoggledby.push(t) }
                    switch (t.on(a.event, function() {
                        var i = "backgroundvideo" == a.layer ? jQuery(".active-revslide .slotholder .rs-background-video-layer") : "firstvideo" == a.layer ? jQuery(".active-revslide .tp-videolayer").first() : jQuery("#" + a.layer);
                        if ("stoplayer" == a.action || "togglelayer" == a.action || "startlayer" == a.action) {
                            if (i.length > 0)
                                if ("startlayer" == a.action || "togglelayer" == a.action && "in" != i.data("animdirection")) { i.data("animdirection", "in");
                                    var n = i.data("timeline_out"),
                                        o = "carousel" === e.sliderType ? 0 : e.width / 2 - e.gridwidth[e.curWinRange] * e.bw / 2,
                                        s = 0;
                                    void 0 != n && n.pause(0).kill(), _R.animateSingleCaption && _R.animateSingleCaption(i, e, o, s, 0, !1, !0);
                                    var r = i.data("timeline");
                                    i.data("triggerstate", "on"), _R.toggleState(i.data("layertoggledby")), punchgs.TweenLite.delayedCall(a.delay, function() { r.play(0) }, [r]) } else("stoplayer" == a.action || "togglelayer" == a.action && "out" != i.data("animdirection")) && (i.data("animdirection", "out"), i.data("triggered", !0), i.data("triggerstate", "off"), _R.stopVideo && _R.stopVideo(i, e), _R.endMoveCaption && punchgs.TweenLite.delayedCall(a.delay, _R.endMoveCaption, [i, null, null, e]), _R.unToggleState(i.data("layertoggledby"))) } else !_ISM || "playvideo" != a.action && "stopvideo" != a.action && "togglevideo" != a.action && "mutevideo" != a.action && "unmutevideo" != a.action && "toggle_mute_video" != a.action ? punchgs.TweenLite.delayedCall(a.delay, function() { actionSwitches(i, e, a, t) }, [i, e, a, t]) : actionSwitches(i, e, a, t) }), a.action) {
                        case "togglelayer":
                        case "startlayer":
                        case "playlayer":
                        case "stoplayer":
                            var n = jQuery("#" + a.layer); "bytrigger" != n.data("start") && (n.data("triggerstate", "on"), n.data("animdirection", "in")) } }) },
            actionSwitches = function(tnc, opt, a, _nc) {
                switch (a.action) {
                    case "scrollbelow":
                        _nc.addClass("tp-scrollbelowslider"), _nc.data("scrolloffset", a.offset), _nc.data("scrolldelay", a.delay);
                        var off = getOffContH(opt.fullScreenOffsetContainer) || 0,
                            aof = parseInt(a.offset, 0) || 0;
                        off = off - aof || 0, jQuery("body,html").animate({ scrollTop: opt.c.offset().top + jQuery(opt.li[0]).height() - off + "px" }, { duration: 400 });
                        break;
                    case "callback":
                        eval(a.callback);
                        break;
                    case "jumptoslide":
                        switch (a.slide.toLowerCase()) {
                            case "+1":
                            case "next":
                                opt.sc_indicator = "arrow", _R.callingNewSlide(opt, opt.c, 1);
                                break;
                            case "previous":
                            case "prev":
                            case "-1":
                                opt.sc_indicator = "arrow", _R.callingNewSlide(opt, opt.c, -1);
                                break;
                            default:
                                var ts = jQuery.isNumeric(a.slide) ? parseInt(a.slide, 0) : a.slide;
                                _R.callingNewSlide(opt, opt.c, ts) }
                        break;
                    case "simplelink":
                        window.open(a.url, a.target);
                        break;
                    case "toggleslider":
                        opt.noloopanymore = 0, "playing" == opt.sliderstatus ? (opt.c.revpause(), _R.unToggleState(opt.slidertoggledby)) : (opt.c.revresume(), _R.toggleState(opt.slidertoggledby));
                        break;
                    case "pauseslider":
                        opt.c.revpause(), _R.unToggleState(opt.slidertoggledby);
                        break;
                    case "playslider":
                        opt.noloopanymore = 0, opt.c.revresume(), _R.toggleState(opt.slidertoggledby);
                        break;
                    case "playvideo":
                        tnc.length > 0 && _R.playVideo(tnc, opt);
                        break;
                    case "stopvideo":
                        tnc.length > 0 && _R.stopVideo && _R.stopVideo(tnc, opt);
                        break;
                    case "togglevideo":
                        tnc.length > 0 && (_R.isVideoPlaying(tnc, opt) ? _R.stopVideo && _R.stopVideo(tnc, opt) : _R.playVideo(tnc, opt));
                        break;
                    case "mutevideo":
                        tnc.length > 0 && _R.muteVideo(tnc, opt);
                        break;
                    case "unmutevideo":
                        tnc.length > 0 && _R.unMuteVideo && _R.unMuteVideo(tnc, opt);
                        break;
                    case "toggle_mute_video":
                        tnc.length > 0 && (_R.isVideoMuted(tnc, opt) ? _R.unMuteVideo(tnc, opt) : _R.muteVideo && _R.muteVideo(tnc, opt)), _nc.toggleClass("rs-toggle-content-active");
                        break;
                    case "simulateclick":
                        tnc.length > 0 && tnc.click();
                        break;
                    case "toggleclass":
                        tnc.length > 0 && (tnc.hasClass(a.classname) ? tnc.removeClass(a.classname) : tnc.addClass(a.classname));
                        break;
                    case "gofullscreen":
                    case "exitfullscreen":
                    case "togglefullscreen":
                        if (jQuery("#rs-go-fullscreen").length > 0 && ("togglefullscreen" == a.action || "exitfullscreen" == a.action)) { jQuery("#rs-go-fullscreen").appendTo(jQuery("#rs-was-here"));
                            var paw = opt.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? opt.c.closest(".forcefullwidth_wrapper_tp_banner") : opt.c.closest(".rev_slider_wrapper");
                            paw.unwrap(), paw.unwrap(), opt.minHeight = opt.oldminheight, opt.infullscreenmode = !1, opt.c.revredraw(), void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function(t, e) { _R.playVideo(e, opt) }), _R.unToggleState(opt.fullscreentoggledby) } else if (0 == jQuery("#rs-go-fullscreen").length && ("togglefullscreen" == a.action || "gofullscreen" == a.action)) {
                            var paw = opt.c.closest(".forcefullwidth_wrapper_tp_banner").length > 0 ? opt.c.closest(".forcefullwidth_wrapper_tp_banner") : opt.c.closest(".rev_slider_wrapper");
                            paw.wrap('<div id="rs-was-here"><div id="rs-go-fullscreen"></div></div>');
                            var gf = jQuery("#rs-go-fullscreen");
                            gf.appendTo(jQuery("body")), gf.css({ position: "fixed", width: "100%", height: "100%", top: "0px", left: "0px", zIndex: "9999999", background: "#ffffff" }), opt.oldminheight = opt.minHeight, opt.minHeight = jQuery(window).height(), opt.infullscreenmode = !0, opt.c.revredraw(), void 0 != opt.playingvideos && opt.playingvideos.length > 0 && jQuery.each(opt.playingvideos, function(t, e) { _R.playVideo(e, opt) }), _R.toggleState(opt.fullscreentoggledby) } } },
            getOffContH = function(t) {
                if (void 0 == t) return 0;
                if (t.split(",").length > 1) { oc = t.split(",");
                    var e = 0;
                    return oc && jQuery.each(oc, function(t, i) { jQuery(i).length > 0 && (e += jQuery(i).outerHeight(!0)) }), e }
                return jQuery(t).height() } }(jQuery), ! function() {
        var t = jQuery.fn.revolution;
        jQuery.extend(!0, t, { prepareCarousel: function(e, o, s) { s = e.carousel.lastdirection = a(s, e.carousel.lastdirection), i(e), e.carousel.slide_offset_target = r(e), void 0 == o ? t.carouselToEvalPosition(e, s) : n(e, s, !1) }, carouselToEvalPosition: function(e, i) {
                var o = e.carousel;
                i = o.lastdirection = a(i, o.lastdirection);
                var s = "center" === o.horizontal_align ? (o.wrapwidth / 2 - o.slide_width / 2 - o.slide_globaloffset) / o.slide_width : (0 - o.slide_globaloffset) / o.slide_width,
                    r = t.simp(s, e.slideamount, !1),
                    l = r - Math.floor(r),
                    d = 0,
                    c = -1 * (Math.ceil(r) - r),
                    p = -1 * (Math.floor(r) - r);
                d = l >= .3 && "left" === i || l >= .7 && "right" === i ? c : .3 > l && "left" === i || .7 > l && "right" === i ? p : d, d = "off" === o.infinity ? 0 > r ? r : s > e.slideamount - 1 ? s - (e.slideamount - 1) : d : d, o.slide_offset_target = d * o.slide_width, 0 !== Math.abs(o.slide_offset_target) ? n(e, i, !0) : t.organiseCarousel(e, i) }, organiseCarousel: function(t, e, i, a) { e = void 0 === e || "down" == e || "up" == e || null === e || jQuery.isEmptyObject(e) ? "left" : e;
                for (var n = t.carousel, o = new Array, s = n.slides.length, r = "right" === n.horizontal_align ? r = t.width : 0, l = 0; s > l; l++) {
                    var d = l * n.slide_width + n.slide_offset; "on" === n.infinity && (d = d > n.wrapwidth - n.inneroffset && "right" == e ? n.slide_offset - (n.slides.length - l) * n.slide_width : d, d = d < 0 - n.inneroffset - n.slide_width && "left" == e ? d + n.maxwidth : d), o[l] = d }
                var c = 999;
                n.slides && jQuery.each(n.slides, function(a, r) {
                    var l = o[a]; "on" === n.infinity && (l = l > n.wrapwidth - n.inneroffset && "left" === e ? o[0] - (s - a) * n.slide_width : l, l = l < 0 - n.inneroffset - n.slide_width ? "left" == e ? l + n.maxwidth : "right" === e ? o[s - 1] + (a + 1) * n.slide_width : l : l);
                    var d = new Object;
                    d.left = l + n.inneroffset;
                    var p = "center" === n.horizontal_align ? (Math.abs(n.wrapwidth / 2) - (d.left + n.slide_width / 2)) / n.slide_width : (n.inneroffset - d.left) / n.slide_width,
                        h = "center" === n.horizontal_align ? 2 : 1;
                    if ((i && Math.abs(p) < c || 0 === p) && (c = Math.abs(p), n.focused = a), d.width = n.slide_width, d.x = 0, d.transformPerspective = 1200, d.transformOrigin = "50% " + n.vertical_align, "on" === n.fadeout)
                        if ("on" === n.vary_fade) d.autoAlpha = 1 - Math.abs(1 / Math.ceil(n.maxVisibleItems / h) * p);
                        else switch (n.horizontal_align) {
                            case "center":
                                d.autoAlpha = Math.abs(p) < Math.ceil(n.maxVisibleItems / h - 1) ? 1 : 1 - (Math.abs(p) - Math.floor(Math.abs(p)));
                                break;
                            case "left":
                                d.autoAlpha = 1 > p && p > 0 ? 1 - p : Math.abs(p) > n.maxVisibleItems - 1 ? 1 - (Math.abs(p) - (n.maxVisibleItems - 1)) : 1;
                                break;
                            case "right":
                                d.autoAlpha = p > -1 && 0 > p ? 1 - Math.abs(p) : p > n.maxVisibleItems - 1 ? 1 - (Math.abs(p) - (n.maxVisibleItems - 1)) : 1 } else d.autoAlpha = Math.abs(p) < Math.ceil(n.maxVisibleItems / h) ? 1 : 0;
                    if (void 0 !== n.minScale && n.minScale > 0)
                        if ("on" === n.vary_scale) { d.scale = 1 - Math.abs(n.minScale / 100 / Math.ceil(n.maxVisibleItems / h) * p);
                            var u = (n.slide_width - n.slide_width * d.scale) * Math.abs(p) } else { d.scale = p >= 1 || -1 >= p ? 1 - n.minScale / 100 : (100 - n.minScale * Math.abs(p)) / 100;
                            var u = (n.slide_width - n.slide_width * (1 - n.minScale / 100)) * Math.abs(p) }
                    void 0 !== n.maxRotation && 0 != Math.abs(n.maxRotation) && ("on" === n.vary_rotation ? (d.rotationY = Math.abs(n.maxRotation) - Math.abs((1 - Math.abs(1 / Math.ceil(n.maxVisibleItems / h) * p)) * n.maxRotation), d.autoAlpha = Math.abs(d.rotationY) > 90 ? 0 : d.autoAlpha) : d.rotationY = p >= 1 || -1 >= p ? n.maxRotation : Math.abs(p) * n.maxRotation, d.rotationY = 0 > p ? -1 * d.rotationY : d.rotationY), d.x = -1 * n.space * p, d.left = Math.floor(d.left), d.x = Math.floor(d.x), void 0 !== d.scale ? 0 > p ? d.x - u : d.x + u : d.x, d.zIndex = Math.round(100 - Math.abs(5 * p)), d.transformStyle = "3D" != t.parallax.type && "3d" != t.parallax.type ? "flat" : "preserve-3d", punchgs.TweenLite.set(r, d) }), a && (t.c.find(".next-revslide").removeClass("next-revslide"), jQuery(n.slides[n.focused]).addClass("next-revslide"), t.c.trigger("revolution.nextslide.waiting")), n.wrapwidth / 2 - n.slide_offset, n.maxwidth + n.slide_offset - n.wrapwidth / 2 } });
        var e = function(t) {
                var e = t.carousel;
                e.infbackup = e.infinity, e.maxVisiblebackup = e.maxVisibleItems, e.slide_globaloffset = "none", e.slide_offset = 0, e.wrap = t.c.find(".tp-carousel-wrapper"), e.slides = t.c.find(".tp-revslider-slidesli"), 0 !== e.maxRotation && ("3D" != t.parallax.type && "3d" != t.parallax.type ? punchgs.TweenLite.set(e.wrap, { perspective: 1200, transformStyle: "flat" }) : punchgs.TweenLite.set(e.wrap, { perspective: 1600, transformStyle: "preserve-3d" })), void 0 !== e.border_radius && parseInt(e.border_radius, 0) > 0 && punchgs.TweenLite.set(t.c.find(".tp-revslider-slidesli"), { borderRadius: e.border_radius }) },
            i = function(i) { void 0 === i.bw && t.setSize(i);
                var a = i.carousel,
                    n = t.getHorizontalOffset(i.c, "left"),
                    o = t.getHorizontalOffset(i.c, "right");
                void 0 === a.wrap && e(i), a.slide_width = "on" !== a.stretch ? i.gridwidth[i.curWinRange] * i.bw : i.c.width(), a.maxwidth = i.slideamount * a.slide_width, a.maxVisiblebackup > a.slides.length + 1 && (a.maxVisibleItems = a.slides.length + 2), a.wrapwidth = a.maxVisibleItems * a.slide_width + (a.maxVisibleItems - 1) * a.space, a.wrapwidth = "auto" != i.sliderLayout ? a.wrapwidth > i.c.closest(".tp-simpleresponsive").width() ? i.c.closest(".tp-simpleresponsive").width() : a.wrapwidth : a.wrapwidth > i.ul.width() ? i.ul.width() : a.wrapwidth, a.infinity = a.wrapwidth >= a.maxwidth ? "off" : a.infbackup, a.wrapoffset = "center" === a.horizontal_align ? (i.c.width() - o - n - a.wrapwidth) / 2 : 0, a.wrapoffset = "auto" != i.sliderLayout && i.outernav ? 0 : a.wrapoffset < n ? n : a.wrapoffset;
                var s = "hidden";
                ("3D" == i.parallax.type || "3d" == i.parallax.type) && (s = "visible"), "right" === a.horizontal_align ? punchgs.TweenLite.set(a.wrap, { left: "auto", right: a.wrapoffset + "px", width: a.wrapwidth, overflow: s }) : punchgs.TweenLite.set(a.wrap, { right: "auto", left: a.wrapoffset + "px", width: a.wrapwidth, overflow: s }), a.inneroffset = "right" === a.horizontal_align ? a.wrapwidth - a.slide_width : 0, a.realoffset = Math.abs(a.wrap.position().left), a.windhalf = jQuery(window).width() / 2 },
            a = function(t, e) {
                return null === t || jQuery.isEmptyObject(t) ? e : void 0 === t ? "right" : t },
            n = function(e, i, n) {
                var o = e.carousel;
                i = o.lastdirection = a(i, o.lastdirection);
                var s = new Object;
                s.from = 0, s.to = o.slide_offset_target, void 0 !== o.positionanim && o.positionanim.pause(), o.positionanim = punchgs.TweenLite.to(s, 1.2, { from: s.to, onUpdate: function() { o.slide_offset = o.slide_globaloffset + s.from, o.slide_offset = t.simp(o.slide_offset, o.maxwidth), t.organiseCarousel(e, i, !1, !1) }, onComplete: function() { o.slide_globaloffset = "off" === o.infinity ? o.slide_globaloffset + o.slide_offset_target : t.simp(o.slide_globaloffset + o.slide_offset_target, o.maxwidth), o.slide_offset = t.simp(o.slide_offset, o.maxwidth), t.organiseCarousel(e, i, !1, !0);
                        var a = jQuery(e.li[o.focused]);
                        e.c.find(".next-revslide").removeClass("next-revslide"), n && t.callingNewSlide(e, e.c, a.data("index")) }, ease: punchgs.Expo.easeOut }) },
            o = function(t, e) {
                return Math.abs(t) > Math.abs(e) ? t > 0 ? t - Math.abs(Math.floor(t / e) * e) : t + Math.abs(Math.floor(t / e) * e) : t },
            s = function(t, e, i) {
                var i, i, a = e - t,
                    n = e - i - t;
                return a = o(a, i), n = o(n, i), Math.abs(a) > Math.abs(n) ? n : a },
            r = function(e) {
                var i = 0,
                    a = e.carousel;
                if (void 0 !== a.positionanim && a.positionanim.kill(), "none" == a.slide_globaloffset) a.slide_globaloffset = i = "center" === a.horizontal_align ? a.wrapwidth / 2 - a.slide_width / 2 : 0;
                else { a.slide_globaloffset = a.slide_offset, a.slide_offset = 0;
                    var n = e.c.find(".processing-revslide").index(),
                        o = "center" === a.horizontal_align ? (a.wrapwidth / 2 - a.slide_width / 2 - a.slide_globaloffset) / a.slide_width : (0 - a.slide_globaloffset) / a.slide_width;
                    o = t.simp(o, e.slideamount, !1), n = n >= 0 ? n : e.c.find(".active-revslide").index(), n = n >= 0 ? n : 0, i = "off" === a.infinity ? o - n : -s(o, n, e.slideamount), i *= a.slide_width }
                return i } }(jQuery), ! function() {
        var t = jQuery.fn.revolution;
        jQuery.extend(!0, t, { stopKenBurn: function(t) { void 0 != t.data("kbtl") && t.data("kbtl").pause() }, startKenBurn: function(t, e, i) {
                var a = t.data(),
                    n = t.find(".defaultimg"),
                    o = n.data("lazyload") || n.data("src"),
                    s = (a.owidth / a.oheight, "carousel" === e.sliderType ? e.carousel.slide_width : e.ul.width()),
                    r = e.ul.height();
                t.data("kbtl") && t.data("kbtl").kill(), i = i || 0, 0 == t.find(".tp-kbimg").length && (t.append('<div class="tp-kbimg-wrap" style="z-index:2;width:100%;height:100%;top:0px;left:0px;position:absolute;"><img class="tp-kbimg" src="' + o + '" style="position:absolute;" width="' + a.owidth + '" height="' + a.oheight + '"></div>'), t.data("kenburn", t.find(".tp-kbimg")));
                var l = function(t, e, i, a, n, o, s) {
                        var r = t * i,
                            l = e * i,
                            d = Math.abs(a - r),
                            c = Math.abs(n - l),
                            p = new Object;
                        return p.l = (0 - o) * d, p.r = p.l + r, p.t = (0 - s) * c, p.b = p.t + l, p.h = o, p.v = s, p },
                    d = function(t, e, i, a, n) {
                        var o = t.bgposition.split(" ") || "center center",
                            s = "center" == o[0] ? "50%" : "left" == o[0] || "left" == o[1] ? "0%" : "right" == o[0] || "right" == o[1] ? "100%" : o[0],
                            r = "center" == o[1] ? "50%" : "top" == o[0] || "top" == o[1] ? "0%" : "bottom" == o[0] || "bottom" == o[1] ? "100%" : o[1];
                        s = parseInt(s, 0) / 100 || 0, r = parseInt(r, 0) / 100 || 0;
                        var d = new Object;
                        return d.start = l(n.start.width, n.start.height, n.start.scale, e, i, s, r), d.end = l(n.start.width, n.start.height, n.end.scale, e, i, s, r), d },
                    c = function(t, e, i) {
                        var a = i.scalestart / 100,
                            n = i.scaleend / 100,
                            o = void 0 != i.oofsetstart ? i.offsetstart.split(" ") || [0, 0] : [0, 0],
                            s = void 0 != i.offsetend ? i.offsetend.split(" ") || [0, 0] : [0, 0];
                        i.bgposition = "center center" == i.bgposition ? "50% 50%" : i.bgposition;
                        var r = new Object,
                            l = t * a,
                            c = (l / i.owidth * i.oheight, t * n);
                        if (c / i.owidth * i.oheight, r.start = new Object, r.starto = new Object, r.end = new Object, r.endo = new Object, r.start.width = t, r.start.height = r.start.width / i.owidth * i.oheight, r.start.height < e) {
                            var p = e / r.start.height;
                            r.start.height = e, r.start.width = r.start.width * p }
                        r.start.transformOrigin = i.bgposition, r.start.scale = a, r.end.scale = n, r.start.rotation = i.rotatestart + "deg", r.end.rotation = i.rotateend + "deg";
                        var h = d(i, t, e, o, r);
                        o[0] = parseFloat(o[0]) + h.start.l, s[0] = parseFloat(s[0]) + h.end.l, o[1] = parseFloat(o[1]) + h.start.t, s[1] = parseFloat(s[1]) + h.end.t;
                        var u = h.start.r - h.start.l,
                            f = h.start.b - h.start.t,
                            g = h.end.r - h.end.l,
                            m = h.end.b - h.end.t;
                        return o[0] = o[0] > 0 ? 0 : u + o[0] < t ? t - u : o[0], s[0] = s[0] > 0 ? 0 : g + s[0] < t ? t - g : s[0], o[1] = o[1] > 0 ? 0 : f + o[1] < e ? e - f : o[1], s[1] = s[1] > 0 ? 0 : m + s[1] < e ? e - m : s[1], r.starto.x = o[0] + "px", r.starto.y = o[1] + "px", r.endo.x = s[0] + "px", r.endo.y = s[1] + "px", r.end.ease = r.endo.ease = i.ease, r.end.force3D = r.endo.force3D = !0, r };
                void 0 != t.data("kbtl") && (t.data("kbtl").kill(), t.removeData("kbtl"));
                var p = t.data("kenburn"),
                    h = p.parent(),
                    u = c(s, r, a),
                    f = new punchgs.TimelineLite;
                f.pause(), u.start.transformOrigin = "0% 0%", u.starto.transformOrigin = "0% 0%", f.add(punchgs.TweenLite.fromTo(p, a.duration / 1e3, u.start, u.end), 0), f.add(punchgs.TweenLite.fromTo(h, a.duration / 1e3, u.starto, u.endo), 0), f.progress(i), f.play(), t.data("kbtl", f) } }) }(jQuery), ! function(t) {
        function e(t, e, i, a, n, o, s) {
            var r = t.find(e);
            r.css("borderWidth", o + "px"), r.css(i, 0 - o + "px"), r.css(a, "0px solid transparent"), r.css(n, s) }
        var i = jQuery.fn.revolution;
        i.is_mobile(), jQuery.extend(!0, i, {
            animcompleted: function(t, e) {
                var a = t.data("videotype"),
                    n = t.data("autoplay"),
                    o = t.data("autoplayonlyfirsttime");
                void 0 != a && "none" != a && (1 == n || "true" == n || "on" == n || "1sttime" == n || o ? (i.playVideo(t, e), i.toggleState(t.data("videotoggledby")), (o || "1sttime" == n) && (t.data("autoplayonlyfirsttime", !1), t.data("autoplay", "off"))) : ("no1sttime" == n && t.data("autoplay", "on"), i.unToggleState(t.data("videotoggledby")))) },
            handleStaticLayers: function(t, e) {
                var i = parseInt(t.data("startslide"), 0),
                    a = parseInt(t.data("endslide"), 0);
                0 > i && (i = 0), 0 > a && (a = e.slideamount), 0 === i && a === e.slideamount - 1 && (a = e.slideamount + 1), t.data("startslide", i), t.data("endslide", a) },
            animateTheCaptions: function(t, e, a, n) {
                var o = "carousel" === e.sliderType ? 0 : e.width / 2 - e.gridwidth[e.curWinRange] * e.bw / 2,
                    s = 0,
                    r = t.data("index");
                e.layers = e.layers || new Object, e.layers[r] = e.layers[r] || t.find(".tp-caption"), e.layers["static"] = e.layers["static"] || e.c.find(".tp-static-layers").find(".tp-caption");
                var l = new Array;
                if (e.conh = e.c.height(), e.conw = e.c.width(), e.ulw = e.ul.width(), e.ulh = e.ul.height(), e.debugMode) { t.addClass("indebugmode"), t.find(".helpgrid").remove(), e.c.find(".hglayerinfo").remove(), t.append('<div class="helpgrid" style="width:' + e.gridwidth[e.curWinRange] * e.bw + "px;height:" + e.gridheight[e.curWinRange] * e.bw + 'px;"></div>');
                    var d = t.find(".helpgrid");
                    d.append('<div class="hginfo">Zoom:' + Math.round(100 * e.bw) + "% &nbsp;&nbsp;&nbsp; Device Level:" + e.curWinRange + "&nbsp;&nbsp;&nbsp; Grid Preset:" + e.gridwidth[e.curWinRange] + "x" + e.gridheight[e.curWinRange] + "</div>"), e.c.append('<div class="hglayerinfo"></div>'), d.append('<div class="tlhg"></div>') }
                l && jQuery.each(l, function(t) {
                    var e = jQuery(this);
                    punchgs.TweenLite.set(e.find(".tp-videoposter"), { autoAlpha: 1 }), punchgs.TweenLite.set(e.find("iframe"), { autoAlpha: 0 }) }), e.layers[r] && jQuery.each(e.layers[r], function(t, e) { l.push(e) }), e.layers["static"] && jQuery.each(e.layers["static"], function(t, e) { l.push(e) }), l && jQuery.each(l, function(t) { i.animateSingleCaption(jQuery(this), e, o, s, t, a) });
                var c = jQuery("body").find("#" + e.c.attr("id")).find(".tp-bannertimer");
                c.data("opt", e), void 0 != n && setTimeout(function() { n.resume() }, 30) },
            animateSingleCaption: function(t, n, s, g, w, y, b) {
                var x = y,
                    _ = p(t, n, "in", !0),
                    T = t.data("_pw") || t.closest(".tp-parallax-wrap"),
                    C = t.data("_lw") || t.closest(".tp-loop-wrap"),
                    S = t.data("_mw") || t.closest(".tp-mask-wrap"),
                    k = t.data("responsive") || "on",
                    P = t.data("responsive_offset") || "on",
                    I = t.data("basealign") || "grid",
                    A = "grid" === I ? n.width : n.ulw,
                    L = "grid" === I ? n.height : n.ulh,
                    O = jQuery("body").hasClass("rtl");
                if (t.data("_pw") || (t.data("_pw", T), t.data("_lw", C), t.data("_mw", S)), "fullscreen" == n.sliderLayout && (g = L / 2 - n.gridheight[n.curWinRange] * n.bh / 2), ("on" == n.autoHeight || void 0 != n.minHeight && n.minHeight > 0) && (g = n.conh / 2 - n.gridheight[n.curWinRange] * n.bh / 2), 0 > g && (g = 0), n.debugMode) { t.closest("li").find(".helpgrid").css({ top: g + "px", left: s + "px" });
                    var M = n.c.find(".hglayerinfo");
                    t.on("hover, mouseenter", function() {
                        var e = "";
                        t.data() && jQuery.each(t.data(), function(t, i) { "object" != typeof i && (e = e + '<span style="white-space:nowrap"><span style="color:#27ae60">' + t + ":</span>" + i + "</span>&nbsp; &nbsp; ") }), M.html(e) }) }
                var z = c(t.data("visibility"), n)[n.forcedWinRange] || c(t.data("visibility"), n) || "on";
                if ("off" == z || A < n.hideCaptionAtLimit && "on" == t.data("captionhidden") || A < n.hideAllCaptionAtLimit ? t.addClass("tp-hidden-caption") : t.removeClass("tp-hidden-caption"), t.data("layertype", "html"), 0 > s && (s = 0), void 0 != t.data("thumbimage") && void 0 == t.data("videoposter") && t.data("videoposter", t.data("thumbimage")), t.find("img").length > 0) {
                    var E = t.find("img");
                    t.data("layertype", "image"), 0 == E.width() && E.css({ width: "auto" }), 0 == E.height() && E.css({ height: "auto" }), void 0 == E.data("ww") && E.width() > 0 && E.data("ww", E.width()), void 0 == E.data("hh") && E.height() > 0 && E.data("hh", E.height());
                    var D = E.data("ww"),
                        j = E.data("hh"),
                        R = "slide" == I ? n.ulw : n.gridwidth[n.curWinRange],
                        F = "slide" == I ? n.ulh : n.gridheight[n.curWinRange],
                        D = c(E.data("ww"), n)[n.curWinRange] || c(E.data("ww"), n) || "auto",
                        j = c(E.data("hh"), n)[n.curWinRange] || c(E.data("hh"), n) || "auto",
                        $ = "full" === D || "full-proportional" === D,
                        W = "full" === j || "full-proportional" === j;
                    if ("full-proportional" === D) {
                        var B = E.data("owidth"),
                            H = E.data("oheight");
                        H / F > B / R ? (D = R, j = H * (R / B)) : (j = F, D = B * (F / H)) } else D = $ ? R : parseFloat(D), j = W ? F : parseFloat(j);
                    void 0 == D && (D = 0), void 0 == j && (j = 0), "off" !== k ? ("grid" != I && $ ? E.width(D) : E.width(D * n.bw), "grid" != I && W ? E.height(j) : E.height(j * n.bh)) : (E.width(D), E.height(j)) }
                if ("slide" === I && (s = 0, g = 0), t.hasClass("tp-videolayer") || t.find("iframe").length > 0 || t.find("video").length > 0) {
                    t.data("layertype", "video"), i.manageVideoLayer(t, n, y, x), y || x || (t.data("videotype"), i.resetVideo(t, n));
                    var N = t.data("aspectratio");
                    void 0 != N && N.split(":").length > 1 && i.prepareCoveredVideo(N, n, t);
                    var E = t.find("iframe") ? t.find("iframe") : E = t.find("video"),
                        Q = !t.find("iframe"),
                        V = t.hasClass("coverscreenvideo");
                    E.css({ display: "block" }), void 0 == t.data("videowidth") && (t.data("videowidth", E.width()), t.data("videoheight", E.height()));
                    var X, D = c(t.data("videowidth"), n)[n.curWinRange] || c(t.data("videowidth"), n) || "auto",
                        j = c(t.data("videoheight"), n)[n.curWinRange] || c(t.data("videoheight"), n) || "auto";
                    D = parseFloat(D), j = parseFloat(j), void 0 === t.data("cssobj") && (X = u(t, 0), t.data("cssobj", X));
                    var Y = f(t.data("cssobj"), n);
                    if ("auto" == Y.lineHeight && (Y.lineHeight = Y.fontSize + 4), t.hasClass("fullscreenvideo") || V) { s = 0, g = 0, t.data("x", 0), t.data("y", 0);
                        var q = L; "on" == n.autoHeight && (q = n.conh), t.css({ width: A, height: q }) } else punchgs.TweenLite.set(t, { paddingTop: Math.round(Y.paddingTop * n.bh) + "px", paddingBottom: Math.round(Y.paddingBottom * n.bh) + "px", paddingLeft: Math.round(Y.paddingLeft * n.bw) + "px", paddingRight: Math.round(Y.paddingRight * n.bw) + "px", marginTop: Y.marginTop * n.bh + "px", marginBottom: Y.marginBottom * n.bh + "px", marginLeft: Y.marginLeft * n.bw + "px", marginRight: Y.marginRight * n.bw + "px", borderTopWidth: Math.round(Y.borderTopWidth * n.bh) + "px", borderBottomWidth: Math.round(Y.borderBottomWidth * n.bh) + "px", borderLeftWidth: Math.round(Y.borderLeftWidth * n.bw) + "px", borderRightWidth: Math.round(Y.borderRightWidth * n.bw) + "px", width: D * n.bw + "px", height: j * n.bh + "px" });
                    (0 == Q && !V || 1 != t.data("forcecover") && !t.hasClass("fullscreenvideo") && !V) && (E.width(D * n.bw),
                        E.height(j * n.bh))
                }
                t.find(".tp-resizeme, .tp-resizeme *").each(function() { m(jQuery(this), n, "rekursive", k) }), t.hasClass("tp-resizeme") && t.find("*").each(function() { m(jQuery(this), n, "rekursive", k) }), m(t, n, 0, k);
                var G = t.outerHeight(),
                    U = t.css("backgroundColor");
                e(t, ".frontcorner", "left", "borderRight", "borderTopColor", G, U), e(t, ".frontcornertop", "left", "borderRight", "borderBottomColor", G, U), e(t, ".backcorner", "right", "borderLeft", "borderBottomColor", G, U), e(t, ".backcornertop", "right", "borderLeft", "borderTopColor", G, U), "on" == n.fullScreenAlignForce && (s = 0, g = 0);
                var Z = t.data("arrobj");
                if (void 0 === Z) {
                    var Z = new Object;
                    Z.voa = c(t.data("voffset"), n)[n.curWinRange] || c(t.data("voffset"), n)[0], Z.hoa = c(t.data("hoffset"), n)[n.curWinRange] || c(t.data("hoffset"), n)[0], Z.elx = c(t.data("x"), n)[n.curWinRange] || c(t.data("x"), n)[0], Z.ely = c(t.data("y"), n)[n.curWinRange] || c(t.data("y"), n)[0] }
                var K = 0 == Z.voa.length ? 0 : Z.voa,
                    J = 0 == Z.hoa.length ? 0 : Z.hoa,
                    tt = 0 == Z.elx.length ? 0 : Z.elx,
                    et = 0 == Z.ely.length ? 0 : Z.ely,
                    it = t.outerWidth(!0),
                    at = t.outerHeight(!0);
                0 == it && 0 == at && (it = n.ulw, at = n.ulh);
                var nt = "off" !== P ? parseInt(K, 0) * n.bw : parseInt(K, 0),
                    ot = "off" !== P ? parseInt(J, 0) * n.bw : parseInt(J, 0),
                    st = "grid" === I ? n.gridwidth[n.curWinRange] * n.bw : A,
                    rt = "grid" === I ? n.gridheight[n.curWinRange] * n.bw : L;
                "on" == n.fullScreenAlignForce && (st = n.ulw, rt = n.ulh), tt = "center" === tt || "middle" === tt ? st / 2 - it / 2 + ot : "left" === tt ? ot : "right" === tt ? st - it - ot : "off" !== P ? tt * n.bw : tt, et = "center" == et || "middle" == et ? rt / 2 - at / 2 + nt : "top" == et ? nt : "bottom" == et ? rt - at - nt : "off" !== P ? et * n.bw : et, O && (tt += it);
                var lt = t.data("lasttriggerstate"),
                    dt = t.data("triggerstate"),
                    ct = t.data("start") || 100,
                    pt = t.data("end"),
                    ht = b ? 0 : "bytrigger" === ct || "sliderenter" === ct ? 0 : parseFloat(ct) / 1e3,
                    ut = tt + s,
                    ft = et + g,
                    gt = t.css("z-Index");
                b || ("reset" == lt && "bytrigger" != ct ? (t.data("triggerstate", "on"), t.data("animdirection", "in"), dt = "on") : "reset" == lt && "bytrigger" == ct && (t.data("triggerstate", "off"), t.data("animdirection", "out"), dt = "off")), punchgs.TweenLite.set(T, { zIndex: gt, top: ft, left: ut, overwrite: "auto" }), 0 == _ && (x = !0), void 0 == t.data("timeline") || x || (2 != _ && t.data("timeline").gotoAndPlay(0), x = !0), !y && t.data("timeline_out") && 2 != _ && 0 != _ && (t.data("timeline_out").kill(), t.data("outstarted", 0)), b && void 0 != t.data("timeline") && (t.removeData("$anims"), t.data("timeline").pause(0), t.data("timeline").kill(), void 0 != t.data("newhoveranim") && (t.data("newhoveranim").progress(0), t.data("newhoveranim").kill()), t.removeData("timeline"), punchgs.TweenLite.killTweensOf(t), t.unbind("hover"), t.removeClass("rs-hover-ready"), t.removeData("newhoveranim"));
                var mt = t.data("timeline") ? t.data("timeline").time() : 0,
                    vt = void 0 !== t.data("timeline") ? t.data("timeline").progress() : 0,
                    wt = t.data("timeline") || new punchgs.TimelineLite({ smoothChildTiming: !0 });
                if (vt = jQuery.isNumeric(vt) ? vt : 0, wt.pause(), 1 > vt && 1 != t.data("outstarted") || 2 == _ || b) {
                    var yt = t;
                    if (void 0 != t.data("mySplitText") && t.data("mySplitText").revert(), void 0 != t.data("splitin") && t.data("splitin").match(/chars|words|lines/g) || void 0 != t.data("splitout") && t.data("splitout").match(/chars|words|lines/g)) {
                        var bt = t.find("a").length > 0 ? t.find("a") : t;
                        t.data("mySplitText", new punchgs.SplitText(bt, { type: "lines,words,chars", charsClass: "tp-splitted", wordsClass: "tp-splitted", linesClass: "tp-splitted" })), t.addClass("splitted") }
                    void 0 !== t.data("mySplitText") && t.data("splitin") && t.data("splitin").match(/chars|words|lines/g) && (yt = t.data("mySplitText")[t.data("splitin")]);
                    var xt = new Object,
                        _t = void 0 != t.data("transform_in") ? t.data("transform_in").match(/\(R\)/gi) : !1;
                    if (!t.data("$anims") || b || _t) {
                        var Tt = a(),
                            Ct = a(),
                            St = o(),
                            kt = void 0 !== t.data("transform_hover") || void 0 !== t.data("style_hover");
                        Ct = l(Ct, t.data("transform_idle")), Tt = l(Ct, t.data("transform_in"), 1 == n.sdir), kt && (St = l(St, t.data("transform_hover")), St = h(St, t.data("style_hover")), t.data("hover", St)), Tt.elemdelay = void 0 == t.data("elementdelay") ? 0 : t.data("elementdelay"), Ct.anim.ease = Tt.anim.ease = Tt.anim.ease || punchgs.Power1.easeInOut, kt && !t.hasClass("rs-hover-ready") && (t.addClass("rs-hover-ready"), t.hover(function(t) {
                            var e = jQuery(t.currentTarget),
                                i = e.data("hover"),
                                a = e.data("timeline");
                            a && 1 == a.progress() && (void 0 === e.data("newhoveranim") || "none" === e.data("newhoveranim") ? e.data("newhoveranim", punchgs.TweenLite.to(e, i.speed, i.anim)) : (e.data("newhoveranim").progress(0), e.data("newhoveranim").play())) }, function(t) {
                            var e = jQuery(t.currentTarget),
                                i = e.data("timeline");
                            i && 1 == i.progress() && void 0 != e.data("newhoveranim") && e.data("newhoveranim").reverse() })), xt = new Object, xt.f = Tt, xt.r = Ct, t.data("$anims") } else xt = t.data("$anims");
                    var Pt = d(t.data("mask_in")),
                        It = new punchgs.TimelineLite;
                    if (xt.f.anim.x = xt.f.anim.x * n.bw || r(xt.f.anim.x, n, it, at, ft, ut, "horizontal"), xt.f.anim.y = xt.f.anim.y * n.bw || r(xt.f.anim.y, n, it, at, ft, ut, "vertical"), 2 != _ || b) {
                        if (yt != t) {
                            var At = xt.r.anim.ease;
                            wt.add(punchgs.TweenLite.set(t, xt.r.anim)), xt.r = a(), xt.r.anim.ease = At }
                        if (xt.f.anim.visibility = "hidden", It.eventCallback("onStart", function() { punchgs.TweenLite.set(t, { visibility: "visible" }), t.data("iframes") && t.find("iframe").each(function() { punchgs.TweenLite.set(jQuery(this), { autoAlpha: 1 }) }), punchgs.TweenLite.set(T, { visibility: "visible" });
                                var e = {};
                                e.layer = t, e.eventtype = "enterstage", e.layertype = t.data("layertype"), e.layersettings = t.data(), n.c.trigger("revolution.layeraction", e) }), It.eventCallback("onComplete", function() {
                                var e = {};
                                e.layer = t, e.eventtype = "enteredstage", e.layertype = t.data("layertype"), e.layersettings = t.data(), n.c.trigger("revolution.layeraction", e), i.animcompleted(t, n) }), "sliderenter" == ct && n.overcontainer && (ht = .6), wt.add(It.staggerFromTo(yt, xt.f.speed, xt.f.anim, xt.r.anim, xt.f.elemdelay), ht), Pt) {
                            var Lt = new Object;
                            Lt.ease = xt.r.anim.ease, Lt.overflow = Pt.anim.overflow = "hidden", Lt.x = Lt.y = 0, Pt.anim.x = Pt.anim.x * n.bw || r(Pt.anim.x, n, it, at, ft, ut, "horizontal"), Pt.anim.y = Pt.anim.y * n.bw || r(Pt.anim.y, n, it, at, ft, ut, "vertical"), wt.add(punchgs.TweenLite.fromTo(S, xt.f.speed, Pt.anim, Lt, Tt.elemdelay), ht) } else wt.add(punchgs.TweenLite.set(S, { overflow: "visible" }, Tt.elemdelay), 0) }
                    t.data("timeline", wt), n.sliderscrope = void 0 === n.sliderscrope ? Math.round(99999 * Math.random()) : n.sliderscrope, _ = p(t, n, "in"), 0 !== vt && 2 != _ || "bytrigger" === pt || b || "sliderleave" == pt || (void 0 == pt || -1 != _ && 2 != _ || "bytriger" === pt ? punchgs.TweenLite.delayedCall(999999, i.endMoveCaption, [t, S, T, n], n.sliderscrope) : punchgs.TweenLite.delayedCall(parseInt(t.data("end"), 0) / 1e3, i.endMoveCaption, [t, S, T, n], n.sliderscrope)), wt = t.data("timeline"), "on" == t.data("loopanimation") && v(C, n.bw), ("sliderenter" != ct || "sliderenter" == ct && n.overcontainer) && (-1 == _ || 1 == _ || b || 0 == _ && 1 > vt && t.hasClass("rev-static-visbile")) && (1 > vt && vt > 0 || 0 == vt && "bytrigger" != ct && "keep" != lt || 0 == vt && "bytrigger" != ct && "keep" == lt && "on" == dt || "bytrigger" == ct && "keep" == lt && "on" == dt) && (wt.resume(mt), i.toggleState(t.data("layertoggledby"))) }
                "on" == t.data("loopanimation") && punchgs.TweenLite.set(C, { minWidth: it, minHeight: at }), 0 == t.data("slidelink") || 1 != t.data("slidelink") && !t.hasClass("slidelink") ? (punchgs.TweenLite.set(S, { width: "auto", height: "auto" }), t.data("slidelink", 0)) : (punchgs.TweenLite.set(S, { width: "100%", height: "100%" }), t.data("slidelink", 1))
            },
            endMoveCaption: function(t, e, i, o) {
                if (e = e || t.data("_mw"), i = i || t.data("_pw"), t.data("outstarted", 1), t.data("timeline")) t.data("timeline").pause();
                else if (void 0 === t.data("_pw")) return;
                var s = new punchgs.TimelineLite,
                    c = new punchgs.TimelineLite,
                    p = new punchgs.TimelineLite,
                    h = l(a(), t.data("transform_in"), 1 == o.sdir),
                    u = t.data("transform_out") ? l(n(), t.data("transform_out"), 1 == o.sdir) : l(n(), t.data("transform_in"), 1 == o.sdir),
                    f = t.data("splitout") && t.data("splitout").match(/words|chars|lines/g) ? t.data("mySplitText")[t.data("splitout")] : t,
                    g = void 0 == t.data("endelementdelay") ? 0 : t.data("endelementdelay"),
                    m = t.innerWidth(),
                    v = t.innerHeight(),
                    w = i.position();
                t.data("transform_out") && t.data("transform_out").match(/auto:auto/g) && (h.speed = u.speed, h.anim.ease = u.anim.ease, u = h);
                var y = d(t.data("mask_out"));
                u.anim.x = u.anim.x * o.bw || r(u.anim.x, o, m, v, w.top, w.left, "horizontal"), u.anim.y = u.anim.y * o.bw || r(u.anim.y, o, m, v, w.top, w.left, "vertical"), c.eventCallback("onStart", function() {
                    var e = {};
                    e.layer = t, e.eventtype = "leavestage", e.layertype = t.data("layertype"), e.layersettings = t.data(), o.c.trigger("revolution.layeraction", e) }), c.eventCallback("onComplete", function() { punchgs.TweenLite.set(t, { visibility: "hidden" }), punchgs.TweenLite.set(i, { visibility: "hidden" });
                    var e = {};
                    e.layer = t, e.eventtype = "leftstage", e.layertype = t.data("layertype"), e.layersettings = t.data(), o.c.trigger("revolution.layeraction", e) }), s.add(c.staggerTo(f, u.speed, u.anim, g), 0), y ? (y.anim.ease = u.anim.ease, y.anim.overflow = "hidden", y.anim.x = y.anim.x * o.bw || r(y.anim.x, o, m, v, w.top, w.left, "horizontal"), y.anim.y = y.anim.y * o.bw || r(y.anim.y, o, m, v, w.top, w.left, "vertical"), s.add(p.to(e, u.speed, y.anim, g), 0)) : s.add(p.set(e, { overflow: "visible", overwrite: "auto" }, g), 0), t.data("timeline_out", s) },
            removeTheCaptions: function(t, e) {
                var a = t.data("index"),
                    n = new Array;
                e.layers[a] && jQuery.each(e.layers[a], function(t, e) { n.push(e) }), e.layers["static"] && jQuery.each(e.layers["static"], function(t, e) { n.push(e) }), punchgs.TweenLite.killDelayedCallsTo(i.endMoveCaption, !1, e.sliderscrope), n && jQuery.each(n, function(t) {
                    var a = jQuery(this),
                        n = p(a, e, "out");
                    0 != n && (w(a), clearTimeout(a.data("videoplaywait")), i.stopVideo && i.stopVideo(a, e), i.endMoveCaption(a, null, null, e), e.playingvideos = [], e.lastplayedvideos = []) }) }
        });
        var a = function() {
                var t = new Object;
                return t.anim = new Object, t.anim.x = 0, t.anim.y = 0, t.anim.z = 0, t.anim.rotationX = 0, t.anim.rotationY = 0, t.anim.rotationZ = 0, t.anim.scaleX = 1, t.anim.scaleY = 1, t.anim.skewX = 0, t.anim.skewY = 0, t.anim.opacity = 1, t.anim.transformOrigin = "50% 50%", t.anim.transformPerspective = 600, t.anim.rotation = 0, t.anim.ease = punchgs.Power3.easeOut, t.anim.force3D = "auto", t.speed = .3, t.anim.autoAlpha = 1, t.anim.visibility = "visible", t.anim.overwrite = "all", t },
            n = function() {
                var t = new Object;
                return t.anim = new Object, t.anim.x = 0, t.anim.y = 0, t.anim.z = 0, t },
            o = function() {
                var t = new Object;
                return t.anim = new Object, t.speed = .2, t },
            s = function(t, e) {
                if (jQuery.isNumeric(parseFloat(t))) return parseFloat(t);
                if (void 0 === t || "inherit" === t) return e;
                if (t.split("{").length > 1) {
                    var i = t.split(","),
                        a = parseFloat(i[1].split("}")[0]);
                    i = parseFloat(i[0].split("{")[1]), t = Math.random() * (a - i) + i }
                return t },
            r = function(t, e, i, a, n, o, s) {
                return !jQuery.isNumeric(t) && t.match(/%]/g) ? (t = t.split("[")[1].split("]")[0], "horizontal" == s ? t = (i + 2) * parseInt(t, 0) / 100 : "vertical" == s && (t = (a + 2) * parseInt(t, 0) / 100)) : (t = "layer_left" === t ? 0 - i : "layer_right" === t ? i : t, t = "layer_top" === t ? 0 - a : "layer_bottom" === t ? a : t, t = "left" === t || "stage_left" === t ? 0 - i - o : "right" === t || "stage_right" === t ? e.conw - o : "center" === t || "stage_center" === t ? e.conw / 2 - i / 2 - o : t, t = "top" === t || "stage_top" === t ? 0 - a - n : "bottom" === t || "stage_bottom" === t ? e.conh - n : "middle" === t || "stage_middle" === t ? e.conh / 2 - a / 2 - n : t), t },
            l = function(t, e, i) {
                var a = new Object;
                if (a = jQuery.extend(!0, {}, a, t), void 0 === e) return a;
                var n = e.split(";");
                return n && jQuery.each(n, function(t, e) {
                    var n = e.split(":"),
                        o = n[0],
                        r = n[1];
                    i && void 0 != r && r.length > 0 && r.match(/\(R\)/) && (r = r.replace("(R)", ""), r = "right" === r ? "left" : "left" === r ? "right" : "top" === r ? "bottom" : "bottom" === r ? "top" : r, "[" === r[0] && "-" === r[1] ? r = r.replace("[-", "[") : "[" === r[0] && "-" !== r[1] ? r = r.replace("[", "[-") : "-" === r[0] ? r = r.replace("-", "") : r[0].match(/[1-9]/) && (r = "-" + r)), void 0 != r && (r = r.replace(/\(R\)/, ""), ("rotationX" == o || "rX" == o) && (a.anim.rotationX = s(r, a.anim.rotationX) + "deg"), ("rotationY" == o || "rY" == o) && (a.anim.rotationY = s(r, a.anim.rotationY) + "deg"), ("rotationZ" == o || "rZ" == o) && (a.anim.rotation = s(r, a.anim.rotationZ) + "deg"), ("scaleX" == o || "sX" == o) && (a.anim.scaleX = s(r, a.anim.scaleX)), ("scaleY" == o || "sY" == o) && (a.anim.scaleY = s(r, a.anim.scaleY)), ("opacity" == o || "o" == o) && (a.anim.opacity = s(r, a.anim.opacity)), ("skewX" == o || "skX" == o) && (a.anim.skewX = s(r, a.anim.skewX)), ("skewY" == o || "skY" == o) && (a.anim.skewY = s(r, a.anim.skewY)), "x" == o && (a.anim.x = s(r, a.anim.x)), "y" == o && (a.anim.y = s(r, a.anim.y)), "z" == o && (a.anim.z = s(r, a.anim.z)), ("transformOrigin" == o || "tO" == o) && (a.anim.transformOrigin = r.toString()), ("transformPerspective" == o || "tP" == o) && (a.anim.transformPerspective = parseInt(r, 0)), ("speed" == o || "s" == o) && (a.speed = parseFloat(r) / 1e3), ("ease" == o || "e" == o) && (a.anim.ease = r)) }), a },
            d = function(t) {
                if (void 0 === t) return !1;
                var e = new Object;
                e.anim = new Object;
                var i = t.split(";");
                return i && jQuery.each(i, function(t, i) { i = i.split(":");
                    var a = i[0],
                        n = i[1]; "x" == a && (e.anim.x = n), "y" == a && (e.anim.y = n), "s" == a && (e.speed = parseFloat(n) / 1e3), ("e" == a || "ease" == a) && (e.anim.ease = n) }), e },
            c = function(t, e, i) {
                if (void 0 == t && (t = 0), !jQuery.isArray(t) && "string" === jQuery.type(t) && (t.split(",").length > 1 || t.split("[").length > 1)) { t = t.replace("[", ""), t = t.replace("]", "");
                    var a = t.match(/'/g) ? t.split("',") : t.split(",");
                    t = new Array, a && jQuery.each(a, function(e, i) { i = i.replace("'", ""), i = i.replace("'", ""), t.push(i) }) } else {
                    var n = t;
                    jQuery.isArray(t) || (t = new Array, t.push(n)) }
                var n = t[t.length - 1];
                if (t.length < e.rle)
                    for (var o = 1; o <= e.curWinRange; o++) t.push(n);
                return t },
            p = function(t, e, i, a) {
                var n = -1;
                if (t.hasClass("tp-static-layer")) {
                    var o = parseInt(t.data("startslide"), 0),
                        s = parseInt(t.data("endslide"), 0),
                        r = e.c.find(".processing-revslide").index(),
                        l = -1 != r ? r : e.c.find(".active-revslide").index();
                    l = -1 == l ? 0 : l, "in" === i ? t.hasClass("rev-static-visbile") ? n = s == l || o > l || l > s ? 2 : 0 : l >= o && s >= l || o == l || s == l ? (a || (t.addClass("rev-static-visbile"), t.removeClass("rev-static-hidden")), n = 1) : n = 0 : t.hasClass("rev-static-visbile") ? o > l || l > s ? (n = 2, a || (t.removeClass("rev-static-visbile"), t.addClass("rev-static-hidden"))) : n = 0 : n = 2 }
                return n },
            h = function(t, e) {
                if (void 0 === e) return t;
                e = e.replace("c:", "color:"), e = e.replace("bg:", "background-color:"), e = e.replace("bw:", "border-width:"), e = e.replace("bc:", "border-color:"), e = e.replace("br:", "borderRadius:"), e = e.replace("bs:", "border-style:"), e = e.replace("td:", "text-decoration:");
                var i = e.split(";");
                return i && jQuery.each(i, function(e, i) {
                    var a = i.split(":");
                    a[0].length > 0 && (t.anim[a[0]] = a[1]) }), t },
            u = function(t, e) {
                var i, a = new Object,
                    n = !1;
                if ("rekursive" == e && (i = t.closest(".tp-caption"), i && t.css("fontSize") === i.css("fontSize") && (n = !0)), a.basealign = t.data("basealign") || "grid", a.fontSize = n ? void 0 === i.data("fontsize") ? parseInt(i.css("fontSize"), 0) || 0 : i.data("fontsize") : void 0 === t.data("fontsize") ? parseInt(t.css("fontSize"), 0) || 0 : t.data("fontsize"), a.fontWeight = n ? void 0 === i.data("fontweight") ? parseInt(i.css("fontWeight"), 0) || 0 : i.data("fontweight") : void 0 === t.data("fontweight") ? parseInt(t.css("fontWeight"), 0) || 0 : t.data("fontweight"), a.whiteSpace = n ? void 0 === i.data("whitespace") ? i.css("whitespace") || "normal" : i.data("whitespace") : void 0 === t.data("whitespace") ? t.css("whitespace") || "normal" : t.data("whitespace"), a.lineHeight = n ? void 0 === i.data("lineheight") ? parseInt(i.css("lineHeight"), 0) || 0 : i.data("lineheight") : void 0 === t.data("lineheight") ? parseInt(t.css("lineHeight"), 0) || 0 : t.data("lineheight"), a.letterSpacing = n ? void 0 === i.data("letterspacing") ? parseFloat(i.css("letterSpacing"), 0) || 0 : i.data("letterspacing") : void 0 === t.data("letterspacing") ? parseFloat(t.css("letterSpacing")) || 0 : t.data("letterspacing"), a.paddingTop = void 0 === t.data("paddingtop") ? parseInt(t.css("paddingTop"), 0) || 0 : t.data("paddingtop"), a.paddingBottom = void 0 === t.data("paddingbottom") ? parseInt(t.css("paddingBottom"), 0) || 0 : t.data("paddingbottom"), a.paddingLeft = void 0 === t.data("paddingleft") ? parseInt(t.css("paddingLeft"), 0) || 0 : t.data("paddingleft"), a.paddingRight = void 0 === t.data("paddingright") ? parseInt(t.css("paddingRight"), 0) || 0 : t.data("paddingright"), a.marginTop = void 0 === t.data("margintop") ? parseInt(t.css("marginTop"), 0) || 0 : t.data("margintop"), a.marginBottom = void 0 === t.data("marginbottom") ? parseInt(t.css("marginBottom"), 0) || 0 : t.data("marginbottom"), a.marginLeft = void 0 === t.data("marginleft") ? parseInt(t.css("marginLeft"), 0) || 0 : t.data("marginleft"), a.marginRight = void 0 === t.data("marginright") ? parseInt(t.css("marginRight"), 0) || 0 : t.data("marginright"), a.borderTopWidth = void 0 === t.data("bordertopwidth") ? parseInt(t.css("borderTopWidth"), 0) || 0 : t.data("bordertopwidth"), a.borderBottomWidth = void 0 === t.data("borderbottomwidth") ? parseInt(t.css("borderBottomWidth"), 0) || 0 : t.data("borderbottomwidth"), a.borderLeftWidth = void 0 === t.data("borderleftwidth") ? parseInt(t.css("borderLeftWidth"), 0) || 0 : t.data("borderleftwidth"), a.borderRightWidth = void 0 === t.data("borderrightwidth") ? parseInt(t.css("borderRightWidth"), 0) || 0 : t.data("borderrightwidth"), "rekursive" != e) {
                    if (a.color = void 0 === t.data("color") ? "nopredefinedcolor" : t.data("color"), a.whiteSpace = n ? void 0 === i.data("whitespace") ? i.css("whiteSpace") || "nowrap" : i.data("whitespace") : void 0 === t.data("whitespace") ? t.css("whiteSpace") || "nowrap" : t.data("whitespace"), a.minWidth = void 0 === t.data("width") ? parseInt(t.css("minWidth"), 0) || 0 : t.data("width"), a.minHeight = void 0 === t.data("height") ? parseInt(t.css("minHeight"), 0) || 0 : t.data("height"), void 0 != t.data("videowidth") && void 0 != t.data("videoheight")) {
                        var o = t.data("videowidth"),
                            s = t.data("videoheight");
                        o = "100%" === o ? "none" : o, s = "100%" === s ? "none" : s, t.data("width", o), t.data("height", s) }
                    a.maxWidth = void 0 === t.data("width") ? parseInt(t.css("maxWidth"), 0) || "none" : t.data("width"), a.maxHeight = void 0 === t.data("height") ? parseInt(t.css("maxHeight"), 0) || "none" : t.data("height"), a.wan = void 0 === t.data("wan") ? parseInt(t.css("-webkit-transition"), 0) || "none" : t.data("wan"), a.moan = void 0 === t.data("moan") ? parseInt(t.css("-moz-animation-transition"), 0) || "none" : t.data("moan"), a.man = void 0 === t.data("man") ? parseInt(t.css("-ms-animation-transition"), 0) || "none" : t.data("man"), a.ani = void 0 === t.data("ani") ? parseInt(t.css("transition"), 0) || "none" : t.data("ani") }
                return a.styleProps = t.css(["background-color", "border-top-color", "border-bottom-color", "border-right-color", "border-left-color", "border-top-style", "border-bottom-style", "border-left-style", "border-right-style", "border-left-width", "border-right-width", "border-bottom-width", "border-top-width", "color", "text-decoration", "font-style", "border-radius"]), a },
            f = function(t, e) {
                var i = new Object;
                return t && jQuery.each(t, function(a, n) { i[a] = c(n, e)[e.curWinRange] || t[a] }), i },
            g = function(t, e, i, a) {
                return t = jQuery.isNumeric(t) ? t * e + "px" : t, t = "full" === t ? a : "auto" === t || "none" === t ? i : t },
            m = function(t, e, i, a) {
                var n;
                void 0 === t.data("cssobj") ? (n = u(t, i), t.data("cssobj", n)) : n = t.data("cssobj");
                var o = f(n, e),
                    s = e.bw,
                    r = e.bh;
                if ("off" === a && (s = 1, r = 1), "auto" == o.lineHeight && (o.lineHeight = o.fontSize + 4), !t.hasClass("tp-splitted")) { t.css("-webkit-transition", "none"), t.css("-moz-transition", "none"), t.css("-ms-transition", "none"), t.css("transition", "none");
                    var l = void 0 !== t.data("transform_hover") || void 0 !== t.data("style_hover");
                    if (l && punchgs.TweenLite.set(t, o.styleProps), punchgs.TweenLite.set(t, { fontSize: Math.round(o.fontSize * s) + "px", fontWeight: o.fontWeight, letterSpacing: Math.floor(o.letterSpacing * s) + "px", paddingTop: Math.round(o.paddingTop * r) + "px", paddingBottom: Math.round(o.paddingBottom * r) + "px", paddingLeft: Math.round(o.paddingLeft * s) + "px", paddingRight: Math.round(o.paddingRight * s) + "px", marginTop: o.marginTop * r + "px", marginBottom: o.marginBottom * r + "px", marginLeft: o.marginLeft * s + "px", marginRight: o.marginRight * s + "px", borderTopWidth: Math.round(o.borderTopWidth * r) + "px", borderBottomWidth: Math.round(o.borderBottomWidth * r) + "px", borderLeftWidth: Math.round(o.borderLeftWidth * s) + "px", borderRightWidth: Math.round(o.borderRightWidth * s) + "px", lineHeight: Math.round(o.lineHeight * r) + "px", overwrite: "auto" }), "rekursive" != i) {
                        var d = "slide" == o.basealign ? e.ulw : e.gridwidth[e.curWinRange],
                            c = "slide" == o.basealign ? e.ulh : e.gridheight[e.curWinRange],
                            p = g(o.maxWidth, s, "none", d),
                            h = g(o.maxHeight, r, "none", c),
                            m = g(o.minWidth, s, "0px", d),
                            v = g(o.minHeight, r, "0px", c);
                        punchgs.TweenLite.set(t, { maxWidth: p, maxHeight: h, minWidth: m, minHeight: v, whiteSpace: o.whiteSpace, overwrite: "auto" }), "nopredefinedcolor" != o.color && punchgs.TweenLite.set(t, { color: o.color, overwrite: "auto" }) }
                    setTimeout(function() { t.css("-webkit-transition", t.data("wan")), t.css("-moz-transition", t.data("moan")), t.css("-ms-transition", t.data("man")), t.css("transition", t.data("ani")) }, 30) } },
            v = function(t, e) {
                if (t.hasClass("rs-pendulum") && void 0 == t.data("loop-timeline")) { t.data("loop-timeline", new punchgs.TimelineLite);
                    var i = void 0 == t.data("startdeg") ? -20 : t.data("startdeg"),
                        a = void 0 == t.data("enddeg") ? 20 : t.data("enddeg"),
                        n = void 0 == t.data("speed") ? 2 : t.data("speed"),
                        o = void 0 == t.data("origin") ? "50% 50%" : t.data("origin"),
                        s = void 0 == t.data("easing") ? punchgs.Power2.easeInOut : t.data("ease");
                    i *= e, a *= e, t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, { force3D: "auto", rotation: i, transformOrigin: o }, { rotation: a, ease: s })), t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, { force3D: "auto", rotation: a, transformOrigin: o }, { rotation: i, ease: s, onComplete: function() { t.data("loop-timeline").restart() } })) }
                if (t.hasClass("rs-rotate") && void 0 == t.data("loop-timeline")) { t.data("loop-timeline", new punchgs.TimelineLite);
                    var i = void 0 == t.data("startdeg") ? 0 : t.data("startdeg"),
                        a = void 0 == t.data("enddeg") ? 360 : t.data("enddeg");
                    n = void 0 == t.data("speed") ? 2 : t.data("speed"), o = void 0 == t.data("origin") ? "50% 50%" : t.data("origin"), s = void 0 == t.data("easing") ? punchgs.Power2.easeInOut : t.data("easing"), i *= e, a *= e, t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, { force3D: "auto", rotation: i, transformOrigin: o }, { rotation: a, ease: s, onComplete: function() { t.data("loop-timeline").restart() } })) }
                if (t.hasClass("rs-slideloop") && void 0 == t.data("loop-timeline")) { t.data("loop-timeline", new punchgs.TimelineLite);
                    var r = void 0 == t.data("xs") ? 0 : t.data("xs"),
                        l = void 0 == t.data("ys") ? 0 : t.data("ys"),
                        d = void 0 == t.data("xe") ? 0 : t.data("xe"),
                        c = void 0 == t.data("ye") ? 0 : t.data("ye"),
                        n = void 0 == t.data("speed") ? 2 : t.data("speed"),
                        s = void 0 == t.data("easing") ? punchgs.Power2.easeInOut : t.data("easing");
                    r *= e, l *= e, d *= e, c *= e, t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, { force3D: "auto", x: r, y: l }, { x: d, y: c, ease: s })), t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, { force3D: "auto", x: d, y: c }, { x: r, y: l, onComplete: function() { t.data("loop-timeline").restart() } })) }
                if (t.hasClass("rs-pulse") && void 0 == t.data("loop-timeline")) { t.data("loop-timeline", new punchgs.TimelineLite);
                    var p = void 0 == t.data("zoomstart") ? 0 : t.data("zoomstart"),
                        h = void 0 == t.data("zoomend") ? 0 : t.data("zoomend"),
                        n = void 0 == t.data("speed") ? 2 : t.data("speed"),
                        s = void 0 == t.data("easing") ? punchgs.Power2.easeInOut : t.data("easing");
                    t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, { force3D: "auto", scale: p }, { scale: h, ease: s })), t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(t, n, { force3D: "auto", scale: h }, { scale: p, onComplete: function() { t.data("loop-timeline").restart() } })) }
                if (t.hasClass("rs-wave") && void 0 == t.data("loop-timeline")) { t.data("loop-timeline", new punchgs.TimelineLite);
                    var u = void 0 == t.data("angle") ? 10 : parseInt(t.data("angle"), 0),
                        f = void 0 == t.data("radius") ? 10 : parseInt(t.data("radius"), 0),
                        n = void 0 == t.data("speed") ? -20 : t.data("speed"),
                        o = void 0 == t.data("origin") ? "50% 50%" : t.data("origin"),
                        g = o.split(" "),
                        m = new Object;
                    g.length >= 1 ? (m.x = g[0], m.y = g[1]) : (m.x = "50%", m.y = "50%"), u *= e, f *= e;
                    var v = 0 - t.height() / 2 + f * (-1 + parseInt(m.y, 0) / 100),
                        w = t.width() * (-.5 + parseInt(m.x, 0) / 100),
                        y = { a: 0, ang: u, element: t, unit: f, xoffset: w, yoffset: v };
                    t.data("loop-timeline").append(new punchgs.TweenLite.fromTo(y, n, { a: 360 }, { a: 0, force3D: "auto", ease: punchgs.Linear.easeNone, onUpdate: function() {
                            var t = y.a * (Math.PI / 180);
                            punchgs.TweenLite.to(y.element, .1, { force3D: "auto", x: y.xoffset + Math.cos(t) * y.unit, y: y.yoffset + y.unit * (1 - Math.sin(t)) }) }, onComplete: function() { t.data("loop-timeline").restart() } })) } },
            w = function(t) { t.find(".rs-pendulum, .rs-slideloop, .rs-pulse, .rs-wave").each(function() {
                    var t = jQuery(this);
                    void 0 != t.data("loop-timeline") && (t.data("loop-timeline").pause(), t.data("loop-timeline", null)) }) }
    }(jQuery), ! function() {
        var t = jQuery.fn.revolution;
        jQuery.extend(!0, t, { migration: function(t, a) {
                return a = e(a), i(t, a), a } });
        var e = function(t) {
                if (t.parallaxLevels || t.parallaxBgFreeze) {
                    var e = new Object;
                    e.type = t.parallax, e.levels = t.parallaxLevels, e.bgparallax = "on" == t.parallaxBgFreeze ? "off" : "on", e.disable_onmobile = t.parallaxDisableOnMobile, t.parallax = e }
                if (void 0 === t.disableProgressBar && (t.disableProgressBar = t.hideTimerBar || "off"), (t.startwidth || t.startheight) && (t.gridwidth = t.startwidth, t.gridheight = t.startheight), void 0 === t.sliderType && (t.sliderType = "standard"), "on" === t.fullScreen && (t.sliderLayout = "fullscreen"), "on" === t.fullWidth && (t.sliderLayout = "fullwidth"), void 0 === t.sliderLayout && (t.sliderLayout = "auto"), void 0 === t.navigation) {
                    var i = new Object;
                    if ("solo" == t.navigationArrows || "nextto" == t.navigationArrows) {
                        var a = new Object;
                        a.enable = !0, a.style = t.navigationStyle || "", a.hide_onmobile = "on" === t.hideArrowsOnMobile, a.hide_onleave = t.hideThumbs > 0, a.hide_delay = t.hideThumbs > 0 ? t.hideThumbs : 200, a.hide_delay_mobile = t.hideNavDelayOnMobile || 1500, a.hide_under = 0, a.tmp = "", a.left = { h_align: t.soloArrowLeftHalign, v_align: t.soloArrowLeftValign, h_offset: t.soloArrowLeftHOffset, v_offset: t.soloArrowLeftVOffset }, a.right = { h_align: t.soloArrowRightHalign, v_align: t.soloArrowRightValign, h_offset: t.soloArrowRightHOffset, v_offset: t.soloArrowRightVOffset }, i.arrows = a }
                    if ("bullet" == t.navigationType) {
                        var n = new Object;
                        n.style = t.navigationStyle || "", n.enable = !0, n.hide_onmobile = "on" === t.hideArrowsOnMobile, n.hide_onleave = t.hideThumbs > 0, n.hide_delay = t.hideThumbs > 0 ? t.hideThumbs : 200, n.hide_delay_mobile = t.hideNavDelayOnMobile || 1500, n.hide_under = 0, n.direction = "horizontal", n.h_align = t.navigationHAlign || "center", n.v_align = t.navigationVAlign || "bottom", n.space = 5, n.h_offset = t.navigationHOffset || 0, n.v_offset = t.navigationVOffset || 20, n.tmp = '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>', i.bullets = n }
                    if ("thumb" == t.navigationType) {
                        var o = new Object;
                        o.style = t.navigationStyle || "", o.enable = !0, o.width = t.thumbWidth || 100, o.height = t.thumbHeight || 50, o.min_width = t.thumbWidth || 100, o.wrapper_padding = 2, o.wrapper_color = "#f5f5f5", o.wrapper_opacity = 1, o.visibleAmount = t.thumbAmount || 3, o.hide_onmobile = "on" === t.hideArrowsOnMobile, o.hide_onleave = t.hideThumbs > 0, o.hide_delay = t.hideThumbs > 0 ? t.hideThumbs : 200, o.hide_delay_mobile = t.hideNavDelayOnMobile || 1500, o.hide_under = 0, o.direction = "horizontal", o.span = !1, o.position = "inner", o.space = 2, o.h_align = t.navigationHAlign || "center", o.v_align = t.navigationVAlign || "bottom", o.h_offset = t.navigationHOffset || 0, o.v_offset = t.navigationVOffset || 20, o.tmp = '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>', i.thumbnails = o }
                    t.navigation = i, t.navigation.keyboardNavigation = t.keyboardNavigation || "on", t.navigation.onHoverStop = t.onHoverStop || "on", t.navigation.touch = { touchenabled: t.touchenabled || "on", swipe_treshold: t.swipe_treshold || 75, swipe_min_touches: t.swipe_min_touches || 1, drag_block_vertical: t.drag_block_vertical || !1 } }
                return t.fallbacks = { isJoomla: t.isJoomla || !1, panZoomDisableOnMobile: t.parallaxDisableOnMobile || "off", simplifyAll: t.simplifyAll || "on", nextSlideOnWindowFocus: t.nextSlideOnWindowFocus || "off", disableFocusListener: t.disableFocusListener || !0 }, t },
            i = function(t) {
                var e = new Object,
                    i = t.width(),
                    a = t.height();
                e.skewfromleftshort = "x:-50;skX:85;o:0", e.skewfromrightshort = "x:50;skX:-85;o:0", e.sfl = "x:-50;o:0", e.sfr = "x:50;o:0", e.sft = "y:-50;o:0", e.sfb = "y:50;o:0", e.skewfromleft = "x:top;skX:85;o:0", e.skewfromright = "x:bottom;skX:-85;o:0", e.lfl = "x:top;o:0", e.lfr = "x:bottom;o:0", e.lft = "y:left;o:0", e.lfb = "y:right;o:0", e.fade = "o:0", 720 * Math.random() - 360, t.find(".tp-caption").each(function() {
                    var t = jQuery(this),
                        n = (2 * Math.random() * i - i, 2 * Math.random() * a - a, 3 * Math.random(), 720 * Math.random() - 360, 70 * Math.random() - 35, 70 * Math.random() - 35, t.attr("class"));
                    e.randomrotate = "x:{-400,400};y:{-400,400};sX:{0,2};sY:{0,2};rZ:{-180,180};rX:{-180,180};rY:{-180,180};o:0;", n.match("randomrotate") ? t.data("transform_in", e.randomrotate) : n.match(/\blfl\b/) ? t.data("transform_in", e.lfl) : n.match(/\blfr\b/) ? t.data("transform_in", e.lfr) : n.match(/\blft\b/) ? t.data("transform_in", e.lft) : n.match(/\blfb\b/) ? t.data("transform_in", e.lfb) : n.match(/\bsfl\b/) ? t.data("transform_in", e.sfl) : n.match(/\bsfr\b/) ? t.data("transform_in", e.sfr) : n.match(/\bsft\b/) ? t.data("transform_in", e.sft) : n.match(/\bsfb\b/) ? t.data("transform_in", e.sfb) : n.match(/\bskewfromleftshort\b/) ? t.data("transform_in", e.skewfromleftshort) : n.match(/\bskewfromrightshort\b/) ? t.data("transform_in", e.skewfromrightshort) : n.match(/\bskewfromleft\b/) ? t.data("transform_in", e.skewfromleft) : n.match(/\bskewfromright\b/) ? t.data("transform_in", e.skewfromright) : n.match(/\bfade\b/) && t.data("transform_in", e.fade), n.match(/\brandomrotateout\b/) ? t.data("transform_out", e.randomrotate) : n.match(/\bltl\b/) ? t.data("transform_out", e.lfl) : n.match(/\bltr\b/) ? t.data("transform_out", e.lfr) : n.match(/\bltt\b/) ? t.data("transform_out", e.lft) : n.match(/\bltb\b/) ? t.data("transform_out", e.lfb) : n.match(/\bstl\b/) ? t.data("transform_out", e.sfl) : n.match(/\bstr\b/) ? t.data("transform_out", e.sfr) : n.match(/\bstt\b/) ? t.data("transform_out", e.sft) : n.match(/\bstb\b/) ? t.data("transform_out", e.sfb) : n.match(/\bskewtoleftshortout\b/) ? t.data("transform_out", e.skewfromleftshort) : n.match(/\bskewtorightshortout\b/) ? t.data("transform_out", e.skewfromrightshort) : n.match(/\bskewtoleftout\b/) ? t.data("transform_out", e.skewfromleft) : n.match(/\bskewtorightout\b/) ? t.data("transform_out", e.skewfromright) : n.match(/\bfadeout\b/) && t.data("transform_out", e.fade), void 0 != t.data("customin") && t.data("transform_in", t.data("customin")), void 0 != t.data("customout") && t.data("transform_out", t.data("customout")) }) } }(jQuery), ! function(t) {
        var e = jQuery.fn.revolution,
            i = e.is_mobile();
        jQuery.extend(!0, e, {
            hideUnHideNav: function(t) {
                var e = t.c.width(),
                    i = t.navigation.arrows,
                    a = t.navigation.bullets,
                    n = t.navigation.thumbnails,
                    o = t.navigation.tabs;
                p(i) && T(t.c.find(".tparrows"), i.hide_under, e, i.hide_over), p(a) && T(t.c.find(".tp-bullets"), a.hide_under, e, a.hide_over), p(n) && T(t.c.parent().find(".tp-thumbs"), n.hide_under, e, n.hide_over), p(o) && T(t.c.parent().find(".tp-tabs"), o.hide_under, e, o.hide_over), _(t) },
            resizeThumbsTabs: function(t, e) {
                if (t.navigation && t.navigation.tabs.enable || t.navigation && t.navigation.thumbnails.enable) {
                    var i = (jQuery(window).width() - 480) / 500,
                        a = new punchgs.TimelineLite,
                        o = t.navigation.tabs,
                        s = t.navigation.thumbnails,
                        r = t.navigation.bullets;
                    if (a.pause(), i = i > 1 ? 1 : 0 > i ? 0 : i, p(o) && (e || o.width > o.min_width) && n(i, a, t.c, o, t.slideamount, "tab"), p(s) && (e || s.width > s.min_width) && n(i, a, t.c, s, t.slideamount, "thumb"), p(r) && e) {
                        var l = t.c.find(".tp-bullets");
                        l.find(".tp-bullet").each(function(t) {
                            var e = jQuery(this),
                                i = t + 1,
                                a = e.outerWidth() + parseInt(void 0 === r.space ? 0 : r.space, 0),
                                n = e.outerHeight() + parseInt(void 0 === r.space ? 0 : r.space, 0); "vertical" === r.direction ? (e.css({ top: (i - 1) * n + "px", left: "0px" }), l.css({ height: (i - 1) * n + e.outerHeight(), width: e.outerWidth() })) : (e.css({ left: (i - 1) * a + "px", top: "0px" }), l.css({ width: (i - 1) * a + e.outerWidth(), height: e.outerHeight() })) }) }
                    a.play(), _(t) }
                return !0 },
            updateNavIndexes: function(t) {
                function i(t) { a.find(t).lenght > 0 && a.find(t).each(function(t) { jQuery(this).data("liindex", t) }) }
                var a = t.c;
                i(".tp-tab"), i(".tp-bullet"), i(".tp-thumb"), e.resizeThumbsTabs(t, !0), e.manageNavigation(t) },
            manageNavigation: function(t) {
                var i = e.getHorizontalOffset(t.c.parent(), "left"),
                    n = e.getHorizontalOffset(t.c.parent(), "right");
                p(t.navigation.bullets) && ("fullscreen" != t.sliderLayout && "fullwidth" != t.sliderLayout && (t.navigation.bullets.h_offset_old = void 0 === t.navigation.bullets.h_offset_old ? t.navigation.bullets.h_offset : t.navigation.bullets.h_offset_old, t.navigation.bullets.h_offset = "center" === t.navigation.bullets.h_align ? t.navigation.bullets.h_offset_old + i / 2 - n / 2 : t.navigation.bullets.h_offset_old + i - n), w(t.c.find(".tp-bullets"), t.navigation.bullets)), p(t.navigation.thumbnails) && w(t.c.parent().find(".tp-thumbs"), t.navigation.thumbnails), p(t.navigation.tabs) && w(t.c.parent().find(".tp-tabs"), t.navigation.tabs), p(t.navigation.arrows) && ("fullscreen" != t.sliderLayout && "fullwidth" != t.sliderLayout && (t.navigation.arrows.left.h_offset_old = void 0 === t.navigation.arrows.left.h_offset_old ? t.navigation.arrows.left.h_offset : t.navigation.arrows.left.h_offset_old, t.navigation.arrows.left.h_offset = "right" === t.navigation.arrows.left.h_align ? t.navigation.arrows.left.h_offset_old + n : t.navigation.arrows.left.h_offset_old + i, t.navigation.arrows.right.h_offset_old = void 0 === t.navigation.arrows.right.h_offset_old ? t.navigation.arrows.right.h_offset : t.navigation.arrows.right.h_offset_old, t.navigation.arrows.right.h_offset = "right" === t.navigation.arrows.right.h_align ? t.navigation.arrows.right.h_offset_old + n : t.navigation.arrows.right.h_offset_old + i),
                    w(t.c.find(".tp-leftarrow.tparrows"), t.navigation.arrows.left), w(t.c.find(".tp-rightarrow.tparrows"), t.navigation.arrows.right)), p(t.navigation.thumbnails) && a(t.c.parent().find(".tp-thumbs"), t.navigation.thumbnails), p(t.navigation.tabs) && a(t.c.parent().find(".tp-tabs"), t.navigation.tabs)
            },
            createNavigation: function(t, e) {
                var n = t.parent(),
                    o = e.navigation.arrows,
                    l = e.navigation.bullets,
                    h = e.navigation.thumbnails,
                    m = e.navigation.tabs,
                    v = p(o),
                    w = p(l),
                    b = p(h),
                    _ = p(m);
                s(t, e), r(t, e), v && g(t, o, e), e.li.each(function(i) {
                    var a = jQuery(this);
                    w && y(t, l, a, e), b && x(t, h, a, "tp-thumb", e), _ && x(t, m, a, "tp-tab", e) }), t.bind("revolution.slide.onafterswap revolution.nextslide.waiting", function() {
                    var i = 0 == t.find(".next-revslide").length ? t.find(".active-revslide").data("index") : t.find(".next-revslide").data("index");
                    t.find(".tp-bullet").each(function() {
                        var t = jQuery(this);
                        t.data("liref") === i ? t.addClass("selected") : t.removeClass("selected") }), n.find(".tp-thumb, .tp-tab").each(function() {
                        var t = jQuery(this);
                        t.data("liref") === i ? (t.addClass("selected"), t.hasClass("tp-tab") ? a(n.find(".tp-tabs"), m) : a(n.find(".tp-thumbs"), h)) : t.removeClass("selected") });
                    var s = 0,
                        r = !1;
                    e.thumbs && jQuery.each(e.thumbs, function(t, e) { s = r === !1 ? t : s, r = e.id === i || t === i ? !0 : r });
                    var l = s > 0 ? s - 1 : e.slideamount - 1,
                        d = s + 1 == e.slideamount ? 0 : s + 1;
                    if (o.enable === !0) {
                        var c = o.tmp;
                        jQuery.each(e.thumbs[l].params, function(t, e) { c = c.replace(e.from, e.to) }), o.left.j.html(c), c = o.tmp, jQuery.each(e.thumbs[d].params, function(t, e) { c = c.replace(e.from, e.to) }), o.right.j.html(c), punchgs.TweenLite.set(o.left.j.find(".tp-arr-imgholder"), { backgroundImage: "url(" + e.thumbs[l].src + ")" }), punchgs.TweenLite.set(o.right.j.find(".tp-arr-imgholder"), { backgroundImage: "url(" + e.thumbs[d].src + ")" }) } }), c(o), c(l), c(h), c(m), n.on("mouseenter mousemove", function() { n.hasClass("tp-mouseover") || (n.addClass("tp-mouseover"), punchgs.TweenLite.killDelayedCallsTo(f), v && o.hide_onleave && f(n.find(".tparrows"), o, "show"), w && l.hide_onleave && f(n.find(".tp-bullets"), l, "show"), b && h.hide_onleave && f(n.find(".tp-thumbs"), h, "show"), _ && m.hide_onleave && f(n.find(".tp-tabs"), m, "show"), i && (n.removeClass("tp-mouseover"), u(t, e))) }), n.on("mouseleave", function() { n.removeClass("tp-mouseover"), u(t, e) }), v && o.hide_onleave && f(n.find(".tparrows"), o, "hide", 0), w && l.hide_onleave && f(n.find(".tp-bullets"), l, "hide", 0), b && h.hide_onleave && f(n.find(".tp-thumbs"), h, "hide", 0), _ && m.hide_onleave && f(n.find(".tp-tabs"), m, "hide", 0), b && d(n.find(".tp-thumbs"), e), _ && d(n.find(".tp-tabs"), e), "carousel" === e.sliderType && d(t, e, !0), "on" == e.navigation.touch.touchenabled && d(t, e, "swipebased") }
        });
        var a = function(t, e) {
                var i = (t.hasClass("tp-thumbs") ? ".tp-thumbs" : ".tp-tabs", t.hasClass("tp-thumbs") ? ".tp-thumb-mask" : ".tp-tab-mask"),
                    a = t.hasClass("tp-thumbs") ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                    n = t.hasClass("tp-thumbs") ? ".tp-thumb" : ".tp-tab",
                    o = t.find(i),
                    s = o.find(a),
                    r = e.direction,
                    l = "vertical" === r ? o.find(n).first().outerHeight(!0) + e.space : o.find(n).first().outerWidth(!0) + e.space,
                    d = "vertical" === r ? o.height() : o.width(),
                    c = parseInt(o.find(n + ".selected").data("liindex"), 0),
                    p = d / l,
                    h = "vertical" === r ? o.height() : o.width(),
                    u = 0 - c * l,
                    f = "vertical" === r ? s.height() : s.width(),
                    g = 0 - (f - h) > u ? 0 - (f - h) : g > 0 ? 0 : u,
                    m = s.data("offset");
                p > 2 && (g = 0 >= u - (m + l) ? 0 - l > u - (m + l) ? m : g + l : g, g = l > u - l + m + d && u + (Math.round(p) - 2) * l < m ? u + (Math.round(p) - 2) * l : g), g = 0 - (f - h) > g ? 0 - (f - h) : g > 0 ? 0 : g, "vertical" !== r && o.width() >= s.width() && (g = 0), "vertical" === r && o.height() >= s.height() && (g = 0), t.hasClass("dragged") || ("vertical" === r ? s.data("tmmove", punchgs.TweenLite.to(s, .5, { top: g + "px", ease: punchgs.Power3.easeInOut })) : s.data("tmmove", punchgs.TweenLite.to(s, .5, { left: g + "px", ease: punchgs.Power3.easeInOut })), s.data("offset", g)) },
            n = function(t, e, i, a, n, o) {
                var s = i.parent().find(".tp-" + o + "s"),
                    r = s.find(".tp-" + o + "s-inner-wrapper"),
                    l = s.find(".tp-" + o + "-mask"),
                    d = a.width * t < a.min_width ? a.min_width : Math.round(a.width * t),
                    c = Math.round(d / a.width * a.height),
                    p = "vertical" === a.direction ? d : d * n + a.space * (n - 1),
                    h = "vertical" === a.direction ? c * n + a.space * (n - 1) : c,
                    u = "vertical" === a.direction ? { width: d + "px" } : { height: c + "px" };
                e.add(punchgs.TweenLite.set(s, u)), e.add(punchgs.TweenLite.set(r, { width: p + "px", height: h + "px" })), e.add(punchgs.TweenLite.set(l, { width: p + "px", height: h + "px" }));
                var f = r.find(".tp-" + o);
                return f && jQuery.each(f, function(t, i) { "vertical" === a.direction ? e.add(punchgs.TweenLite.set(i, { top: t * (c + parseInt(void 0 === a.space ? 0 : a.space, 0)), width: d + "px", height: c + "px" })) : "horizontal" === a.direction && e.add(punchgs.TweenLite.set(i, { left: t * (d + parseInt(void 0 === a.space ? 0 : a.space, 0)), width: d + "px", height: c + "px" })) }), e },
            o = function(t) {
                var e = 0,
                    i = 0,
                    a = 0,
                    n = 0,
                    o = 1,
                    s = 1,
                    r = 1;
                return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), a = e * o, n = i * o, "deltaY" in t && (n = t.deltaY), "deltaX" in t && (a = t.deltaX), (a || n) && t.deltaMode && (1 == t.deltaMode ? (a *= s, n *= s) : (a *= r, n *= r)), a && !e && (e = 1 > a ? -1 : 1), n && !i && (i = 1 > n ? -1 : 1), n = navigator.userAgent.match(/mozilla/i) ? 10 * n : n, (n > 300 || -300 > n) && (n /= 10), { spinX: e, spinY: i, pixelX: a, pixelY: n } },
            s = function(t, i) { "on" === i.navigation.keyboardNavigation && jQuery(document).keydown(function(a) {
                    ("horizontal" == i.navigation.keyboard_direction && 39 == a.keyCode || "vertical" == i.navigation.keyboard_direction && 40 == a.keyCode) && (i.sc_indicator = "arrow", i.sc_indicator_dir = 0, e.callingNewSlide(i, t, 1)), ("horizontal" == i.navigation.keyboard_direction && 37 == a.keyCode || "vertical" == i.navigation.keyboard_direction && 38 == a.keyCode) && (i.sc_indicator = "arrow", i.sc_indicator_dir = 1, e.callingNewSlide(i, t, -1)) }) },
            r = function(t, i) {
                if ("on" === i.navigation.mouseScrollNavigation || "carousel" === i.navigation.mouseScrollNavigation) { i.isIEEleven = !!navigator.userAgent.match(/Trident.*rv\:11\./), i.isSafari = !!navigator.userAgent.match(/safari/i), i.ischrome = !!navigator.userAgent.match(/chrome/i);
                    var a = i.ischrome ? -49 : i.isIEEleven || i.isSafari ? -9 : navigator.userAgent.match(/mozilla/i) ? -29 : -49,
                        n = i.ischrome ? 49 : i.isIEEleven || i.isSafari ? 9 : navigator.userAgent.match(/mozilla/i) ? 29 : 49;
                    t.on("mousewheel DOMMouseScroll", function(s) {
                        var r = o(s.originalEvent),
                            l = t.find(".tp-revslider-slidesli.active-revslide").index(),
                            d = t.find(".tp-revslider-slidesli.processing-revslide").index(),
                            c = -1 != l && 0 == l || -1 != d && 0 == d,
                            p = -1 != l && l == i.slideamount - 1 || 1 != d && d == i.slideamount - 1,
                            h = !0;
                        return "carousel" == i.navigation.mouseScrollNavigation && (c = p = !1), -1 == d ? r.pixelY < a ? c || (i.sc_indicator = "arrow", i.sc_indicator_dir = 0, e.callingNewSlide(i, t, -1), h = !1) : r.pixelY > n && (p || (i.sc_indicator = "arrow", i.sc_indicator_dir = 1, e.callingNewSlide(i, t, 1), h = !1)) : h = !(!p && r.spinY > 0 || !c && r.spinY <= 0), 0 == h ? (s.preventDefault(s), !1) : void 0 }) } },
            l = function(t, e, a) {
                return t = i ? jQuery(a.target).closest("." + t).length || jQuery(a.srcElement).closest("." + t).length : jQuery(a.toElement).closest("." + t).length || jQuery(a.originalTarget).closest("." + t).length, t === !0 || 1 === t ? 1 : 0 },
            d = function(t, a, n) { t.data("opt", a);
                var o = a.carousel;
                jQuery(".bullet, .bullets, .tp-bullets, .tparrows").addClass("noSwipe"), o.Limit = "endless";
                var s = (i || "Firefox" === e.get_browser(), t),
                    r = "vertical" === a.navigation.thumbnails.direction || "vertical" === a.navigation.tabs.direction ? "none" : "vertical",
                    d = a.navigation.touch.swipe_direction || "horizontal";
                r = "swipebased" == n && "vertical" == d ? "none" : n ? "vertical" : r, jQuery.fn.swipetp || (jQuery.fn.swipetp = jQuery.fn.swipe), jQuery.fn.swipetp.defaults && jQuery.fn.swipetp.defaults.excludedElements || jQuery.fn.swipetp.defaults || (jQuery.fn.swipetp.defaults = new Object), jQuery.fn.swipetp.defaults.excludedElements = "label, button, input, select, textarea, .noSwipe", s.swipetp({ allowPageScroll: r, triggerOnTouchLeave: !0, treshold: a.navigation.touch.swipe_treshold, fingers: a.navigation.touch.swipe_min_touches, excludeElements: jQuery.fn.swipetp.defaults.excludedElements, swipeStatus: function(i, n, s, r, c, p, h) {
                        var u = l("rev_slider_wrapper", t, i),
                            f = l("tp-thumbs", t, i),
                            g = l("tp-tabs", t, i),
                            m = jQuery(this).attr("class"),
                            v = !!m.match(/tp-tabs|tp-thumb/gi);
                        if ("carousel" === a.sliderType && (("move" === n || "end" === n || "cancel" == n) && a.dragStartedOverSlider && !a.dragStartedOverThumbs && !a.dragStartedOverTabs || "start" === n && u > 0 && 0 === f && 0 === g)) switch (a.dragStartedOverSlider = !0, r = s && s.match(/left|up/g) ? Math.round(-1 * r) : r = Math.round(1 * r), n) {
                            case "start":
                                void 0 !== o.positionanim && (o.positionanim.kill(), o.slide_globaloffset = "off" === o.infinity ? o.slide_offset : e.simp(o.slide_offset, o.maxwidth)), o.overpull = "none", o.wrap.addClass("dragged");
                                break;
                            case "move":
                                if (o.slide_offset = "off" === o.infinity ? o.slide_globaloffset + r : e.simp(o.slide_globaloffset + r, o.maxwidth), "off" === o.infinity) {
                                    var w = "center" === o.horizontal_align ? (o.wrapwidth / 2 - o.slide_width / 2 - o.slide_offset) / o.slide_width : (0 - o.slide_offset) / o.slide_width; "none" !== o.overpull && 0 !== o.overpull || !(0 > w || w > a.slideamount - 1) ? w >= 0 && w <= a.slideamount - 1 && (w >= 0 && r > o.overpull || w <= a.slideamount - 1 && r < o.overpull) && (o.overpull = 0) : o.overpull = r, o.slide_offset = 0 > w ? o.slide_offset + (o.overpull - r) / 1.1 + Math.sqrt(Math.abs((o.overpull - r) / 1.1)) : w > a.slideamount - 1 ? o.slide_offset + (o.overpull - r) / 1.1 - Math.sqrt(Math.abs((o.overpull - r) / 1.1)) : o.slide_offset }
                                e.organiseCarousel(a, s, !0, !0);
                                break;
                            case "end":
                            case "cancel":
                                o.slide_globaloffset = o.slide_offset, o.wrap.removeClass("dragged"), e.carouselToEvalPosition(a, s), a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1 } else {
                            if (("move" !== n && "end" !== n && "cancel" != n || a.dragStartedOverSlider || !a.dragStartedOverThumbs && !a.dragStartedOverTabs) && !("start" === n && u > 0 && (f > 0 || g > 0))) {
                                if ("end" == n && !v) {
                                    if (a.sc_indicator = "arrow", "horizontal" == d && "left" == s || "vertical" == d && "up" == s) return a.sc_indicator_dir = 0, e.callingNewSlide(a, a.c, 1), !1;
                                    if ("horizontal" == d && "right" == s || "vertical" == d && "down" == s) return a.sc_indicator_dir = 1, e.callingNewSlide(a, a.c, -1), !1 }
                                return a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1, !0 }
                            f > 0 && (a.dragStartedOverThumbs = !0), g > 0 && (a.dragStartedOverTabs = !0);
                            var y = a.dragStartedOverThumbs ? ".tp-thumbs" : ".tp-tabs",
                                b = a.dragStartedOverThumbs ? ".tp-thumb-mask" : ".tp-tab-mask",
                                x = a.dragStartedOverThumbs ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                                _ = a.dragStartedOverThumbs ? ".tp-thumb" : ".tp-tab",
                                T = a.dragStartedOverThumbs ? a.navigation.thumbnails : a.navigation.tabs;
                            r = s && s.match(/left|up/g) ? Math.round(-1 * r) : r = Math.round(1 * r);
                            var C = t.parent().find(b),
                                S = C.find(x),
                                k = T.direction,
                                P = "vertical" === k ? S.height() : S.width(),
                                I = "vertical" === k ? C.height() : C.width(),
                                A = "vertical" === k ? C.find(_).first().outerHeight(!0) + T.space : C.find(_).first().outerWidth(!0) + T.space,
                                L = void 0 === S.data("offset") ? 0 : parseInt(S.data("offset"), 0),
                                O = 0;
                            switch (n) {
                                case "start":
                                    t.parent().find(y).addClass("dragged"), L = "vertical" === k ? S.position().top : S.position().left, S.data("offset", L), S.data("tmmove") && S.data("tmmove").pause();
                                    break;
                                case "move":
                                    if (I >= P) return !1;
                                    O = L + r, O = O > 0 ? "horizontal" === k ? O - S.width() * (O / S.width() * O / S.width()) : O - S.height() * (O / S.height() * O / S.height()) : O;
                                    var M = "vertical" === k ? 0 - (S.height() - C.height()) : 0 - (S.width() - C.width());
                                    O = M > O ? "horizontal" === k ? O + S.width() * (O - M) / S.width() * (O - M) / S.width() : O + S.height() * (O - M) / S.height() * (O - M) / S.height() : O, "vertical" === k ? punchgs.TweenLite.set(S, { top: O + "px" }) : punchgs.TweenLite.set(S, { left: O + "px" });
                                    break;
                                case "end":
                                case "cancel":
                                    if (v) return O = L + r, O = "vertical" === k ? O < 0 - (S.height() - C.height()) ? 0 - (S.height() - C.height()) : O : O < 0 - (S.width() - C.width()) ? 0 - (S.width() - C.width()) : O, O = O > 0 ? 0 : O, O = Math.abs(r) > A / 10 ? 0 >= r ? Math.floor(O / A) * A : Math.ceil(O / A) * A : 0 > r ? Math.ceil(O / A) * A : Math.floor(O / A) * A, O = "vertical" === k ? O < 0 - (S.height() - C.height()) ? 0 - (S.height() - C.height()) : O : O < 0 - (S.width() - C.width()) ? 0 - (S.width() - C.width()) : O, O = O > 0 ? 0 : O, "vertical" === k ? punchgs.TweenLite.to(S, .5, { top: O + "px", ease: punchgs.Power3.easeOut }) : punchgs.TweenLite.to(S, .5, { left: O + "px", ease: punchgs.Power3.easeOut }), O = O ? O : "vertical" === k ? S.position().top : S.position().left, S.data("offset", O), S.data("distance", r), setTimeout(function() { a.dragStartedOverSlider = !1, a.dragStartedOverThumbs = !1, a.dragStartedOverTabs = !1 }, 100), t.parent().find(y).removeClass("dragged"), !1 } } } }) },
            c = function(t) { t.hide_delay = jQuery.isNumeric(parseInt(t.hide_delay, 0)) ? t.hide_delay / 1e3 : .2, t.hide_delay_mobile = jQuery.isNumeric(parseInt(t.hide_delay_mobile, 0)) ? t.hide_delay_mobile / 1e3 : .2 },
            p = function(t) {
                return t && t.enable },
            h = function(t) {
                return t && t.enable && t.hide_onleave === !0 && (void 0 === t.position ? !0 : !t.position.match(/outer/g)) },
            u = function(t, e) {
                var a = t.parent();
                h(e.navigation.arrows) && punchgs.TweenLite.delayedCall(i ? e.navigation.arrows.hide_delay_mobile : e.navigation.arrows.hide_delay, f, [a.find(".tparrows"), e.navigation.arrows, "hide"]), h(e.navigation.bullets) && punchgs.TweenLite.delayedCall(i ? e.navigation.bullets.hide_delay_mobile : e.navigation.bullets.hide_delay, f, [a.find(".tp-bullets"), e.navigation.bullets, "hide"]), h(e.navigation.thumbnails) && punchgs.TweenLite.delayedCall(i ? e.navigation.thumbnails.hide_delay_mobile : e.navigation.thumbnails.hide_delay, f, [a.find(".tp-thumbs"), e.navigation.thumbnails, "hide"]), h(e.navigation.tabs) && punchgs.TweenLite.delayedCall(i ? e.navigation.tabs.hide_delay_mobile : e.navigation.tabs.hide_delay, f, [a.find(".tp-tabs"), e.navigation.tabs, "hide"]) },
            f = function(t, e, i, a) {
                switch (a = void 0 === a ? .5 : a, i) {
                    case "show":
                        punchgs.TweenLite.to(t, a, { autoAlpha: 1, ease: punchgs.Power3.easeInOut, overwrite: "auto" });
                        break;
                    case "hide":
                        punchgs.TweenLite.to(t, a, { autoAlpha: 0, ease: punchgs.Power3.easeInOu, overwrite: "auto" }) } },
            g = function(t, e, i) { e.style = void 0 === e.style ? "" : e.style, e.left.style = void 0 === e.left.style ? "" : e.left.style, e.right.style = void 0 === e.right.style ? "" : e.right.style, 0 === t.find(".tp-leftarrow.tparrows").length && t.append('<div class="tp-leftarrow tparrows ' + e.style + " " + e.left.style + '">' + e.tmp + "</div>"), 0 === t.find(".tp-rightarrow.tparrows").length && t.append('<div class="tp-rightarrow tparrows ' + e.style + " " + e.right.style + '">' + e.tmp + "</div>");
                var a = t.find(".tp-leftarrow.tparrows"),
                    n = t.find(".tp-rightarrow.tparrows");
                n.click(function() { i.sc_indicator = "arrow", i.sc_indicator_dir = 0, t.revnext() }), a.click(function() { i.sc_indicator = "arrow", i.sc_indicator_dir = 1, t.revprev() }), e.right.j = t.find(".tp-rightarrow.tparrows"), e.left.j = t.find(".tp-leftarrow.tparrows"), e.padding_top = parseInt(i.carousel.padding_top || 0, 0), e.padding_bottom = parseInt(i.carousel.padding_bottom || 0, 0), w(a, e.left), w(n, e.right), ("outer-left" == e.position || "outer-right" == e.position) && (i.outernav = !0) },
            m = function(t, e) {
                var i = t.outerHeight(!0),
                    a = (t.outerWidth(!0), "top" === e.v_align ? { top: "0px", y: Math.round(e.v_offset) + "px" } : "center" === e.v_align ? { top: "50%", y: Math.round(0 - i / 2 + e.v_offset) + "px" } : { top: "100%", y: Math.round(0 - (i + e.v_offset)) + "px" });
                t.hasClass("outer-bottom") || punchgs.TweenLite.set(t, a) },
            v = function(t, e) {
                var i = (t.outerHeight(!0), t.outerWidth(!0)),
                    a = "left" === e.h_align ? { left: "0px", x: Math.round(e.h_offset) + "px" } : "center" === e.h_align ? { left: "50%", x: Math.round(0 - i / 2 + e.h_offset) + "px" } : { left: "100%", x: Math.round(0 - (i + e.h_offset)) + "px" };
                punchgs.TweenLite.set(t, a) },
            w = function(t, e) {
                var i = t.closest(".tp-simpleresponsive").length > 0 ? t.closest(".tp-simpleresponsive") : t.closest(".tp-revslider-mainul").length > 0 ? t.closest(".tp-revslider-mainul") : t.closest(".rev_slider_wrapper").length > 0 ? t.closest(".rev_slider_wrapper") : t.parent().find(".tp-revslider-mainul"),
                    a = i.width(),
                    n = i.height();
                if (m(t, e), v(t, e), "outer-left" !== e.position || "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout ? "outer-right" !== e.position || "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout || punchgs.TweenLite.set(t, { right: 0 - t.outerWidth() + "px", x: e.h_offset + "px" }) : punchgs.TweenLite.set(t, { left: 0 - t.outerWidth() + "px", x: e.h_offset + "px" }), t.hasClass("tp-thumbs") || t.hasClass("tp-tabs")) {
                    var o = t.data("wr_padding"),
                        s = t.data("maxw"),
                        r = t.data("maxh"),
                        l = t.hasClass("tp-thumbs") ? t.find(".tp-thumb-mask") : t.find(".tp-tab-mask"),
                        d = parseInt(e.padding_top || 0, 0),
                        c = parseInt(e.padding_bottom || 0, 0);
                    s > a && "outer-left" !== e.position && "outer-right" !== e.position ? (punchgs.TweenLite.set(t, { left: "0px", x: 0, maxWidth: a - 2 * o + "px" }), punchgs.TweenLite.set(l, { maxWidth: a - 2 * o + "px" })) : (punchgs.TweenLite.set(t, { maxWidth: s + "px" }), punchgs.TweenLite.set(l, { maxWidth: s + "px" })), r + 2 * o > n && "outer-bottom" !== e.position && "outer-top" !== e.position ? (punchgs.TweenLite.set(t, { top: "0px", y: 0, maxHeight: d + c + (n - 2 * o) + "px" }), punchgs.TweenLite.set(l, { maxHeight: d + c + (n - 2 * o) + "px" })) : (punchgs.TweenLite.set(t, { maxHeight: r + "px" }), punchgs.TweenLite.set(l, { maxHeight: r + "px" })), "outer-left" !== e.position && "outer-right" !== e.position && (d = 0, c = 0), e.span === !0 && "vertical" === e.direction ? (punchgs.TweenLite.set(t, { maxHeight: d + c + (n - 2 * o) + "px", height: d + c + (n - 2 * o) + "px", top: 0 - d, y: 0 }), m(l, e)) : e.span === !0 && "horizontal" === e.direction && (punchgs.TweenLite.set(t, { maxWidth: "100%", width: a - 2 * o + "px", left: 0, x: 0 }), v(l, e)) } },
            y = function(t, e, i, a) { 0 === t.find(".tp-bullets").length && (e.style = void 0 === e.style ? "" : e.style, t.append('<div class="tp-bullets ' + e.style + " " + e.direction + '"></div>'));
                var n = t.find(".tp-bullets"),
                    o = i.data("index"),
                    s = e.tmp;
                jQuery.each(a.thumbs[i.index()].params, function(t, e) { s = s.replace(e.from, e.to) }), n.append('<div class="justaddedbullet tp-bullet">' + s + "</div>");
                var r = t.find(".justaddedbullet"),
                    l = t.find(".tp-bullet").length,
                    d = r.outerWidth() + parseInt(void 0 === e.space ? 0 : e.space, 0),
                    c = r.outerHeight() + parseInt(void 0 === e.space ? 0 : e.space, 0); "vertical" === e.direction ? (r.css({ top: (l - 1) * c + "px", left: "0px" }), n.css({ height: (l - 1) * c + r.outerHeight(), width: r.outerWidth() })) : (r.css({ left: (l - 1) * d + "px", top: "0px" }), n.css({ width: (l - 1) * d + r.outerWidth(), height: r.outerHeight() })), r.find(".tp-bullet-image").css({ backgroundImage: "url(" + a.thumbs[i.index()].src + ")" }), r.data("liref", o), r.click(function() { a.sc_indicator = "bullet", t.revcallslidewithid(o), t.find(".tp-bullet").removeClass("selected"), jQuery(this).addClass("selected") }), r.removeClass("justaddedbullet"), e.padding_top = parseInt(a.carousel.padding_top || 0, 0), e.padding_bottom = parseInt(a.carousel.padding_bottom || 0, 0), ("outer-left" == e.position || "outer-right" == e.position) && (a.outernav = !0), w(n, e) },
            b = function(t, e) { e = parseFloat(e), t = t.replace("#", "");
                var i = parseInt(t.substring(0, 2), 16),
                    a = parseInt(t.substring(2, 4), 16),
                    n = parseInt(t.substring(4, 6), 16),
                    o = "rgba(" + i + "," + a + "," + n + "," + e + ")";
                return o },
            x = function(t, e, i, a, n) {
                var o = "tp-thumb" === a ? ".tp-thumbs" : ".tp-tabs",
                    s = "tp-thumb" === a ? ".tp-thumb-mask" : ".tp-tab-mask",
                    r = "tp-thumb" === a ? ".tp-thumbs-inner-wrapper" : ".tp-tabs-inner-wrapper",
                    l = "tp-thumb" === a ? ".tp-thumb" : ".tp-tab",
                    d = "tp-thumb" === a ? ".tp-thumb-image" : ".tp-tab-image";
                if (e.visibleAmount = e.visibleAmount > n.slideamount ? n.slideamount : e.visibleAmount, e.sliderLayout = n.sliderLayout, 0 === t.parent().find(o).length) { e.style = void 0 === e.style ? "" : e.style;
                    var c = e.span === !0 ? "tp-span-wrapper" : "",
                        p = '<div class="' + a + "s " + c + " " + e.position + " " + e.style + '"><div class="' + a + '-mask"><div class="' + a + 's-inner-wrapper" style="position:relative;"></div></div></div>'; "outer-top" === e.position ? t.parent().prepend(p) : "outer-bottom" === e.position ? t.after(p) : t.append(p), e.padding_top = parseInt(n.carousel.padding_top || 0, 0), e.padding_bottom = parseInt(n.carousel.padding_bottom || 0, 0), ("outer-left" == e.position || "outer-right" == e.position) && (n.outernav = !0) }
                var h = i.data("index"),
                    u = t.parent().find(o),
                    f = u.find(s),
                    g = f.find(r),
                    m = "horizontal" === e.direction ? e.width * e.visibleAmount + e.space * (e.visibleAmount - 1) : e.width,
                    v = "horizontal" === e.direction ? e.height : e.height * e.visibleAmount + e.space * (e.visibleAmount - 1),
                    y = e.tmp;
                jQuery.each(n.thumbs[i.index()].params, function(t, e) { y = y.replace(e.from, e.to) }), g.append('<div data-liindex="' + i.index() + '" data-liref="' + h + '" class="justaddedthumb ' + a + '" style="width:' + e.width + "px;height:" + e.height + 'px;">' + y + "</div>");
                var x = u.find(".justaddedthumb"),
                    _ = u.find(l).length,
                    T = x.outerWidth() + parseInt(void 0 === e.space ? 0 : e.space, 0),
                    C = x.outerHeight() + parseInt(void 0 === e.space ? 0 : e.space, 0);
                x.find(d).css({ backgroundImage: "url(" + n.thumbs[i.index()].src + ")" }), "vertical" === e.direction ? (x.css({ top: (_ - 1) * C + "px", left: "0px" }), g.css({ height: (_ - 1) * C + x.outerHeight(), width: x.outerWidth() })) : (x.css({ left: (_ - 1) * T + "px", top: "0px" }), g.css({ width: (_ - 1) * T + x.outerWidth(), height: x.outerHeight() })), u.data("maxw", m), u.data("maxh", v), u.data("wr_padding", e.wrapper_padding);
                var S = "outer-top" === e.position || "outer-bottom" === e.position ? "relative" : "absolute"; "outer-top" !== e.position && "outer-bottom" !== e.position || "center" !== e.h_align ? "0" : "auto", f.css({ maxWidth: m + "px", maxHeight: v + "px", overflow: "hidden", position: "relative" }), u.css({ maxWidth: m + "px", maxHeight: v + "px", overflow: "visible", position: S, background: b(e.wrapper_color, e.wrapper_opacity), padding: e.wrapper_padding + "px", boxSizing: "contet-box" }), x.click(function() { n.sc_indicator = "bullet";
                    var e = t.parent().find(r).data("distance");
                    e = void 0 === e ? 0 : e, Math.abs(e) < 10 && (t.revcallslidewithid(h), t.parent().find(o).removeClass("selected"), jQuery(this).addClass("selected")) }), x.removeClass("justaddedthumb"), w(u, e) },
            _ = function(t) {
                var e = t.c.parent().find(".outer-top"),
                    i = t.c.parent().find(".outer-bottom");
                t.top_outer = e.hasClass("tp-forcenotvisible") ? 0 : e.outerHeight() || 0, t.bottom_outer = i.hasClass("tp-forcenotvisible") ? 0 : i.outerHeight() || 0 },
            T = function(t, e, i, a) { e > i || i > a ? t.addClass("tp-forcenotvisible") : t.removeClass("tp-forcenotvisible") }
    }(jQuery), ! function(t) {
        var e = jQuery.fn.revolution,
            i = e.is_mobile();
        jQuery.extend(!0, e, { checkForParallax: function(t, a) {
                var n = a.parallax;
                if (i && "on" == n.disable_onmobile) return !1;
                ("3D" == n.type || "3d" == n.type) && (punchgs.TweenLite.set(a.c, { overflow: n.ddd_overflow }), punchgs.TweenLite.set(a.ul, { overflow: n.ddd_overflow }), "carousel" != a.sliderType && "on" == n.ddd_shadow && (a.c.prepend('<div class="dddwrappershadow"></div>'), punchgs.TweenLite.set(a.c.find(".dddwrappershadow"), { force3D: "auto", transformPerspective: 1600, transformOrigin: "50% 50%", width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 0 }))), a.li.each(function() {
                    var t = jQuery(this);
                    if ("3D" == n.type || "3d" == n.type) { t.find(".slotholder").wrapAll('<div class="dddwrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden"></div>'), t.find(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layer" style="width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:5;overflow:' + n.ddd_layer_overflow + ';"></div>'), t.find(".rs-parallaxlevel-tobggroup").closest(".tp-parallax-wrap").wrapAll('<div class="dddwrapper-layertobggroup" style="position:absolute;top:0px;left:0px;z-index:50;width:100%;height:100%"></div>');
                        var e = t.find(".dddwrapper"),
                            i = t.find(".dddwrapper-layer"),
                            o = t.find(".dddwrapper-layertobggroup");
                        o.appendTo(e), "carousel" == a.sliderType && ("on" == n.ddd_shadow && e.addClass("dddwrappershadow"), punchgs.TweenLite.set(e, { borderRadius: a.carousel.border_radius })), punchgs.TweenLite.set(t, { overflow: "visible", transformStyle: "preserve-3d", perspective: 1600 }), punchgs.TweenLite.set(e, { force3D: "auto", transformOrigin: "50% 50%" }), punchgs.TweenLite.set(i, { force3D: "auto", transformOrigin: "50% 50%", zIndex: 5 }), punchgs.TweenLite.set(a.ul, { transformStyle: "preserve-3d", transformPerspective: 1600 }) } });
                for (var o = 1; o <= n.levels.length; o++) a.c.find(".rs-parallaxlevel-" + o).each(function() {
                    var t = jQuery(this),
                        e = t.closest(".tp-parallax-wrap");
                    e.data("parallaxlevel", n.levels[o - 1]), e.addClass("tp-parallax-container") });
                ("mouse" == n.type || "scroll+mouse" == n.type || "mouse+scroll" == n.type || "3D" == n.type || "3d" == n.type) && (t.mouseenter(function(e) {
                    var i = t.find(".active-revslide"),
                        a = t.offset().top,
                        n = t.offset().left,
                        o = e.pageX - n,
                        s = e.pageY - a;
                    i.data("enterx", o), i.data("entery", s) }), t.on("mousemove.hoverdir, mouseleave.hoverdir, trigger3dpath", function(e, i) {
                    var o = i && i.li ? i.li : t.find(".active-revslide");
                    if ("enterpoint" == n.origo) {
                        var s = t.offset().top,
                            r = t.offset().left;
                        void 0 == o.data("enterx") && o.data("enterx", e.pageX - r), void 0 == o.data("entery") && o.data("entery", e.pageY - s);
                        var l = o.data("enterx") || e.pageX - r,
                            d = o.data("entery") || e.pageY - s,
                            c = l - (e.pageX - r),
                            p = d - (e.pageY - s),
                            h = n.speed / 1e3 || .4 } else var s = t.offset().top,
                        r = t.offset().left,
                        c = a.conw / 2 - (e.pageX - r),
                        p = a.conh / 2 - (e.pageY - s),
                        h = n.speed / 1e3 || 3; "mouseleave" == e.type && (c = n.ddd_lasth || 0, p = n.ddd_lastv || 0, h = 1.5);
                    var u = [];
                    if (o.find(".tp-parallax-container").each(function(t) { u.push(jQuery(this)) }), t.find(".tp-static-layers .tp-parallax-container").each(function() { u.push(jQuery(this)) }), jQuery.each(u, function() {
                            var t = jQuery(this),
                                e = parseInt(t.data("parallaxlevel"), 0),
                                i = "3D" == n.type || "3d" == n.type ? e / 200 : e / 100,
                                a = c * i,
                                o = p * i; "scroll+mouse" == n.type || "mouse+scroll" == n.type ? punchgs.TweenLite.to(t, h, { force3D: "auto", x: a, ease: punchgs.Power3.easeOut, overwrite: "all" }) : punchgs.TweenLite.to(t, h, { force3D: "auto", x: a, y: o, ease: punchgs.Power3.easeOut, overwrite: "all" }) }), "3D" == n.type || "3d" == n.type) {
                        var f = ".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer"; "carousel" === a.sliderType && (f = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer"), a.c.find(f).each(function() {
                            var t = jQuery(this),
                                i = n.levels[n.levels.length - 1] / 200,
                                o = c * i,
                                s = p * i,
                                r = 0 == a.conw ? 0 : Math.round(c / a.conw * i * 100) || 0,
                                l = 0 == a.conh ? 0 : Math.round(p / a.conh * i * 100) || 0,
                                d = t.closest("li"),
                                u = 0,
                                f = !1;
                            t.hasClass("dddwrapper-layer") && (u = n.ddd_z_correction || 65, f = !0), t.hasClass("dddwrapper-layer") && (o = 0, s = 0), d.hasClass("active-revslide") || "carousel" != a.sliderType ? "on" != n.ddd_bgfreeze || f ? punchgs.TweenLite.to(t, h, { rotationX: l, rotationY: -r, x: o, z: u, y: s, ease: punchgs.Power3.easeOut, overwrite: "all" }) : punchgs.TweenLite.to(t, .5, { force3D: "auto", rotationY: 0, rotationX: 0, z: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }) : punchgs.TweenLite.to(t, .5, { force3D: "auto", rotationY: 0, z: 0, x: 0, y: 0, rotationX: 0, z: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }), "mouseleave" == e.type && punchgs.TweenLite.to(jQuery(this), 3.8, { z: 0, ease: punchgs.Power3.easeOut }) }) } }), i && (window.ondeviceorientation = function(e) {
                    var i = Math.round(e.beta || 0) - 70,
                        o = Math.round(e.gamma || 0),
                        s = t.find(".active-revslide");
                    if (jQuery(window).width() > jQuery(window).height()) {
                        var r = o;
                        o = i, i = r }
                    var l = t.width(),
                        d = t.height(),
                        c = 360 / l * o,
                        p = 180 / d * i,
                        h = n.speed / 1e3 || 3,
                        u = [];
                    if (s.find(".tp-parallax-container").each(function(t) { u.push(jQuery(this)) }), t.find(".tp-static-layers .tp-parallax-container").each(function() { u.push(jQuery(this)) }), jQuery.each(u, function() {
                            var t = jQuery(this),
                                e = parseInt(t.data("parallaxlevel"), 0),
                                i = e / 100,
                                a = c * i * 2,
                                n = p * i * 4;
                            punchgs.TweenLite.to(t, h, { force3D: "auto", x: a, y: n, ease: punchgs.Power3.easeOut, overwrite: "all" }) }), "3D" == n.type || "3d" == n.type) {
                        var f = ".tp-revslider-slidesli .dddwrapper, .dddwrappershadow, .tp-revslider-slidesli .dddwrapper-layer"; "carousel" === a.sliderType && (f = ".tp-revslider-slidesli .dddwrapper, .tp-revslider-slidesli .dddwrapper-layer"), a.c.find(f).each(function() {
                            var t = jQuery(this),
                                i = n.levels[n.levels.length - 1] / 200;
                            offsh = c * i, offsv = p * i * 3, offrv = 0 == a.conw ? 0 : Math.round(c / a.conw * i * 500) || 0, offrh = 0 == a.conh ? 0 : Math.round(p / a.conh * i * 700) || 0, li = t.closest("li"), zz = 0, itslayer = !1, t.hasClass("dddwrapper-layer") && (zz = n.ddd_z_correction || 65, itslayer = !0), t.hasClass("dddwrapper-layer") && (offsh = 0, offsv = 0), li.hasClass("active-revslide") || "carousel" != a.sliderType ? "on" != n.ddd_bgfreeze || itslayer ? punchgs.TweenLite.to(t, h, { rotationX: offrh, rotationY: -offrv, x: offsh, z: zz, y: offsv, ease: punchgs.Power3.easeOut, overwrite: "all" }) : punchgs.TweenLite.to(t, .5, { force3D: "auto", rotationY: 0, rotationX: 0, z: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }) : punchgs.TweenLite.to(t, .5, { force3D: "auto", rotationY: 0, z: 0, x: 0, y: 0, rotationX: 0, z: 0, ease: punchgs.Power3.easeOut, overwrite: "all" }), "mouseleave" == e.type && punchgs.TweenLite.to(jQuery(this), 3.8, { z: 0, ease: punchgs.Power3.easeOut }) }) } })), e.scrollTicker(a, t) }, scrollTicker: function(t, a) { 1 != t.scrollTicker && (t.scrollTicker = !0, i ? (punchgs.TweenLite.ticker.fps(150), punchgs.TweenLite.ticker.addEventListener("tick", function() { e.scrollHandling(t) }, a, !1, 1)) : jQuery(window).on("scroll mousewheel DOMMouseScroll", function() { e.scrollHandling(t, !0) })), e.scrollHandling(t, !0) }, scrollHandling: function(t, a) {
                function n(t, e) { t.lastscrolltop = e }
                t.lastwindowheight = t.lastwindowheight || jQuery(window).height();
                var o = t.c.offset().top,
                    s = jQuery(window).scrollTop(),
                    r = new Object,
                    l = t.viewPort,
                    d = t.parallax;
                if (t.lastscrolltop == s && !t.duringslidechange && !a) return !1;
                punchgs.TweenLite.delayedCall(.2, n, [t, s]), r.top = o - s, r.h = 0 == t.conh ? t.c.height() : t.conh, r.bottom = o - s + r.h;
                var c = r.top < 0 ? r.top / r.h : r.bottom > t.lastwindowheight ? (r.bottom - t.lastwindowheight) / r.h : 0;
                if (t.scrollproc = c, e.callBackHandling && e.callBackHandling(t, "parallax", "start"), l.enable) {
                    var p = 1 - Math.abs(c);
                    p = 0 > p ? 0 : p, jQuery.isNumeric(l.visible_area) || -1 !== l.visible_area.indexOf("%") && (l.visible_area = parseInt(l.visible_area) / 100), 1 - l.visible_area <= p ? t.inviewport || (t.inviewport = !0, e.enterInViewPort(t)) : t.inviewport && (t.inviewport = !1, e.leaveViewPort(t)) }
                if (i && "on" == t.parallax.disable_onmobile) return !1;
                var h = new punchgs.TimelineLite;
                h.pause(), "3d" != d.type && "3D" != d.type && (("scroll" == d.type || "scroll+mouse" == d.type || "mouse+scroll" == d.type) && t.c.find(".tp-parallax-container").each(function(e) {
                    var i = jQuery(this),
                        a = parseInt(i.data("parallaxlevel"), 0) / 100,
                        n = c * -(a * t.conh) || 0;
                    i.data("parallaxoffset", n), h.add(punchgs.TweenLite.set(i, { force3D: "auto", y: n }), 0) }), t.c.find(".tp-revslider-slidesli .slotholder, .tp-revslider-slidesli .rs-background-video-layer").each(function() {
                    var e = jQuery(this),
                        i = e.data("bgparallax") || t.parallax.bgparallax;
                    if (i = "on" == i ? 1 : i, void 0 !== i || "off" !== i) {
                        var a = t.parallax.levels[parseInt(i, 0) - 1] / 100,
                            n = c * -(a * t.conh) || 0;
                        jQuery.isNumeric(n) && h.add(punchgs.TweenLite.set(e, { position: "absolute", top: "0px", left: "0px", backfaceVisibility: "hidden", force3D: "true", y: n + "px" }), 0) } })), e.callBackHandling && e.callBackHandling(t, "parallax", "end"), h.play(0) } }) }(jQuery), ! function() {
        var t = jQuery.fn.revolution;
        jQuery.extend(!0, t, { animateSlide: function(t, e, i, a, o, s, r, l, d) {
                return n(t, e, i, a, o, s, r, l, d) } });
        var e = function(e, i, a, n) {
                var o = e,
                    s = o.find(".defaultimg"),
                    r = o.data("zoomstart"),
                    l = o.data("rotationstart");
                void 0 != s.data("currotate") && (l = s.data("currotate")), void 0 != s.data("curscale") && "box" == n ? r = 100 * s.data("curscale") : void 0 != s.data("curscale") && (r = s.data("curscale")), t.slotSize(s, i);
                var d = s.attr("src"),
                    c = s.css("backgroundColor"),
                    p = i.width,
                    h = i.height,
                    u = s.data("fxof"),
                    f = 0; "on" == i.autoHeight && (h = i.c.height()), void 0 == u && (u = 0);
                var g = 0,
                    m = s.data("bgfit"),
                    v = s.data("bgrepeat"),
                    w = s.data("bgposition");
                switch (void 0 == m && (m = "cover"), void 0 == v && (v = "no-repeat"), void 0 == w && (w = "center center"), n) {
                    case "box":
                        for (var y = 0, b = 0, x = 0; x < i.slots; x++) { b = 0;
                            for (var _ = 0; _ < i.slots; _++) o.append('<div class="slot" style="position:absolute;top:' + (f + b) + "px;left:" + (u + y) + "px;width:" + i.slotw + "px;height:" + i.sloth + 'px;overflow:hidden;"><div class="slotslide" data-x="' + y + '" data-y="' + b + '" style="position:absolute;top:0px;left:0px;width:' + i.slotw + "px;height:" + i.sloth + 'px;overflow:hidden;"><div style="position:absolute;top:' + (0 - b) + "px;left:" + (0 - y) + "px;width:" + p + "px;height:" + h + "px;background-color:" + c + ";background-image:url(" + d + ");background-repeat:" + v + ";background-size:" + m + ";background-position:" + w + ';"></div></div></div>'), b += i.sloth, void 0 != r && void 0 != l && punchgs.TweenLite.set(o.find(".slot").last(), { rotationZ: l });
                            y += i.slotw }
                        break;
                    case "vertical":
                    case "horizontal":
                        if ("horizontal" == n) {
                            if (!a) var g = 0 - i.slotw;
                            for (var _ = 0; _ < i.slots; _++) o.append('<div class="slot" style="position:absolute;top:' + (0 + f) + "px;left:" + (u + _ * i.slotw) + "px;overflow:hidden;width:" + (i.slotw + .6) + "px;height:" + h + 'px"><div class="slotslide" style="position:absolute;top:0px;left:' + g + "px;width:" + (i.slotw + .6) + "px;height:" + h + 'px;overflow:hidden;"><div style="background-color:' + c + ";position:absolute;top:0px;left:" + (0 - _ * i.slotw) + "px;width:" + p + "px;height:" + h + "px;background-image:url(" + d + ");background-repeat:" + v + ";background-size:" + m + ";background-position:" + w + ';"></div></div></div>'), void 0 != r && void 0 != l && punchgs.TweenLite.set(o.find(".slot").last(), { rotationZ: l }) } else {
                            if (!a) var g = 0 - i.sloth;
                            for (var _ = 0; _ < i.slots + 2; _++) o.append('<div class="slot" style="position:absolute;top:' + (f + _ * i.sloth) + "px;left:" + u + "px;overflow:hidden;width:" + p + "px;height:" + i.sloth + 'px"><div class="slotslide" style="position:absolute;top:' + g + "px;left:0px;width:" + p + "px;height:" + i.sloth + 'px;overflow:hidden;"><div style="background-color:' + c + ";position:absolute;top:" + (0 - _ * i.sloth) + "px;left:0px;width:" + p + "px;height:" + h + "px;background-image:url(" + d + ");background-repeat:" + v + ";background-size:" + m + ";background-position:" + w + ';"></div></div></div>'), void 0 != r && void 0 != l && punchgs.TweenLite.set(o.find(".slot").last(), { rotationZ: l }) } } },
            i = function(t, e, i, a, n) {
                function o() {
                    jQuery.each(b, function(t, e) {
                        (e[0] == i || e[8] == i) && (m = e[1], v = e[2], w = y), y += 1
                    })
                }
                var s = punchgs.Power1.easeIn,
                    r = punchgs.Power1.easeOut,
                    l = punchgs.Power1.easeInOut,
                    d = punchgs.Power2.easeIn,
                    c = punchgs.Power2.easeOut,
                    p = punchgs.Power2.easeInOut,
                    h = (punchgs.Power3.easeIn, punchgs.Power3.easeOut),
                    u = punchgs.Power3.easeInOut,
                    f = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
                    g = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27],
                    m = 0,
                    v = 1,
                    w = 0,
                    y = 0,
                    b = (new Array, [
                        ["boxslide", 0, 1, 10, 0, "box", !1, null, 0, r, r, 500, 6],
                        ["boxfade", 1, 0, 10, 0, "box", !1, null, 1, l, l, 700, 5],
                        ["slotslide-horizontal", 2, 0, 0, 200, "horizontal", !0, !1, 2, p, p, 700, 3],
                        ["slotslide-vertical", 3, 0, 0, 200, "vertical", !0, !1, 3, p, p, 700, 3],
                        ["curtain-1", 4, 3, 0, 0, "horizontal", !0, !0, 4, r, r, 300, 5],
                        ["curtain-2", 5, 3, 0, 0, "horizontal", !0, !0, 5, r, r, 300, 5],
                        ["curtain-3", 6, 3, 25, 0, "horizontal", !0, !0, 6, r, r, 300, 5],
                        ["slotzoom-horizontal", 7, 0, 0, 400, "horizontal", !0, !0, 7, r, r, 300, 7],
                        ["slotzoom-vertical", 8, 0, 0, 0, "vertical", !0, !0, 8, c, c, 500, 8],
                        ["slotfade-horizontal", 9, 0, 0, 500, "horizontal", !0, null, 9, c, c, 500, 25],
                        ["slotfade-vertical", 10, 0, 0, 500, "vertical", !0, null, 10, c, c, 500, 25],
                        ["fade", 11, 0, 1, 300, "horizontal", !0, null, 11, p, p, 1e3, 1],
                        ["crossfade", 11, 1, 1, 300, "horizontal", !0, null, 11, p, p, 1e3, 1],
                        ["fadethroughdark", 11, 2, 1, 300, "horizontal", !0, null, 11, p, p, 1e3, 1],
                        ["fadethroughlight", 11, 3, 1, 300, "horizontal", !0, null, 11, p, p, 1e3, 1],
                        ["fadethroughtransparent", 11, 4, 1, 300, "horizontal", !0, null, 11, p, p, 1e3, 1],
                        ["slideleft", 12, 0, 1, 0, "horizontal", !0, !0, 12, u, u, 1e3, 1],
                        ["slideup", 13, 0, 1, 0, "horizontal", !0, !0, 13, u, u, 1e3, 1],
                        ["slidedown", 14, 0, 1, 0, "horizontal", !0, !0, 14, u, u, 1e3, 1],
                        ["slideright", 15, 0, 1, 0, "horizontal", !0, !0, 15, u, u, 1e3, 1],
                        ["slideoverleft", 12, 7, 1, 0, "horizontal", !0, !0, 12, u, u, 1e3, 1],
                        ["slideoverup", 13, 7, 1, 0, "horizontal", !0, !0, 13, u, u, 1e3, 1],
                        ["slideoverdown", 14, 7, 1, 0, "horizontal", !0, !0, 14, u, u, 1e3, 1],
                        ["slideoverright", 15, 7, 1, 0, "horizontal", !0, !0, 15, u, u, 1e3, 1],
                        ["slideremoveleft", 12, 8, 1, 0, "horizontal", !0, !0, 12, u, u, 1e3, 1],
                        ["slideremoveup", 13, 8, 1, 0, "horizontal", !0, !0, 13, u, u, 1e3, 1],
                        ["slideremovedown", 14, 8, 1, 0, "horizontal", !0, !0, 14, u, u, 1e3, 1],
                        ["slideremoveright", 15, 8, 1, 0, "horizontal", !0, !0, 15, u, u, 1e3, 1],
                        ["papercut", 16, 0, 0, 600, "", null, null, 16, u, u, 1e3, 2],
                        ["3dcurtain-horizontal", 17, 0, 20, 100, "vertical", !1, !0, 17, l, l, 500, 7],
                        ["3dcurtain-vertical", 18, 0, 10, 100, "horizontal", !1, !0, 18, l, l, 500, 5],
                        ["cubic", 19, 0, 20, 600, "horizontal", !1, !0, 19, u, u, 500, 1],
                        ["cube", 19, 0, 20, 600, "horizontal", !1, !0, 20, u, u, 500, 1],
                        ["flyin", 20, 0, 4, 600, "vertical", !1, !0, 21, h, u, 500, 1],
                        ["turnoff", 21, 0, 1, 500, "horizontal", !1, !0, 22, u, u, 500, 1],
                        ["incube", 22, 0, 20, 200, "horizontal", !1, !0, 23, p, p, 500, 1],
                        ["cubic-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 24, c, c, 500, 1],
                        ["cube-horizontal", 23, 0, 20, 500, "vertical", !1, !0, 25, c, c, 500, 1],
                        ["incube-horizontal", 24, 0, 20, 500, "vertical", !1, !0, 26, p, p, 500, 1],
                        ["turnoff-vertical", 25, 0, 1, 200, "horizontal", !1, !0, 27, p, p, 500, 1],
                        ["fadefromright", 12, 1, 1, 0, "horizontal", !0, !0, 28, p, p, 1e3, 1],
                        ["fadefromleft", 15, 1, 1, 0, "horizontal", !0, !0, 29, p, p, 1e3, 1],
                        ["fadefromtop", 14, 1, 1, 0, "horizontal", !0, !0, 30, p, p, 1e3, 1],
                        ["fadefrombottom", 13, 1, 1, 0, "horizontal", !0, !0, 31, p, p, 1e3, 1],
                        ["fadetoleftfadefromright", 12, 2, 1, 0, "horizontal", !0, !0, 32, p, p, 1e3, 1],
                        ["fadetorightfadefromleft", 15, 2, 1, 0, "horizontal", !0, !0, 33, p, p, 1e3, 1],
                        ["fadetobottomfadefromtop", 14, 2, 1, 0, "horizontal", !0, !0, 34, p, p, 1e3, 1],
                        ["fadetotopfadefrombottom", 13, 2, 1, 0, "horizontal", !0, !0, 35, p, p, 1e3, 1],
                        ["parallaxtoright", 12, 3, 1, 0, "horizontal", !0, !0, 36, p, d, 1500, 1],
                        ["parallaxtoleft", 15, 3, 1, 0, "horizontal", !0, !0, 37, p, d, 1500, 1],
                        ["parallaxtotop", 14, 3, 1, 0, "horizontal", !0, !0, 38, p, s, 1500, 1],
                        ["parallaxtobottom", 13, 3, 1, 0, "horizontal", !0, !0, 39, p, s, 1500, 1],
                        ["scaledownfromright", 12, 4, 1, 0, "horizontal", !0, !0, 40, p, d, 1e3, 1],
                        ["scaledownfromleft", 15, 4, 1, 0, "horizontal", !0, !0, 41, p, d, 1e3, 1],
                        ["scaledownfromtop", 14, 4, 1, 0, "horizontal", !0, !0, 42, p, d, 1e3, 1],
                        ["scaledownfrombottom", 13, 4, 1, 0, "horizontal", !0, !0, 43, p, d, 1e3, 1],
                        ["zoomout", 13, 5, 1, 0, "horizontal", !0, !0, 44, p, d, 1e3, 1],
                        ["zoomin", 13, 6, 1, 0, "horizontal", !0, !0, 45, p, d, 1e3, 1],
                        ["slidingoverlayup", 27, 0, 1, 0, "horizontal", !0, !0, 47, l, r, 2e3, 1],
                        ["slidingoverlaydown", 28, 0, 1, 0, "horizontal", !0, !0, 48, l, r, 2e3, 1],
                        ["slidingoverlayright", 30, 0, 1, 0, "horizontal", !0, !0, 49, l, r, 2e3, 1],
                        ["slidingoverlayleft", 29, 0, 1, 0, "horizontal", !0, !0, 50, l, r, 2e3, 1],
                        ["parallaxcirclesup", 31, 0, 1, 0, "horizontal", !0, !0, 51, p, s, 1500, 1],
                        ["parallaxcirclesdown", 32, 0, 1, 0, "horizontal", !0, !0, 52, p, s, 1500, 1],
                        ["parallaxcirclesright", 33, 0, 1, 0, "horizontal", !0, !0, 53, p, s, 1500, 1],
                        ["parallaxcirclesleft", 34, 0, 1, 0, "horizontal", !0, !0, 54, p, s, 1500, 1],
                        ["notransition", 26, 0, 1, 0, "horizontal", !0, null, 46, p, d, 1e3, 1],
                        ["parallaxright", 12, 3, 1, 0, "horizontal", !0, !0, 55, p, d, 1500, 1],
                        ["parallaxleft", 15, 3, 1, 0, "horizontal", !0, !0, 56, p, d, 1500, 1],
                        ["parallaxup", 14, 3, 1, 0, "horizontal", !0, !0, 57, p, s, 1500, 1],
                        ["parallaxdown", 13, 3, 1, 0, "horizontal", !0, !0, 58, p, s, 1500, 1]
                    ]);
                e.duringslidechange = !0, e.testanims = !1, 1 == e.testanims && (e.nexttesttransform = void 0 === e.nexttesttransform ? 34 : e.nexttesttransform + 1, e.nexttesttransform = e.nexttesttransform > 70 ? 0 : e.nexttesttransform, i = b[e.nexttesttransform][0], console.log(i + "  " + e.nexttesttransform + "  " + b[e.nexttesttransform][1] + "  " + b[e.nexttesttransform][2])), jQuery.each(["parallaxcircles", "slidingoverlay", "slide", "slideover", "slideremove", "parallax"], function(t, e) { i == e + "horizontal" && (i = 1 != n ? e + "left" : e + "right"), i == e + "vertical" && (i = 1 != n ? e + "up" : e + "down") }), "random" == i && (i = Math.round(Math.random() * b.length - 1), i > b.length - 1 && (i = b.length - 1)), "random-static" == i && (i = Math.round(Math.random() * f.length - 1), i > f.length - 1 && (i = f.length - 1), i = f[i]), "random-premium" == i && (i = Math.round(Math.random() * g.length - 1), i > g.length - 1 && (i = g.length - 1), i = g[i]);
                var x = [12, 13, 14, 15, 16, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
                if (1 == e.isJoomla && void 0 != window.MooTools && -1 != x.indexOf(i)) {
                    var _ = Math.round(Math.random() * (g.length - 2)) + 1;
                    _ > g.length - 1 && (_ = g.length - 1), 0 == _ && (_ = 1), i = g[_] }
                o(), m > 30 && (m = 30), 0 > m && (m = 0);
                var T = new Object;
                return T.nexttrans = m, T.STA = b[w], T.specials = v, T
            },
            a = function(t, e) {
                return void 0 == e || jQuery.isNumeric(t) ? t : void 0 == t ? t : t.split(",")[e] },
            n = function(t, n, o, s, r, l, d, c, p) {
                function h(t, e, i, a, n) {
                    var o = t.find(".slot"),
                        s = 6,
                        r = [2, 1.2, .9, .7, .55, .42],
                        l = t.width(),
                        c = t.height();
                    o.wrap('<div class="slot-circle-wrapper" style="overflow:hidden;position:absolute;border:1px solid #fff"></div>');
                    for (var h = 0; s > h; h++) o.parent().clone(!1).appendTo(d);
                    t.find(".slot-circle-wrapper").each(function(t) {
                        if (s > t) {
                            var a = jQuery(this),
                                o = a.find(".slot"),
                                d = l > c ? r[t] * l : r[t] * c,
                                h = d,
                                u = 0 + (h / 2 - l / 2),
                                f = 0 + (d / 2 - c / 2),
                                g = 0 != t ? "50%" : "0",
                                m = 31 == i ? c / 2 - d / 2 : 32 == i ? c / 2 - d / 2 : c / 2 - d / 2,
                                v = 33 == i ? l / 2 - h / 2 : 34 == i ? l - h : l / 2 - h / 2,
                                w = { scale: 1, transformOrigo: "50% 50%", width: h + "px", height: d + "px", top: m + "px", left: v + "px", borderRadius: g },
                                y = { scale: 1, top: c / 2 - d / 2, left: l / 2 - h / 2, ease: n },
                                b = 31 == i ? f : 32 == i ? f : f,
                                x = 33 == i ? u : 34 == i ? u + l / 2 : u,
                                _ = { width: l, height: c, autoAlpha: 1, top: b + "px", position: "absolute", left: x + "px" },
                                T = { top: f + "px", left: u + "px", ease: n },
                                C = e,
                                S = 0;
                            p.add(punchgs.TweenLite.fromTo(a, C, w, y), S), p.add(punchgs.TweenLite.fromTo(o, C, _, T), S), p.add(punchgs.TweenLite.fromTo(a, .001, { autoAlpha: 0 }, { autoAlpha: 1 }), 0) } }) }
                var u = l.index(),
                    f = r.index(),
                    g = u > f ? 1 : 0; "arrow" == s.sc_indicator && (g = s.sc_indicator_dir);
                var m = i(o, s, n, d, g),
                    v = m.STA,
                    w = m.specials,
                    t = m.nexttrans; "on" == d.data("kenburns") && (t = 11);
                var y = r.data("nexttransid") || 0,
                    b = a(r.data("masterspeed"), y);
                b = "default" === b ? v[11] : "random" === b ? Math.round(1e3 * Math.random() + 300) : void 0 != b ? parseInt(b, 0) : v[11], b = b > s.delay ? s.delay : b, b += v[4], s.slots = a(r.data("slotamount"), y), s.slots = void 0 == s.slots || "default" == s.slots ? v[12] : "random" == s.slots ? Math.round(12 * Math.random() + 4) : s.slots, s.slots = s.slots < 1 ? "boxslide" == n ? Math.round(6 * Math.random() + 3) : "flyin" == n ? Math.round(4 * Math.random() + 1) : s.slots : s.slots, s.slots = (4 == t || 5 == t || 6 == t) && s.slots < 3 ? 3 : s.slots, s.slots = 0 != v[3] ? Math.min(s.slots, v[3]) : s.slots, s.slots = 9 == t ? s.width / 20 : 10 == t ? s.height / 20 : s.slots, s.rotate = a(r.data("rotate"), y), s.rotate = void 0 == s.rotate || "default" == s.rotate ? 0 : 999 == s.rotate || "random" == s.rotate ? Math.round(360 * Math.random()) : s.rotate, s.rotate = !jQuery.support.transition || s.ie || s.ie9 ? 0 : s.rotate, 11 != t && (null != v[7] && e(c, s, v[7], v[5]), null != v[6] && e(d, s, v[6], v[5])), p.add(punchgs.TweenLite.set(d.find(".defaultvid"), { y: 0, x: 0, top: 0, left: 0, scale: 1 }), 0), p.add(punchgs.TweenLite.set(c.find(".defaultvid"), { y: 0, x: 0, top: 0, left: 0, scale: 1 }), 0), p.add(punchgs.TweenLite.set(d.find(".defaultvid"), { y: "+0%", x: "+0%" }), 0), p.add(punchgs.TweenLite.set(c.find(".defaultvid"), { y: "+0%", x: "+0%" }), 0), p.add(punchgs.TweenLite.set(d, { autoAlpha: 1, y: "+0%", x: "+0%" }), 0), p.add(punchgs.TweenLite.set(c, { autoAlpha: 1, y: "+0%", x: "+0%" }), 0), p.add(punchgs.TweenLite.set(d.parent(), { backgroundColor: "transparent" }), 0), p.add(punchgs.TweenLite.set(c.parent(), { backgroundColor: "transparent" }), 0);
                var x = a(r.data("easein"), y),
                    _ = a(r.data("easeout"), y);
                if (x = "default" === x ? v[9] || punchgs.Power2.easeInOut : x || v[9] || punchgs.Power2.easeInOut, _ = "default" === _ ? v[10] || punchgs.Power2.easeInOut : _ || v[10] || punchgs.Power2.easeInOut, 0 == t) {
                    var T = Math.ceil(s.height / s.sloth),
                        C = 0;
                    d.find(".slotslide").each(function(t) {
                        var e = jQuery(this);
                        C += 1, C == T && (C = 0), p.add(punchgs.TweenLite.from(e, b / 600, { opacity: 0, top: 0 - s.sloth, left: 0 - s.slotw, rotation: s.rotate, force3D: "auto", ease: x }), (15 * t + 30 * C) / 1500) }) }
                if (1 == t) {
                    var S, k = 0;
                    d.find(".slotslide").each(function(t) {
                        var e = jQuery(this),
                            i = Math.random() * b + 300,
                            a = 500 * Math.random() + 200;
                        i + a > S && (S = a + a, k = t), p.add(punchgs.TweenLite.from(e, i / 1e3, { autoAlpha: 0, force3D: "auto", rotation: s.rotate, ease: x }), a / 1e3) }) }
                if (2 == t) {
                    var P = new punchgs.TimelineLite;
                    c.find(".slotslide").each(function() {
                        var t = jQuery(this);
                        P.add(punchgs.TweenLite.to(t, b / 1e3, { left: s.slotw, ease: x, force3D: "auto", rotation: 0 - s.rotate }), 0), p.add(P, 0) }), d.find(".slotslide").each(function() {
                        var t = jQuery(this);
                        P.add(punchgs.TweenLite.from(t, b / 1e3, { left: 0 - s.slotw, ease: x, force3D: "auto", rotation: s.rotate }), 0), p.add(P, 0) }) }
                if (3 == t) {
                    var P = new punchgs.TimelineLite;
                    c.find(".slotslide").each(function() {
                        var t = jQuery(this);
                        P.add(punchgs.TweenLite.to(t, b / 1e3, { top: s.sloth, ease: x, rotation: s.rotate, force3D: "auto", transformPerspective: 600 }), 0), p.add(P, 0) }), d.find(".slotslide").each(function() {
                        var t = jQuery(this);
                        P.add(punchgs.TweenLite.from(t, b / 1e3, { top: 0 - s.sloth, rotation: s.rotate, ease: _, force3D: "auto", transformPerspective: 600 }), 0), p.add(P, 0) }) }
                if (4 == t || 5 == t) { setTimeout(function() { c.find(".defaultimg").css({ opacity: 0 }) }, 100);
                    var I = b / 1e3,
                        P = new punchgs.TimelineLite;
                    c.find(".slotslide").each(function(e) {
                        var i = jQuery(this),
                            a = e * I / s.slots;
                        5 == t && (a = (s.slots - e - 1) * I / s.slots / 1.5), P.add(punchgs.TweenLite.to(i, 3 * I, { transformPerspective: 600, force3D: "auto", top: 0 + s.height, opacity: .5, rotation: s.rotate, ease: x, delay: a }), 0), p.add(P, 0) }), d.find(".slotslide").each(function(e) {
                        var i = jQuery(this),
                            a = e * I / s.slots;
                        5 == t && (a = (s.slots - e - 1) * I / s.slots / 1.5), P.add(punchgs.TweenLite.from(i, 3 * I, { top: 0 - s.height, opacity: .5, rotation: s.rotate, force3D: "auto", ease: punchgs.eo, delay: a }), 0), p.add(P, 0) }) }
                if (6 == t) { s.slots < 2 && (s.slots = 2), s.slots % 2 && (s.slots = s.slots + 1);
                    var P = new punchgs.TimelineLite;
                    setTimeout(function() { c.find(".defaultimg").css({ opacity: 0 }) }, 100), c.find(".slotslide").each(function(t) {
                        var e = jQuery(this);
                        if (t + 1 < s.slots / 2) var i = 90 * (t + 2);
                        else var i = 90 * (2 + s.slots - t);
                        P.add(punchgs.TweenLite.to(e, (b + i) / 1e3, { top: 0 + s.height, opacity: 1, force3D: "auto", rotation: s.rotate, ease: x }), 0), p.add(P, 0) }), d.find(".slotslide").each(function(t) {
                        var e = jQuery(this);
                        if (t + 1 < s.slots / 2) var i = 90 * (t + 2);
                        else var i = 90 * (2 + s.slots - t);
                        P.add(punchgs.TweenLite.from(e, (b + i) / 1e3, { top: 0 - s.height, opacity: 1, force3D: "auto", rotation: s.rotate, ease: _ }), 0), p.add(P, 0) }) }
                if (7 == t) { b = 2 * b, b > s.delay && (b = s.delay);
                    var P = new punchgs.TimelineLite;
                    setTimeout(function() { c.find(".defaultimg").css({ opacity: 0 }) }, 100), c.find(".slotslide").each(function() {
                        var t = jQuery(this).find("div");
                        P.add(punchgs.TweenLite.to(t, b / 1e3, { left: 0 - s.slotw / 2 + "px", top: 0 - s.height / 2 + "px", width: 2 * s.slotw + "px", height: 2 * s.height + "px", opacity: 0, rotation: s.rotate, force3D: "auto", ease: x }), 0), p.add(P, 0) }), d.find(".slotslide").each(function(t) {
                        var e = jQuery(this).find("div");
                        P.add(punchgs.TweenLite.fromTo(e, b / 1e3, { left: 0, top: 0, opacity: 0, transformPerspective: 600 }, { left: 0 - t * s.slotw + "px", ease: _, force3D: "auto", top: "0px", width: s.width, height: s.height, opacity: 1, rotation: 0, delay: .1 }), 0), p.add(P, 0) }) }
                if (8 == t) { b = 3 * b, b > s.delay && (b = s.delay);
                    var P = new punchgs.TimelineLite;
                    c.find(".slotslide").each(function() {
                        var t = jQuery(this).find("div");
                        P.add(punchgs.TweenLite.to(t, b / 1e3, { left: 0 - s.width / 2 + "px", top: 0 - s.sloth / 2 + "px", width: 2 * s.width + "px", height: 2 * s.sloth + "px", force3D: "auto", ease: x, opacity: 0, rotation: s.rotate }), 0), p.add(P, 0) }), d.find(".slotslide").each(function(t) {
                        var e = jQuery(this).find("div");
                        P.add(punchgs.TweenLite.fromTo(e, b / 1e3, { left: 0, top: 0, opacity: 0, force3D: "auto" }, { left: "0px", top: 0 - t * s.sloth + "px", width: d.find(".defaultimg").data("neww") + "px", height: d.find(".defaultimg").data("newh") + "px", opacity: 1, ease: _, rotation: 0 }), 0), p.add(P, 0) }) }
                if (9 == t || 10 == t) {
                    var A = 0;
                    d.find(".slotslide").each(function(t) {
                        var e = jQuery(this);
                        A++, p.add(punchgs.TweenLite.fromTo(e, b / 1e3, { autoAlpha: 0, force3D: "auto", transformPerspective: 600 }, { autoAlpha: 1, ease: x, delay: 5 * t / 1e3 }), 0) }) }
                if (27 == t || 28 == t || 29 == t || 30 == t) {
                    var L = d.find(".slot"),
                        O = 27 == t || 28 == t ? 1 : 2,
                        M = 27 == t || 29 == t ? "-100%" : "+100%",
                        z = 27 == t || 29 == t ? "+100%" : "-100%",
                        E = 27 == t || 29 == t ? "-80%" : "80%",
                        D = 27 == t || 29 == t ? "80%" : "-80%",
                        j = 27 == t || 29 == t ? "10%" : "-10%",
                        R = { overwrite: "all" },
                        F = { autoAlpha: 0, zIndex: 1, force3D: "auto", ease: x },
                        $ = { position: "inherit", autoAlpha: 0, overwrite: "all", zIndex: 1 },
                        W = { autoAlpha: 1, force3D: "auto", ease: _ },
                        B = { overwrite: "all", zIndex: 2 },
                        H = { autoAlpha: 1, force3D: "auto", overwrite: "all", ease: x },
                        N = { overwrite: "all", zIndex: 2 },
                        Q = { autoAlpha: 1, force3D: "auto", ease: x },
                        V = 1 == O ? "y" : "x";
                    R[V] = "0px", F[V] = M, $[V] = j, W[V] = "0%", B[V] = z, H[V] = M, N[V] = E, Q[V] = D, L.append('<span style="background-color:rgba(0,0,0,0.6);width:100%;height:100%;position:absolute;top:0px;left:0px;display:block;z-index:2"></span>'), p.add(punchgs.TweenLite.fromTo(c, b / 1e3, R, F), 0), p.add(punchgs.TweenLite.fromTo(d.find(".defaultimg"), b / 2e3, $, W), b / 2e3), p.add(punchgs.TweenLite.fromTo(L, b / 1e3, B, H), 0), p.add(punchgs.TweenLite.fromTo(L.find(".slotslide div"), b / 1e3, N, Q), 0) }
                if (31 == t || 32 == t || 33 == t || 34 == t) { b = 6e3, x = punchgs.Power3.easeInOut;
                    var X = b / 1e3;
                    mas = X - X / 5, _nt = t, fy = 31 == _nt ? "+100%" : 32 == _nt ? "-100%" : "0%", fx = 33 == _nt ? "+100%" : 34 == _nt ? "-100%" : "0%", ty = 31 == _nt ? "-100%" : 32 == _nt ? "+100%" : "0%", tx = 33 == _nt ? "-100%" : 34 == _nt ? "+100%" : "0%", p.add(punchgs.TweenLite.fromTo(c, X - .2 * X, { y: 0, x: 0 }, { y: ty, x: tx, ease: _ }), .2 * X), p.add(punchgs.TweenLite.fromTo(d, X, { y: fy, x: fx }, { y: "0%", x: "0%", ease: x }), 0), d.find(".slot").remove(), d.find(".defaultimg").clone().appendTo(d).addClass("slot"), h(d, X, _nt, "in", x) }
                if (11 == t) { w > 4 && (w = 0);
                    var A = 0,
                        Y = 2 == w ? "#000000" : 3 == w ? "#ffffff" : "transparent";
                    switch (w) {
                        case 0:
                            p.add(punchgs.TweenLite.fromTo(d, b / 1e3, { autoAlpha: 0 }, { autoAlpha: 1, force3D: "auto", ease: x }), 0);
                            break;
                        case 1:
                            p.add(punchgs.TweenLite.fromTo(d, b / 1e3, { autoAlpha: 0 }, { autoAlpha: 1, force3D: "auto", ease: x }), 0), p.add(punchgs.TweenLite.fromTo(c, b / 1e3, { autoAlpha: 1 }, { autoAlpha: 0, force3D: "auto", ease: x }), 0);
                            break;
                        case 2:
                        case 3:
                        case 4:
                            p.add(punchgs.TweenLite.set(c.parent(), { backgroundColor: Y, force3D: "auto" }), 0), p.add(punchgs.TweenLite.set(d.parent(), { backgroundColor: "transparent", force3D: "auto" }), 0), p.add(punchgs.TweenLite.to(c, b / 2e3, { autoAlpha: 0, force3D: "auto", ease: x }), 0), p.add(punchgs.TweenLite.fromTo(d, b / 2e3, { autoAlpha: 0 }, { autoAlpha: 1, force3D: "auto", ease: x }), b / 2e3) }
                    p.add(punchgs.TweenLite.set(d.find(".defaultimg"), { autoAlpha: 1 }), 0), p.add(punchgs.TweenLite.set(c.find("defaultimg"), { autoAlpha: 1 }), 0) }
                if (26 == t) {
                    var A = 0;
                    b = 0, p.add(punchgs.TweenLite.fromTo(d, b / 1e3, { autoAlpha: 0 }, { autoAlpha: 1, force3D: "auto", ease: x }), 0), p.add(punchgs.TweenLite.to(c, b / 1e3, { autoAlpha: 0, force3D: "auto", ease: x }), 0), p.add(punchgs.TweenLite.set(d.find(".defaultimg"), { autoAlpha: 1 }), 0), p.add(punchgs.TweenLite.set(c.find("defaultimg"), { autoAlpha: 1 }), 0) }
                if (12 == t || 13 == t || 14 == t || 15 == t) { b = b, b > s.delay && (b = s.delay), setTimeout(function() { punchgs.TweenLite.set(c.find(".defaultimg"), { autoAlpha: 0 }) }, 100);
                    var q = s.width,
                        G = s.height,
                        U = d.find(".slotslide, .defaultvid"),
                        Z = 0,
                        K = 0,
                        J = 1,
                        tt = 1,
                        et = 1,
                        it = b / 1e3,
                        at = it;
                    ("fullwidth" == s.sliderLayout || "fullscreen" == s.sliderLayout) && (q = U.width(), G = U.height()), 12 == t ? Z = q : 15 == t ? Z = 0 - q : 13 == t ? K = G : 14 == t && (K = 0 - G), 1 == w && (J = 0), 2 == w && (J = 0), 3 == w && (it = b / 1300), (4 == w || 5 == w) && (tt = .6), 6 == w && (tt = 1.4), (5 == w || 6 == w) && (et = 1.4, J = 0, q = 0, G = 0, Z = 0, K = 0), 6 == w && (et = .6), 7 == w && (q = 0, G = 0);
                    var nt = d.find(".slotslide"),
                        ot = c.find(".slotslide, .defaultvid");
                    if (p.add(punchgs.TweenLite.set(l, { zIndex: 15 }), 0), p.add(punchgs.TweenLite.set(r, { zIndex: 20 }), 0), 8 == w ? (p.add(punchgs.TweenLite.set(l, { zIndex: 20 }), 0), p.add(punchgs.TweenLite.set(r, { zIndex: 15 }), 0), p.add(punchgs.TweenLite.set(nt, { left: 0, top: 0, scale: 1, opacity: 1, rotation: 0, ease: x, force3D: "auto" }), 0)) : p.add(punchgs.TweenLite.from(nt, it, { left: Z, top: K, scale: et, opacity: J, rotation: s.rotate, ease: x, force3D: "auto" }), 0), (4 == w || 5 == w) && (q = 0, G = 0), 1 != w) switch (t) {
                        case 12:
                            p.add(punchgs.TweenLite.to(ot, at, { left: 0 - q + "px", force3D: "auto", scale: tt, opacity: J, rotation: s.rotate, ease: _ }), 0);
                            break;
                        case 15:
                            p.add(punchgs.TweenLite.to(ot, at, { left: q + "px", force3D: "auto", scale: tt, opacity: J, rotation: s.rotate, ease: _ }), 0);
                            break;
                        case 13:
                            p.add(punchgs.TweenLite.to(ot, at, { top: 0 - G + "px", force3D: "auto", scale: tt, opacity: J, rotation: s.rotate, ease: _ }), 0);
                            break;
                        case 14:
                            p.add(punchgs.TweenLite.to(ot, at, { top: G + "px", force3D: "auto", scale: tt, opacity: J, rotation: s.rotate, ease: _ }), 0) } }
                if (16 == t) {
                    var P = new punchgs.TimelineLite;
                    p.add(punchgs.TweenLite.set(l, { position: "absolute", "z-index": 20 }), 0), p.add(punchgs.TweenLite.set(r, { position: "absolute", "z-index": 15 }), 0), l.wrapInner('<div class="tp-half-one" style="position:relative; width:100%;height:100%"></div>'), l.find(".tp-half-one").clone(!0).appendTo(l).addClass("tp-half-two"), l.find(".tp-half-two").removeClass("tp-half-one");
                    var q = s.width,
                        G = s.height; "on" == s.autoHeight && (G = o.height()), l.find(".tp-half-one .defaultimg").wrap('<div class="tp-papercut" style="width:' + q + "px;height:" + G + 'px;"></div>'), l.find(".tp-half-two .defaultimg").wrap('<div class="tp-papercut" style="width:' + q + "px;height:" + G + 'px;"></div>'), l.find(".tp-half-two .defaultimg").css({ position: "absolute", top: "-50%" }), l.find(".tp-half-two .tp-caption").wrapAll('<div style="position:absolute;top:-50%;left:0px;"></div>'), p.add(punchgs.TweenLite.set(l.find(".tp-half-two"), { width: q, height: G, overflow: "hidden", zIndex: 15, position: "absolute", top: G / 2, left: "0px", transformPerspective: 600, transformOrigin: "center bottom" }), 0), p.add(punchgs.TweenLite.set(l.find(".tp-half-one"), { width: q, height: G / 2, overflow: "visible", zIndex: 10, position: "absolute", top: "0px", left: "0px", transformPerspective: 600, transformOrigin: "center top" }), 0);
                    var st = (l.find(".defaultimg"), Math.round(20 * Math.random() - 10)),
                        rt = Math.round(20 * Math.random() - 10),
                        lt = Math.round(20 * Math.random() - 10),
                        dt = .4 * Math.random() - .2,
                        ct = .4 * Math.random() - .2,
                        pt = 1 * Math.random() + 1,
                        ht = 1 * Math.random() + 1,
                        ut = .3 * Math.random() + .3;
                    p.add(punchgs.TweenLite.set(l.find(".tp-half-one"), { overflow: "hidden" }), 0), p.add(punchgs.TweenLite.fromTo(l.find(".tp-half-one"), b / 800, { width: q, height: G / 2, position: "absolute", top: "0px", left: "0px", force3D: "auto", transformOrigin: "center top" }, { scale: pt, rotation: st, y: 0 - G - G / 4, autoAlpha: 0, ease: x }), 0), p.add(punchgs.TweenLite.fromTo(l.find(".tp-half-two"), b / 800, { width: q, height: G, overflow: "hidden", position: "absolute", top: G / 2, left: "0px", force3D: "auto", transformOrigin: "center bottom" }, { scale: ht, rotation: rt, y: G + G / 4, ease: x, autoAlpha: 0, onComplete: function() { punchgs.TweenLite.set(l, { position: "absolute", "z-index": 15 }), punchgs.TweenLite.set(r, { position: "absolute", "z-index": 20 }), l.find(".tp-half-one").length > 0 && (l.find(".tp-half-one .defaultimg").unwrap(), l.find(".tp-half-one .slotholder").unwrap()), l.find(".tp-half-two").remove() } }), 0), P.add(punchgs.TweenLite.set(d.find(".defaultimg"), { autoAlpha: 1 }), 0), null != l.html() && p.add(punchgs.TweenLite.fromTo(r, (b - 200) / 1e3, { scale: ut, x: s.width / 4 * dt, y: G / 4 * ct, rotation: lt, force3D: "auto", transformOrigin: "center center", ease: _ }, { autoAlpha: 1, scale: 1, x: 0, y: 0, rotation: 0 }), 0), p.add(P, 0) }
                if (17 == t && d.find(".slotslide").each(function(t) {
                        var e = jQuery(this);
                        p.add(punchgs.TweenLite.fromTo(e, b / 800, { opacity: 0, rotationY: 0, scale: .9, rotationX: -110, force3D: "auto", transformPerspective: 600, transformOrigin: "center center" }, { opacity: 1, top: 0, left: 0, scale: 1, rotation: 0, rotationX: 0, force3D: "auto", rotationY: 0, ease: x, delay: .06 * t }), 0) }), 18 == t && d.find(".slotslide").each(function(t) {
                        var e = jQuery(this);
                        p.add(punchgs.TweenLite.fromTo(e, b / 500, { autoAlpha: 0, rotationY: 110, scale: .9, rotationX: 10, force3D: "auto", transformPerspective: 600, transformOrigin: "center center" }, { autoAlpha: 1, top: 0, left: 0, scale: 1, rotation: 0, rotationX: 0, force3D: "auto", rotationY: 0, ease: x, delay: .06 * t }), 0) }), 19 == t || 22 == t) {
                    var P = new punchgs.TimelineLite;
                    p.add(punchgs.TweenLite.set(l, { zIndex: 20 }), 0), p.add(punchgs.TweenLite.set(r, { zIndex: 20 }), 0), setTimeout(function() { c.find(".defaultimg").css({ opacity: 0 }) }, 100);
                    var ft = 90,
                        J = 1,
                        gt = "center center ";
                    1 == g && (ft = -90), 19 == t ? (gt = gt + "-" + s.height / 2, J = 0) : gt += s.height / 2, punchgs.TweenLite.set(o, { transformStyle: "flat", backfaceVisibility: "hidden", transformPerspective: 600 }), d.find(".slotslide").each(function(t) {
                        var e = jQuery(this);
                        P.add(punchgs.TweenLite.fromTo(e, b / 1e3, { transformStyle: "flat", backfaceVisibility: "hidden", left: 0, rotationY: s.rotate, z: 10, top: 0, scale: 1, force3D: "auto", transformPerspective: 600, transformOrigin: gt, rotationX: ft }, { left: 0, rotationY: 0, top: 0, z: 0, scale: 1, force3D: "auto", rotationX: 0, delay: 50 * t / 1e3, ease: x }), 0), P.add(punchgs.TweenLite.to(e, .1, { autoAlpha: 1, delay: 50 * t / 1e3 }), 0), p.add(P) }), c.find(".slotslide").each(function(t) {
                        var e = jQuery(this),
                            i = -90;
                        1 == g && (i = 90), P.add(punchgs.TweenLite.fromTo(e, b / 1e3, { transformStyle: "flat", backfaceVisibility: "hidden", autoAlpha: 1, rotationY: 0, top: 0, z: 0, scale: 1, force3D: "auto", transformPerspective: 600, transformOrigin: gt, rotationX: 0 }, { autoAlpha: 1, rotationY: s.rotate, top: 0, z: 10, scale: 1, rotationX: i, delay: 50 * t / 1e3, force3D: "auto", ease: _ }), 0), p.add(P) }), p.add(punchgs.TweenLite.set(l, { zIndex: 18 }), 0) }
                if (20 == t) {
                    if (setTimeout(function() { c.find(".defaultimg").css({ opacity: 0 }) }, 100), 1 == g) var mt = -s.width,
                        ft = 80,
                        gt = "20% 70% -" + s.height / 2;
                    else var mt = s.width,
                        ft = -80,
                        gt = "80% 70% -" + s.height / 2;
                    d.find(".slotslide").each(function(t) {
                        var e = jQuery(this),
                            i = 50 * t / 1e3;
                        p.add(punchgs.TweenLite.fromTo(e, b / 1e3, { left: mt, rotationX: 40, z: -600, opacity: J, top: 0, scale: 1, force3D: "auto", transformPerspective: 600, transformOrigin: gt, transformStyle: "flat", rotationY: ft }, { left: 0, rotationX: 0, opacity: 1, top: 0, z: 0, scale: 1, rotationY: 0, delay: i, ease: x }), 0) }), c.find(".slotslide").each(function(t) {
                        var e = jQuery(this),
                            i = 50 * t / 1e3;
                        if (i = t > 0 ? i + b / 9e3 : 0, 1 != g) var a = -s.width / 2,
                            n = 30,
                            o = "20% 70% -" + s.height / 2;
                        else var a = s.width / 2,
                            n = -30,
                            o = "80% 70% -" + s.height / 2;
                        _ = punchgs.Power2.easeInOut, p.add(punchgs.TweenLite.fromTo(e, b / 1e3, { opacity: 1, rotationX: 0, top: 0, z: 0, scale: 1, left: 0, force3D: "auto", transformPerspective: 600, transformOrigin: o, transformStyle: "flat", rotationY: 0 }, { opacity: 1, rotationX: 20, top: 0, z: -600, left: a, force3D: "auto", rotationY: n, delay: i, ease: _ }), 0) }) }
                if (21 == t || 25 == t) { setTimeout(function() { c.find(".defaultimg").css({ opacity: 0 }) }, 100);
                    var ft = 90,
                        mt = -s.width,
                        vt = -ft;
                    if (1 == g)
                        if (25 == t) {
                            var gt = "center top 0";
                            ft = s.rotate } else {
                            var gt = "left center 0";
                            vt = s.rotate }
                    else if (mt = s.width, ft = -90, 25 == t) {
                        var gt = "center bottom 0";
                        vt = -ft, ft = s.rotate } else {
                        var gt = "right center 0";
                        vt = s.rotate }
                    d.find(".slotslide").each(function() {
                        var t = jQuery(this),
                            e = b / 1.5 / 3;
                        p.add(punchgs.TweenLite.fromTo(t, 2 * e / 1e3, { left: 0, transformStyle: "flat", rotationX: vt, z: 0, autoAlpha: 0, top: 0, scale: 1, force3D: "auto", transformPerspective: 1200, transformOrigin: gt, rotationY: ft }, { left: 0, rotationX: 0, top: 0, z: 0, autoAlpha: 1, scale: 1, rotationY: 0, force3D: "auto", delay: e / 1e3, ease: x }), 0) }), 1 != g ? (mt = -s.width, ft = 90, 25 == t ? (gt = "center top 0", vt = -ft, ft = s.rotate) : (gt = "left center 0", vt = s.rotate)) : (mt = s.width, ft = -90, 25 == t ? (gt = "center bottom 0", vt = -ft, ft = s.rotate) : (gt = "right center 0", vt = s.rotate)), c.find(".slotslide").each(function() {
                        var t = jQuery(this);
                        p.add(punchgs.TweenLite.fromTo(t, b / 1e3, { left: 0, transformStyle: "flat", rotationX: 0, z: 0, autoAlpha: 1, top: 0, scale: 1, force3D: "auto", transformPerspective: 1200, transformOrigin: gt, rotationY: 0 }, { left: 0, rotationX: vt, top: 0, z: 0, autoAlpha: 1, force3D: "auto", scale: 1, rotationY: ft, ease: _ }), 0) }) }
                if (23 == t || 24 == t) { setTimeout(function() { c.find(".defaultimg").css({ opacity: 0 }) }, 100);
                    var ft = -90,
                        J = 1,
                        wt = 0;
                    if (1 == g && (ft = 90), 23 == t) {
                        var gt = "center center -" + s.width / 2;
                        J = 0 } else var gt = "center center " + s.width / 2;
                    punchgs.TweenLite.set(o, { transformStyle: "preserve-3d", backfaceVisibility: "hidden", perspective: 2500 }), d.find(".slotslide").each(function(t) {
                        var e = jQuery(this);
                        p.add(punchgs.TweenLite.fromTo(e, b / 1e3, { left: wt, rotationX: s.rotate, force3D: "auto", opacity: J, top: 0, scale: 1, transformPerspective: 1200, transformOrigin: gt, rotationY: ft }, { left: 0, rotationX: 0, autoAlpha: 1, top: 0, z: 0, scale: 1, rotationY: 0, delay: 50 * t / 500, ease: x }), 0) }), ft = 90, 1 == g && (ft = -90), c.find(".slotslide").each(function(e) {
                        var i = jQuery(this);
                        p.add(punchgs.TweenLite.fromTo(i, b / 1e3, { left: 0, rotationX: 0, top: 0, z: 0, scale: 1, force3D: "auto", transformStyle: "flat", transformPerspective: 1200, transformOrigin: gt, rotationY: 0 }, { left: wt, rotationX: s.rotate, top: 0, scale: 1, rotationY: ft, delay: 50 * e / 500, ease: _ }), 0), 23 == t && p.add(punchgs.TweenLite.fromTo(i, b / 2e3, { autoAlpha: 1 }, { autoAlpha: 0, delay: 50 * e / 500 + b / 3e3, ease: _ }), 0) }) }
                return p }
    }(jQuery), ! function(t) {
        function e(t) {
            return void 0 == t ? -1 : jQuery.isNumeric(t) ? t : t.split(":").length > 1 ? 60 * parseInt(t.split(":")[0], 0) + parseInt(t.split(":")[1], 0) : t }
        var i = jQuery.fn.revolution,
            a = i.is_mobile();
        jQuery.extend(!0, i, {
            resetVideo: function(t, n) {
                switch (t.data("videotype")) {
                    case "youtube":
                        t.data("player");
                        try {
                            if ("on" == t.data("forcerewind") && !a) {
                                var o = e(t.data("videostartat"));
                                o = -1 == o ? 0 : o, void 0 != t.data("player") && (t.data("player").seekTo(o), t.data("player").pauseVideo()) } } catch (s) {}
                        0 == t.find(".tp-videoposter").length && punchgs.TweenLite.to(t.find("iframe"), .3, { autoAlpha: 1, display: "block", ease: punchgs.Power3.easeInOut });
                        break;
                    case "vimeo":
                        var r = $f(t.find("iframe").attr("id"));
                        try {
                            if ("on" == t.data("forcerewind") && !a) {
                                var o = e(t.data("videostartat"));
                                o = -1 == o ? 0 : o, r.api("seekTo", o), r.api("pause") } } catch (s) {}
                        0 == t.find(".tp-videoposter").length && punchgs.TweenLite.to(t.find("iframe"), .3, { autoAlpha: 1, display: "block", ease: punchgs.Power3.easeInOut });
                        break;
                    case "html5":
                        if (a && 1 == t.data("disablevideoonmobile")) return !1;
                        var l = t.find("video"),
                            d = l[0];
                        if (punchgs.TweenLite.to(l, .3, { autoAlpha: 1, display: "block", ease: punchgs.Power3.easeInOut }), "on" == t.data("forcerewind") && !t.hasClass("videoisplaying")) try {
                            var o = e(t.data("videostartat"));
                            d.currentTime = -1 == o ? 0 : o } catch (s) {}("mute" == t.data("volume") || i.lastToggleState(t.data("videomutetoggledby"))) && (d.muted = !0) } },
            isVideoMuted: function(t, e) {
                var i = !1;
                switch (t.data("videotype")) {
                    case "youtube":
                        try {
                            var a = t.data("player");
                            i = a.isMuted() } catch (n) {}
                        break;
                    case "vimeo":
                        try { $f(t.find("iframe").attr("id")), "mute" == t.data("volume") && (i = !0) } catch (n) {}
                        break;
                    case "html5":
                        var o = t.find("video"),
                            s = o[0]; "mute" == t.data("volume") && (s.muted = !0) }
                return i },
            muteVideo: function(t, e) {
                switch (t.data("videotype")) {
                    case "youtube":
                        try {
                            var i = t.data("player");
                            i.mute() } catch (a) {}
                        break;
                    case "vimeo":
                        try {
                            var n = $f(t.find("iframe").attr("id"));
                            t.data("volume", "mute"), n.api("setVolume", 0) } catch (a) {}
                        break;
                    case "html5":
                        var o = t.find("video"),
                            s = o[0];
                        s.muted = !0 } },
            unMuteVideo: function(t, e) {
                switch (t.data("videotype")) {
                    case "youtube":
                        try {
                            var i = t.data("player");
                            i.unMute() } catch (a) {}
                        break;
                    case "vimeo":
                        try {
                            var n = $f(t.find("iframe").attr("id"));
                            t.data("volume", "1"), n.api("setVolume", 1) } catch (a) {}
                        break;
                    case "html5":
                        var o = t.find("video"),
                            s = o[0];
                        s.muted = !1 } },
            stopVideo: function(t, e) {
                switch (t.data("videotype")) {
                    case "youtube":
                        try {
                            var i = t.data("player");
                            i.pauseVideo() } catch (a) {}
                        break;
                    case "vimeo":
                        try {
                            var n = $f(t.find("iframe").attr("id"));
                            n.api("pause") } catch (a) {}
                        break;
                    case "html5":
                        var o = t.find("video"),
                            s = o[0];
                        s.pause() } },
            playVideo: function(t, o) {
                switch (clearTimeout(t.data("videoplaywait")), t.data("videotype")) {
                    case "youtube":
                        if (0 == t.find("iframe").length) t.append(t.data("videomarkup")), s(t, o, !0);
                        else if (void 0 != t.data("player").playVideo) {
                            var r = e(t.data("videostartat")),
                                l = t.data("player").getCurrentTime();
                            1 == t.data("nextslideatend-triggered") && (l = -1, t.data("nextslideatend-triggered", 0)), -1 != r && r > l && t.data("player").seekTo(r), t.data("player").playVideo() } else t.data("videoplaywait", setTimeout(function() { i.playVideo(t, o) }, 50));
                        break;
                    case "vimeo":
                        if (0 == t.find("iframe").length) t.append(t.data("videomarkup")), s(t, o, !0);
                        else if (t.hasClass("rs-apiready")) {
                            var d = t.find("iframe").attr("id"),
                                c = $f(d);
                            void 0 == c.api("play") ? t.data("videoplaywait", setTimeout(function() { i.playVideo(t, o) }, 50)) : setTimeout(function() { c.api("play");
                                var i = e(t.data("videostartat")),
                                    a = t.data("currenttime");
                                1 == t.data("nextslideatend-triggered") && (a = -1, t.data("nextslideatend-triggered", 0)), -1 != i && i > a && c.api("seekTo", i) }, 510) } else t.data("videoplaywait", setTimeout(function() { i.playVideo(t, o) }, 50));
                        break;
                    case "html5":
                        if (a && 1 == t.data("disablevideoonmobile")) return !1;
                        var p = t.find("video"),
                            h = p[0],
                            u = p.parent();
                        if (1 != u.data("metaloaded")) n(h, "loadedmetadata", function(t) { i.resetVideo(t, o), h.play();
                            var a = e(t.data("videostartat")),
                                n = h.currentTime;
                            1 == t.data("nextslideatend-triggered") && (n = -1, t.data("nextslideatend-triggered", 0)), -1 != a && a > n && (h.currentTime = a) }(t));
                        else { h.play();
                            var r = e(t.data("videostartat")),
                                l = h.currentTime;
                            1 == t.data("nextslideatend-triggered") && (l = -1, t.data("nextslideatend-triggered", 0)), -1 != r && r > l && (h.currentTime = r) } } },
            isVideoPlaying: function(t, e) {
                var i = !1;
                return void 0 != e.playingvideos && jQuery.each(e.playingvideos, function(e, a) { t.attr("id") == a.attr("id") && (i = !0) }), i },
            prepareCoveredVideo: function(t, e, i) {
                var a = i.find("iframe, video"),
                    n = t.split(":")[0],
                    o = t.split(":")[1],
                    s = i.closest(".tp-revslider-slidesli"),
                    r = s.width() / s.height(),
                    l = n / o,
                    d = r / l * 100,
                    c = l / r * 100;
                r > l ? punchgs.TweenLite.to(a, .001, { height: d + "%", width: "100%", top: -(d - 100) / 2 + "%", left: "0px", position: "absolute" }) : punchgs.TweenLite.to(a, .001, { width: c + "%", height: "100%", left: -(c - 100) / 2 + "%", top: "0px", position: "absolute" }) },
            checkVideoApis: function(t, e, i) {
                var a = "https:" === location.protocol ? "https" : "http";
                if ((void 0 != t.data("ytid") || t.find("iframe").length > 0 && t.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (e.youtubeapineeded = !0), (void 0 != t.data("ytid") || t.find("iframe").length > 0 && t.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && 0 == i.addedyt) { e.youtubestarttime = jQuery.now(), i.addedyt = 1;
                    var n = document.createElement("script");
                    n.src = "https://www.youtube.com/iframe_api";
                    var o = document.getElementsByTagName("script")[0],
                        s = !0;
                    jQuery("head").find("*").each(function() { "https://www.youtube.com/iframe_api" == jQuery(this).attr("src") && (s = !1) }), s && o.parentNode.insertBefore(n, o) }
                if ((void 0 != t.data("vimeoid") || t.find("iframe").length > 0 && t.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (e.vimeoapineeded = !0), (void 0 != t.data("vimeoid") || t.find("iframe").length > 0 && t.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && 0 == i.addedvim) { e.vimeostarttime = jQuery.now(), i.addedvim = 1;
                    var r = document.createElement("script"),
                        o = document.getElementsByTagName("script")[0],
                        s = !0;
                    r.src = a + "://f.vimeocdn.com/js/froogaloop2.min.js", jQuery("head").find("*").each(function() { jQuery(this).attr("src") == a + "://a.vimeocdn.com/js/froogaloop2.min.js" && (s = !1) }), s && o.parentNode.insertBefore(r, o) }
                return i },
            manageVideoLayer: function(t, o, l, d) {
                var c = t.data("videoattributes"),
                    p = t.data("ytid"),
                    h = t.data("vimeoid"),
                    u = t.data("videpreload"),
                    f = t.data("videomp4"),
                    g = t.data("videowebm"),
                    m = t.data("videoogv"),
                    v = t.data("allowfullscreenvideo"),
                    w = t.data("videocontrols"),
                    y = "http",
                    b = "loop" == t.data("videoloop") ? "loop" : "loopandnoslidestop" == t.data("videoloop") ? "loop" : "",
                    x = void 0 != f || void 0 != g ? "html5" : void 0 != p && String(p).length > 1 ? "youtube" : void 0 != h && String(h).length > 1 ? "vimeo" : "none",
                    _ = "html5" == x && 0 == t.find("video").length ? "html5" : "youtube" == x && 0 == t.find("iframe").length ? "youtube" : "vimeo" == x && 0 == t.find("iframe").length ? "vimeo" : "none";
                switch (t.data("videotype", x), _) {
                    case "html5":
                        "controls" != w && (w = "");
                        var T = '<video style="object-fit:cover;background-size:cover;visible:hidden;width:100%; height:100%" class="" ' + b + ' preload="' + u + '">';
                        void 0 != g && "firefox" == i.get_browser().toLowerCase() && (T = T + '<source src="' + g + '" type="video/webm" />'), void 0 != f && (T = T + '<source src="' + f + '" type="video/mp4" />'), void 0 != m && (T = T + '<source src="' + m + '" type="video/ogg" />'),
                            T += "</video>";
                        var C = "";
                        ("true" === v || v === !0) && (C = '<div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-full-screen">Full-Screen</button></div>'), "controls" == w && (T += '<div class="tp-video-controls"><div class="tp-video-button-wrap"><button type="button" class="tp-video-button tp-vid-play-pause">Play</button></div><div class="tp-video-seek-bar-wrap"><input  type="range" class="tp-seek-bar" value="0"></div><div class="tp-video-button-wrap"><button  type="button" class="tp-video-button tp-vid-mute">Mute</button></div><div class="tp-video-vol-bar-wrap"><input  type="range" class="tp-volume-bar" min="0" max="1" step="0.1" value="1"></div>' + C + "</div>"), t.data("videomarkup", T), t.append(T), (a && 1 == t.data("disablevideoonmobile") || i.isIE(8)) && t.find("video").remove(), t.find("video").each(function(e) {
                            var a = this,
                                s = jQuery(this);
                            s.parent().hasClass("html5vid") || s.wrap('<div class="html5vid" style="position:relative;top:0px;left:0px;width:100%;height:100%; overflow:hidden;"></div>');
                            var l = s.parent();
                            1 != l.data("metaloaded") && n(a, "loadedmetadata", function(t) { r(t, o), i.resetVideo(t, o) }(t)) });
                        break;
                    case "youtube":
                        y = "http", "https:" === location.protocol && (y = "https"), "none" == w && (c = c.replace("controls=1", "controls=0"), -1 == c.toLowerCase().indexOf("controls") && (c += "&controls=0"));
                        var S = e(t.data("videostartat")),
                            k = e(t.data("videoendat")); - 1 != S && (c = c + "&start=" + S), -1 != k && (c = c + "&end=" + k);
                        var P = c.split("origin=" + y + "://"),
                            I = "";
                        P.length > 1 ? (I = P[0] + "origin=" + y + "://", self.location.href.match(/www/gi) && !P[1].match(/www/gi) && (I += "www."), I += P[1]) : I = c;
                        var A = "true" === v || v === !0 ? "allowfullscreen" : "";
                        t.data("videomarkup", '<iframe style="visible:hidden" src="' + y + "://www.youtube.com/embed/" + p + "?" + I + '" ' + A + ' width="100%" height="100%" style="width:100%;height:100%"></iframe>');
                        break;
                    case "vimeo":
                        "https:" === location.protocol && (y = "https"), t.data("videomarkup", '<iframe style="visible:hidden" src="' + y + "://player.vimeo.com/video/" + h + "?" + c + '" webkitallowfullscreen mozallowfullscreen allowfullscreen width="100%" height="100%" style="100%;height:100%"></iframe>')
                }
                var L = a && "on" == t.data("noposteronmobile");
                if (void 0 != t.data("videoposter") && t.data("videoposter").length > 2 && !L) 0 == t.find(".tp-videoposter").length && t.append('<div class="tp-videoposter noSwipe" style="cursor:pointer; position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:3;background-image:url(' + t.data("videoposter") + '); background-size:cover;background-position:center center;"></div>'), 0 == t.find("iframe").length && t.find(".tp-videoposter").click(function() {
                    if (i.playVideo(t, o), a) {
                        if (1 == t.data("disablevideoonmobile")) return !1;
                        punchgs.TweenLite.to(t.find(".tp-videoposter"), .3, { autoAlpha: 0, force3D: "auto", ease: punchgs.Power3.easeInOut }), punchgs.TweenLite.to(t.find("iframe"), .3, { autoAlpha: 1, display: "block", ease: punchgs.Power3.easeInOut }) } });
                else {
                    if (a && 1 == t.data("disablevideoonmobile")) return !1;
                    0 != t.find("iframe").length || "youtube" != x && "vimeo" != x || (t.append(t.data("videomarkup")), s(t, o, !1)) }
                "none" != t.data("dottedoverlay") && void 0 != t.data("dottedoverlay") && 1 != t.find(".tp-dottedoverlay").length && t.append('<div class="tp-dottedoverlay ' + t.data("dottedoverlay") + '"></div>'), t.addClass("HasListener"), 1 == t.data("bgvideo") && punchgs.TweenLite.set(t.find("video, iframe"), { autoAlpha: 0 })
            }
        });
        var n = function(t, e, i) { t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent(e, i, !1) },
            o = function(t, e, i) {
                var a = {};
                return a.video = t, a.videotype = e, a.settings = i, a },
            s = function(t, n, s) {
                var r = t.find("iframe"),
                    c = "iframe" + Math.round(1e5 * Math.random() + 1),
                    p = t.data("videoloop"),
                    h = "loopandnoslidestop" != p;
                if (p = "loop" == p || "loopandnoslidestop" == p, 1 == t.data("forcecover")) { t.removeClass("fullscreenvideo").addClass("coverscreenvideo");
                    var u = t.data("aspectratio");
                    void 0 != u && u.split(":").length > 1 && i.prepareCoveredVideo(u, n, t) }
                if (1 == t.data("bgvideo")) {
                    var u = t.data("aspectratio");
                    void 0 != u && u.split(":").length > 1 && i.prepareCoveredVideo(u, n, t) }
                if (r.attr("id", c), s && t.data("startvideonow", !0), 1 !== t.data("videolistenerexist")) switch (t.data("videotype")) {
                    case "youtube":
                        var f = new YT.Player(c, { events: { onStateChange: function(t) {
                                    var a = t.target.getVideoEmbedCode(),
                                        s = jQuery("#" + a.split('id="')[1].split('"')[0]),
                                        r = s.closest(".tp-simpleresponsive"),
                                        c = s.parent(),
                                        u = s.parent().data("player");
                                    if (t.data == YT.PlayerState.PLAYING) punchgs.TweenLite.to(c.find(".tp-videoposter"), .3, { autoAlpha: 0, force3D: "auto", ease: punchgs.Power3.easeInOut }), punchgs.TweenLite.to(c.find("iframe"), .3, { autoAlpha: 1, display: "block", ease: punchgs.Power3.easeInOut }), "mute" == c.data("volume") || i.lastToggleState(c.data("videomutetoggledby")) ? u.mute() : (u.unMute(), u.setVolume(parseInt(c.data("volume"), 0) || 75)), n.videoplaying = !0, l(c, n), h ? n.c.trigger("stoptimer") : n.videoplaying = !1, n.c.trigger("revolution.slide.onvideoplay", o(u, "youtube", c.data())), i.toggleState(c.data("videotoggledby"));
                                    else {
                                        if (0 == t.data && p) {
                                            var f = e(c.data("videostartat")); - 1 != f && u.seekTo(f), u.playVideo(), i.toggleState(c.data("videotoggledby")) }(0 == t.data || 2 == t.data) && "on" == c.data("showcoveronpause") && c.find(".tp-videoposter").length > 0 && (punchgs.TweenLite.to(c.find(".tp-videoposter"), .3, { autoAlpha: 1, force3D: "auto", ease: punchgs.Power3.easeInOut }), punchgs.TweenLite.to(c.find("iframe"), .3, { autoAlpha: 0, ease: punchgs.Power3.easeInOut })), -1 != t.data && 3 != t.data && (n.videoplaying = !1, d(c, n), r.trigger("starttimer"), n.c.trigger("revolution.slide.onvideostop", o(u, "youtube", c.data())), (void 0 == n.currentLayerVideoIsPlaying || n.currentLayerVideoIsPlaying.attr("id") == c.attr("id")) && i.unToggleState(c.data("videotoggledby"))), 0 == t.data && 1 == c.data("nextslideatend") ? (c.data("nextslideatend-triggered", 1), n.c.revnext(), d(c, n)) : (d(c, n), n.videoplaying = !1, r.trigger("starttimer"), n.c.trigger("revolution.slide.onvideostop", o(u, "youtube", c.data())), (void 0 == n.currentLayerVideoIsPlaying || n.currentLayerVideoIsPlaying.attr("id") == c.attr("id")) && i.unToggleState(c.data("videotoggledby"))) } }, onReady: function(t) {
                                    var i = t.target.getVideoEmbedCode(),
                                        n = jQuery("#" + i.split('id="')[1].split('"')[0]),
                                        o = n.parent(),
                                        s = o.data("videorate");
                                    if (o.data("videostart"), o.addClass("rs-apiready"), void 0 != s && t.target.setPlaybackRate(parseFloat(s)), o.find(".tp-videoposter").unbind("click"), o.find(".tp-videoposter").click(function() { a || f.playVideo() }), o.data("startvideonow")) { o.data("player").playVideo();
                                        var r = e(o.data("videostartat")); - 1 != r && o.data("player").seekTo(r) }
                                    o.data("videolistenerexist", 1) } } });
                        t.data("player", f);
                        break;
                    case "vimeo":
                        for (var g, m = r.attr("src"), v = {}, w = m, y = /([^&=]+)=([^&]*)/g; g = y.exec(w);) v[decodeURIComponent(g[1])] = decodeURIComponent(g[2]);
                        m = void 0 != v.player_id ? m.replace(v.player_id, c) : m + "&player_id=" + c;
                        try { m = m.replace("api=0", "api=1") } catch (b) {}
                        m += "&api=1", r.attr("src", m);
                        var f = t.find("iframe")[0],
                            x = (jQuery("#" + c), $f(c));
                        x.addEvent("ready", function() {
                            if (t.addClass("rs-apiready"), x.addEvent("play", function(e) { t.data("nextslidecalled", 0), punchgs.TweenLite.to(t.find(".tp-videoposter"), .3, { autoAlpha: 0, force3D: "auto", ease: punchgs.Power3.easeInOut }), punchgs.TweenLite.to(t.find("iframe"), .3, { autoAlpha: 1, display: "block", ease: punchgs.Power3.easeInOut }), n.c.trigger("revolution.slide.onvideoplay", o(x, "vimeo", t.data())), n.videoplaying = !0, l(t, n), h ? n.c.trigger("stoptimer") : n.videoplaying = !1, "mute" == t.data("volume") || i.lastToggleState(t.data("videomutetoggledby")) ? x.api("setVolume", "0") : x.api("setVolume", parseInt(t.data("volume"), 0) / 100 || .75), i.toggleState(t.data("videotoggledby")) }), x.addEvent("playProgress", function(i) {
                                    var a = e(t.data("videoendat"));
                                    if (t.data("currenttime", i.seconds), 0 != a && Math.abs(a - i.seconds) < .3 && a > i.seconds && 1 != t.data("nextslidecalled"))
                                        if (p) { x.api("play");
                                            var o = e(t.data("videostartat")); - 1 != o && x.api("seekTo", o) } else 1 == t.data("nextslideatend") && (t.data("nextslideatend-triggered", 1), t.data("nextslidecalled", 1), n.c.revnext()), x.api("pause") }), x.addEvent("finish", function(e) { d(t, n), n.videoplaying = !1, n.c.trigger("starttimer"), n.c.trigger("revolution.slide.onvideostop", o(x, "vimeo", t.data())), 1 == t.data("nextslideatend") && (t.data("nextslideatend-triggered", 1), n.c.revnext()), (void 0 == n.currentLayerVideoIsPlaying || n.currentLayerVideoIsPlaying.attr("id") == t.attr("id")) && i.unToggleState(t.data("videotoggledby")) }), x.addEvent("pause", function(e) { t.find(".tp-videoposter").length > 0 && "on" == t.data("showcoveronpause") && (punchgs.TweenLite.to(t.find(".tp-videoposter"), .3, { autoAlpha: 1, force3D: "auto", ease: punchgs.Power3.easeInOut }), punchgs.TweenLite.to(t.find("iframe"), .3, { autoAlpha: 0, ease: punchgs.Power3.easeInOut })), n.videoplaying = !1, d(t, n), n.c.trigger("starttimer"), n.c.trigger("revolution.slide.onvideostop", o(x, "vimeo", t.data())), (void 0 == n.currentLayerVideoIsPlaying || n.currentLayerVideoIsPlaying.attr("id") == t.attr("id")) && i.unToggleState(t.data("videotoggledby")) }), t.find(".tp-videoposter").unbind("click"), t.find(".tp-videoposter").click(function() {
                                    return a ? void 0 : (x.api("play"), !1) }), t.data("startvideonow")) { x.api("play");
                                var s = e(t.data("videostartat")); - 1 != s && x.api("seekTo", s) }
                            t.data("videolistenerexist", 1) }) } else {
                    var _ = e(t.data("videostartat"));
                    switch (t.data("videotype")) {
                        case "youtube":
                            s && (t.data("player").playVideo(), -1 != _ && t.data("player").seekTo());
                            break;
                        case "vimeo":
                            if (s) {
                                var x = $f(t.find("iframe").attr("id"));
                                x.api("play"), -1 != _ && x.api("seekTo", _) } } } },
            r = function(t, s, r) {
                if (a && 1 == t.data("disablevideoonmobile")) return !1;
                var c = t.find("video"),
                    p = c[0],
                    h = c.parent(),
                    u = t.data("videoloop"),
                    f = "loopandnoslidestop" != u;
                if (u = "loop" == u || "loopandnoslidestop" == u, h.data("metaloaded", 1), void 0 == c.attr("control") && (0 != t.find(".tp-video-play-button").length || a || t.append('<div class="tp-video-play-button"><i class="revicon-right-dir"></i><span class="tp-revstop">&nbsp;</span></div>'), t.find("video, .tp-poster, .tp-video-play-button").click(function() { t.hasClass("videoisplaying") ? p.pause() : p.play() })), 1 == t.data("forcecover") || t.hasClass("fullscreenvideo") || 1 == t.data("bgvideo"))
                    if (1 == t.data("forcecover") || 1 == t.data("bgvideo")) { h.addClass("fullcoveredvideo");
                        var g = t.data("aspectratio") || "4:3";
                        i.prepareCoveredVideo(g, s, t) } else h.addClass("fullscreenvideo");
                var m = t.find(".tp-vid-play-pause")[0],
                    v = t.find(".tp-vid-mute")[0],
                    w = t.find(".tp-vid-full-screen")[0],
                    y = t.find(".tp-seek-bar")[0],
                    b = t.find(".tp-volume-bar")[0];
                void 0 != m && n(m, "click", function() { 1 == p.paused ? p.play() : p.pause() }), void 0 != v && n(v, "click", function() { 0 == p.muted ? (p.muted = !0, v.innerHTML = "Unmute") : (p.muted = !1, v.innerHTML = "Mute") }), void 0 != w && w && n(w, "click", function() { p.requestFullscreen ? p.requestFullscreen() : p.mozRequestFullScreen ? p.mozRequestFullScreen() : p.webkitRequestFullscreen && p.webkitRequestFullscreen() }), void 0 != y && (n(y, "change", function() {
                    var t = p.duration * (y.value / 100);
                    p.currentTime = t }), n(y, "mousedown", function() { t.addClass("seekbardragged"), p.pause() }), n(y, "mouseup", function() { t.removeClass("seekbardragged"), p.play() })), n(p, "timeupdate", function() {
                    var i = 100 / p.duration * p.currentTime,
                        a = e(t.data("videoendat")),
                        n = p.currentTime;
                    if (void 0 != y && (y.value = i), 0 != a && -1 != a && Math.abs(a - n) <= .3 && a > n && 1 != t.data("nextslidecalled"))
                        if (u) { p.play();
                            var o = e(t.data("videostartat")); - 1 != o && (p.currentTime = o) } else 1 == t.data("nextslideatend") && (t.data("nextslideatend-triggered", 1), t.data("nextslidecalled", 1), s.just_called_nextslide_at_htmltimer = !0, s.c.revnext(), setTimeout(function() { s.just_called_nextslide_at_htmltimer = !1 }, 1e3)), p.pause() }), void 0 != b && n(b, "change", function() { p.volume = b.value }), n(p, "play", function() { t.data("nextslidecalled", 0), "mute" == t.data("volume") && (p.muted = !0), t.addClass("videoisplaying"), l(t, s), f ? (s.videoplaying = !0, s.c.trigger("stoptimer"), s.c.trigger("revolution.slide.onvideoplay", o(p, "html5", t.data()))) : (s.videoplaying = !1, s.c.trigger("starttimer"), s.c.trigger("revolution.slide.onvideostop", o(p, "html5", t.data()))), punchgs.TweenLite.to(t.find(".tp-videoposter"), .3, { autoAlpha: 0, force3D: "auto", ease: punchgs.Power3.easeInOut }), punchgs.TweenLite.to(t.find("video"), .3, { autoAlpha: 1, display: "block", ease: punchgs.Power3.easeInOut });
                    var e = t.find(".tp-vid-play-pause")[0],
                        a = t.find(".tp-vid-mute")[0];
                    void 0 != e && (e.innerHTML = "Pause"), void 0 != a && p.muted && (a.innerHTML = "Unmute"), i.toggleState(t.data("videotoggledby")) }), n(p, "pause", function() { t.find(".tp-videoposter").length > 0 && "on" == t.data("showcoveronpause") && !t.hasClass("seekbardragged") && (punchgs.TweenLite.to(t.find(".tp-videoposter"), .3, { autoAlpha: 1, force3D: "auto", ease: punchgs.Power3.easeInOut }), punchgs.TweenLite.to(t.find("video"), .3, { autoAlpha: 0, ease: punchgs.Power3.easeInOut })), t.removeClass("videoisplaying"), s.videoplaying = !1, d(t, s), s.c.trigger("starttimer"), s.c.trigger("revolution.slide.onvideostop", o(p, "html5", t.data()));
                    var e = t.find(".tp-vid-play-pause")[0];
                    void 0 != e && (e.innerHTML = "Play"), (void 0 == s.currentLayerVideoIsPlaying || s.currentLayerVideoIsPlaying.attr("id") == t.attr("id")) && i.unToggleState(t.data("videotoggledby")) }), n(p, "ended", function() { d(t, s), s.videoplaying = !1, d(t, s), s.c.trigger("starttimer"), s.c.trigger("revolution.slide.onvideostop", o(p, "html5", t.data())), 1 == t.data("nextslideatend") && (1 == !s.just_called_nextslide_at_htmltimer && (t.data("nextslideatend-triggered", 1), s.c.revnext(), s.just_called_nextslide_at_htmltimer = !0), setTimeout(function() { s.just_called_nextslide_at_htmltimer = !1 }, 1500)), t.removeClass("videoisplaying") }) },
            l = function(t, e) { void 0 == e.playingvideos && (e.playingvideos = new Array), t.data("stopallvideos") && void 0 != e.playingvideos && e.playingvideos.length > 0 && (e.lastplayedvideos = jQuery.extend(!0, [], e.playingvideos), jQuery.each(e.playingvideos, function(t, a) { i.stopVideo(a, e) })), e.playingvideos.push(t), e.currentLayerVideoIsPlaying = t },
            d = function(t, e) { void 0 != e.playingvideos && e.playingvideos.splice(jQuery.inArray(t, e.playingvideos), 1) }
    }(jQuery), ! function(t, e, i, a) { "use strict";

        function n(e, i, a) {
            var o, s = this,
                r = "cbp";
            if (t.data(e, "cubeportfolio")) throw new Error("cubeportfolio is already initialized. Destroy it before initialize again!");
            s.obj = e, s.$obj = t(e), t.data(s.obj, "cubeportfolio", s), s.options = t.extend({}, t.fn.cubeportfolio.options, i, s.$obj.data("cbp-options")), s.isAnimating = !0, s.defaultFilter = s.options.defaultFilter, s.registeredEvents = [], s.queue = [], s.addedWrapp = !1, t.isFunction(a) && s.registerEvent("initFinish", a, !0), o = s.$obj.children(), s.options.caption && ("expand" === s.options.caption || n["private"].modernBrowser || (s.options.caption = "minimal"), r += " cbp-caption-active cbp-caption-" + s.options.caption), s.$obj.addClass(r), (0 === o.length || o.first().hasClass("cbp-item")) && (s.wrapInner(s.obj, "cbp-wrapper"), s.addedWrapp = !0), s.$ul = s.$obj.children().addClass("cbp-wrapper"), s.wrapInner(s.obj, "cbp-wrapper-outer"), s.wrapper = s.$obj.children(".cbp-wrapper-outer"), s.blocks = s.$ul.children(".cbp-item"), s.blocksOn = s.blocks, s.wrapInner(s.blocks, "cbp-item-wrapper"), s.plugins = t.map(n.plugins, function(t) {
                return t(s) }), s.triggerEvent("afterPlugins"), s.loadImages(s.$obj, s.display) }
        t.extend(n.prototype, { storeData: function(e, i) {
                var a = this;
                i = i || 0, e.each(function(e, n) {
                    var o = t(n),
                        s = o.width(),
                        r = o.height();
                    o.data("cbp", { index: i + e, wrapper: o.children(".cbp-item-wrapper"), widthInitial: s, heightInitial: r, width: s, height: r, widthAndGap: s + a.options.gapVertical, heightAndGap: r + a.options.gapHorizontal, left: null, leftNew: null, top: null, topNew: null, pack: !1 }) }) }, wrapInner: function(t, e) {
                var n, o, s;
                if (e = e || "", !(t.length && t.length < 1))
                    for (t.length === a && (t = [t]), o = t.length - 1; o >= 0; o--) {
                        for (n = t[o], s = i.createElement("div"), s.setAttribute("class", e); n.childNodes.length;) s.appendChild(n.childNodes[0]);
                        n.appendChild(s) } }, removeAttrImage: function(t) { t.removeAttribute("width"), t.removeAttribute("height"), t.removeAttribute("style") }, loadImages: function(e, i) {
                var a = this;
                requestAnimationFrame(function() {
                    var n = e.find("img").map(function(e, i) {
                            return i.hasAttribute("width") && i.hasAttribute("height") ? (i.style.width = i.getAttribute("width") + "px", i.style.height = i.getAttribute("height") + "px", i.hasAttribute("data-cbp-src") ? null : (null === a.checkSrc(i.src) ? a.removeAttrImage(i) : t("<img>").on("load.cbp error.cbp", function() { a.removeAttrImage(i) }).attr("src", i.src), null)) : a.checkSrc(i.src) }),
                        o = n.length;
                    return 0 === o ? void i.call(a) : void t.each(n, function(e, n) { t("<img>").on("load.cbp error.cbp", function() { o--, 0 === o && i.call(a) }).attr("src", n) }) }) }, checkSrc: function(t) {
                if ("" === t) return null;
                var e = new Image;
                return e.src = t, e.complete && e.naturalWidth !== a && 0 !== e.naturalWidth ? null : t }, display: function() {
                var t = this;
                t.width = t.$obj.outerWidth(), t.storeData(t.blocks), t.triggerEvent("initStartRead"), t.triggerEvent("initStartWrite"), t.layoutAndAdjustment(), t.triggerEvent("initEndRead"), t.triggerEvent("initEndWrite"), t.$obj.addClass("cbp-ready"), t.runQueue("delayFrame", t.delayFrame) }, delayFrame: function() {
                var t = this;
                requestAnimationFrame(function() { t.resizeEvent(), t.triggerEvent("initFinish"), t.isAnimating = !1, t.$obj.trigger("initComplete.cbp") }) }, resizeEvent: function() {
                var t, e = this;
                n["private"].initResizeEvent({ instance: e, fn: function() {
                        var e = this;
                        e.triggerEvent("beforeResizeGrid"), t = e.$obj.outerWidth(), e.width !== t && ("alignCenter" === e.options.gridAdjustment && (e.wrapper[0].style.maxWidth = ""), e.width = t, e.layoutAndAdjustment(), e.triggerEvent("resizeGrid")), e.triggerEvent("resizeWindow") } }) }, gridAdjust: function() {
                var e = this; "responsive" === e.options.gridAdjustment ? e.responsiveLayout() : (e.blocks.removeAttr("style"), e.blocks.each(function(i, a) {
                    var n = t(a).data("cbp"),
                        o = a.getBoundingClientRect(),
                        s = e.columnWidthTruncate(o.right - o.left),
                        r = Math.round(o.bottom - o.top);
                    n.height = r, n.heightAndGap = r + e.options.gapHorizontal, n.width = s, n.widthAndGap = s + e.options.gapVertical }), e.widthAvailable = e.width + e.options.gapVertical), e.triggerEvent("gridAdjust") }, layoutAndAdjustment: function() {
                var t = this;
                t.gridAdjust(), t.layout() }, layout: function() {
                var t = this;
                t.computeBlocks(t.filterConcat(t.defaultFilter)), "slider" === t.options.layoutMode ? (t.sliderLayoutReset(), t.sliderLayout()) : (t.mosaicLayoutReset(), t.mosaicLayout()), t.positionateItems(), t.resizeMainContainer() }, computeFilter: function(t) {
                var e = this;
                e.computeBlocks(t), e.mosaicLayoutReset(), e.mosaicLayout(), e.filterLayout() }, filterLayout: function() {
                var e = this;
                e.blocksOff.addClass("cbp-item-off"), e.blocksOn.removeClass("cbp-item-off").each(function(e, i) {
                    var a = t(i).data("cbp");
                    a.left = a.leftNew, a.top = a.topNew, i.style.left = a.left + "px", i.style.top = a.top + "px" }), e.resizeMainContainer(), e.filterFinish() }, filterFinish: function() {
                var t = this;
                t.blocksAreSorted && t.sortBlocks(t.blocks, "index"), t.isAnimating = !1, t.$obj.trigger("filterComplete.cbp"), t.triggerEvent("filterFinish") }, computeBlocks: function(t) {
                var e = this;
                e.blocksOnInitial = e.blocksOn, e.blocksOn = e.blocks.filter(t), e.blocksOff = e.blocks.not(t), e.triggerEvent("computeBlocksFinish", t) }, responsiveLayout: function() {
                var e = this;
                e.cols = e[t.isArray(e.options.mediaQueries) ? "getColumnsBreakpoints" : "getColumnsAuto"](), e.columnWidth = e.columnWidthTruncate((e.width + e.options.gapVertical) / e.cols), e.widthAvailable = e.columnWidth * e.cols, "mosaic" === e.options.layoutMode && e.getMosaicWidthReference(), e.blocks.each(function(i, a) {
                    var n, o = t(a).data("cbp"),
                        s = 1; "mosaic" === e.options.layoutMode && (s = e.getColsMosaic(o.widthInitial)), n = e.columnWidth * s - e.options.gapVertical, a.style.width = n + "px", o.width = n, o.widthAndGap = n + e.options.gapVertical, a.style.height = "" });
                var i = [];
                e.blocks.each(function(e, a) {
                    var n = t(a),
                        o = n.data("cbp").width;
                    t.each(n.find("img").filter("[width][height]"), function(t, e) {
                        var a = o / parseInt(e.getAttribute("width"), 10);
                        i.push({ el: e, width: o, height: Math.floor(parseInt(e.getAttribute("height"), 10) * a) }) }) }), t.each(i, function(t, e) { e.el.width = e.width, e.el.height = e.height, e.el.style.width = e.width + "px", e.el.style.height = e.height + "px" }), e.blocks.each(function(i, a) {
                    var n = t(a).data("cbp"),
                        o = a.getBoundingClientRect(),
                        s = Math.round(o.bottom - o.top);
                    n.height = s, n.heightAndGap = s + e.options.gapHorizontal }) }, getMosaicWidthReference: function() {
                var e = this,
                    i = [];
                e.blocks.each(function(e, a) {
                    var n = t(a).data("cbp");
                    i.push(n.widthInitial) }), i.sort(function(t, e) {
                    return t - e }), i[0] ? e.mosaicWidthReference = i[0] : e.mosaicWidthReference = e.columnWidth }, getColsMosaic: function(t) {
                var e = this;
                if (t === e.width) return e.cols;
                var i = t / e.mosaicWidthReference;
                return i = i % 1 >= .79 ? Math.ceil(i) : Math.floor(i), Math.min(Math.max(i, 1), e.cols) }, getColumnsAuto: function() {
                var t = this;
                if (0 === t.blocks.length) return 1;
                var e = t.blocks.first().data("cbp").widthInitial + t.options.gapVertical;
                return Math.max(Math.round(t.width / e), 1) }, getColumnsBreakpoints: function() {
                var e, i = this,
                    n = i.width;
                return t.each(i.options.mediaQueries, function(t, i) {
                    return n >= i.width ? (e = i.cols, !1) : void 0 }), e === a && (e = i.options.mediaQueries[i.options.mediaQueries.length - 1].cols), e }, columnWidthTruncate: function(t) {
                return Math.floor(t) }, positionateItems: function() {
                var e, i = this;
                i.blocksOn.removeClass("cbp-item-off").each(function(i, a) { e = t(a).data("cbp"), e.left = e.leftNew, e.top = e.topNew, a.style.left = e.left + "px", a.style.top = e.top + "px" }), i.blocksOff.addClass("cbp-item-off"), i.blocksAreSorted && i.sortBlocks(i.blocks, "index") }, resizeMainContainer: function() {
                var e, i = this,
                    o = Math.max(i.freeSpaces.slice(-1)[0].topStart - i.options.gapHorizontal, 0);
                return "alignCenter" === i.options.gridAdjustment && (e = 0, i.blocksOn.each(function(i, a) {
                    var n = t(a).data("cbp"),
                        o = n.left + n.width;
                    o > e && (e = o) }), i.wrapper[0].style.maxWidth = e + "px"), o === i.height ? void i.triggerEvent("resizeMainContainer") : (i.obj.style.height = o + "px", i.height !== a && (n["private"].modernBrowser ? i.$obj.one(n["private"].transitionend, function() { i.$obj.trigger("pluginResize.cbp") }) : i.$obj.trigger("pluginResize.cbp")), i.height = o, void i.triggerEvent("resizeMainContainer")) }, filterConcat: function(t) {
                return t.replace(/\|/gi, "") }, pushQueue: function(t, e) {
                var i = this;
                i.queue[t] = i.queue[t] || [], i.queue[t].push(e) }, runQueue: function(e, i) {
                var a = this,
                    n = a.queue[e] || [];
                t.when.apply(t, n).then(t.proxy(i, a)) }, clearQueue: function(t) {
                var e = this;
                e.queue[t] = [] }, registerEvent: function(t, e, i) {
                var a = this;
                a.registeredEvents[t] || (a.registeredEvents[t] = []), a.registeredEvents[t].push({ func: e, oneTime: i || !1 }) }, triggerEvent: function(t, e) {
                var i, a, n = this;
                if (n.registeredEvents[t])
                    for (i = 0, a = n.registeredEvents[t].length; a > i; i++) n.registeredEvents[t][i].func.call(n, e), n.registeredEvents[t][i].oneTime && (n.registeredEvents[t].splice(i, 1), i--, a--) }, addItems: function(e, i, a) {
                var o = this;
                o.wrapInner(e, "cbp-item-wrapper"), o.$ul[a](e.addClass("cbp-item-loading").css({ top: "100%", left: 0 })), n["private"].modernBrowser ? e.last().one(n["private"].animationend, function() { o.addItemsFinish(e, i) }) : o.addItemsFinish(e, i), o.loadImages(e, function() {
                    if (o.$obj.addClass("cbp-updateItems"), "append" === a) o.storeData(e, o.blocks.length), t.merge(o.blocks, e);
                    else { o.storeData(e);
                        var i = e.length;
                        o.blocks.each(function(e, a) { t(a).data("cbp").index = i + e }), o.blocks = t.merge(e, o.blocks) }
                    o.triggerEvent("addItemsToDOM", e), o.layoutAndAdjustment(), o.elems && n["public"].showCounter.call(o.obj, o.elems) }) }, addItemsFinish: function(e, i) {
                var a = this;
                a.isAnimating = !1, a.$obj.removeClass("cbp-updateItems"), e.removeClass("cbp-item-loading"), t.isFunction(i) && i.call(a, e) }, removeItems: function(e, i) {
                var a = this;
                a.$obj.addClass("cbp-updateItems"), n["private"].modernBrowser ? e.last().one(n["private"].animationend, function() { a.removeItemsFinish(e, i) }) : a.removeItemsFinish(e, i), e.each(function(e, i) { a.blocks.each(function(e, o) {
                        if (i === o) {
                            var s = t(o);
                            a.blocks.splice(e, 1), n["private"].modernBrowser ? (s.one(n["private"].animationend, function() { s.remove() }), s.addClass("cbp-removeItem")) : s.remove() } }) }), a.blocks.each(function(e, i) { t(i).data("cbp").index = e }), a.layoutAndAdjustment(), a.elems && n["public"].showCounter.call(a.obj, a.elems) }, removeItemsFinish: function(e, i) {
                var a = this;
                a.isAnimating = !1, a.$obj.removeClass("cbp-updateItems"), t.isFunction(i) && i.call(a, e) } }), t.fn.cubeportfolio = function(t, e, i) {
            return this.each(function() {
                if ("object" == typeof t || !t) return n["public"].init.call(this, t, e);
                if (n["public"][t]) return n["public"][t].call(this, e, i);
                throw new Error("Method " + t + " does not exist on jquery.cubeportfolio.js") }) }, n.plugins = {}, t.fn.cubeportfolio.constructor = n }(jQuery, window, document),
    function(t, e, i, a) { "use strict";
        var n = t.fn.cubeportfolio.constructor;
        t.extend(n.prototype, { mosaicLayoutReset: function() {
                var e = this;
                e.blocksAreSorted = !1, e.blocksOn.each(function(e, i) { t(i).data("cbp").pack = !1 }) }, mosaicLayout: function() {
                var t, e = this,
                    i = e.blocksOn.length,
                    a = {};
                for (e.freeSpaces = [{ leftStart: 0, leftEnd: e.widthAvailable, topStart: 0, topEnd: Math.pow(2, 18) }], t = 0; i > t; t++) {
                    if (a = e.getSpaceIndexAndBlock(), null === a) return e.sortBlocksToPreventGaps(), void e.mosaicLayout();
                    e.generateF1F2(a.spaceIndex, a.dataBlock), e.generateG1G2G3G4(a.dataBlock), e.cleanFreeSpaces(), e.addHeightToBlocks() }
                e.blocksAreSorted && e.sortBlocks(e.blocksOn, "topNew") }, getSpaceIndexAndBlock: function() {
                var e = this,
                    i = null;
                return t.each(e.freeSpaces, function(a, n) {
                    var o = n.leftEnd - n.leftStart,
                        s = n.topEnd - n.topStart;
                    return e.blocksOn.each(function(e, r) {
                        var l = t(r).data("cbp");
                        return l.pack !== !0 && l.widthAndGap <= o && l.heightAndGap <= s ? (l.pack = !0, i = { spaceIndex: a, dataBlock: l }, l.leftNew = n.leftStart, l.topNew = n.topStart, !1) : void 0 }), !e.blocksAreSorted && e.options.sortToPreventGaps && a > 0 ? (i = null, !1) : null !== i ? !1 : void 0 }), i }, generateF1F2: function(t, e) {
                var i = this,
                    a = i.freeSpaces[t],
                    n = { leftStart: a.leftStart + e.widthAndGap, leftEnd: a.leftEnd, topStart: a.topStart, topEnd: a.topEnd },
                    o = { leftStart: a.leftStart, leftEnd: a.leftEnd, topStart: a.topStart + e.heightAndGap, topEnd: a.topEnd };
                i.freeSpaces.splice(t, 1), n.leftEnd > n.leftStart && n.topEnd > n.topStart && (i.freeSpaces.splice(t, 0, n), t++), o.leftEnd > o.leftStart && o.topEnd > o.topStart && i.freeSpaces.splice(t, 0, o) }, generateG1G2G3G4: function(e) {
                var i = this,
                    a = [];
                t.each(i.freeSpaces, function(t, n) {
                    var o = i.intersectSpaces(n, e);
                    return null === o ? void a.push(n) : (i.generateG1(n, o, a), i.generateG2(n, o, a), i.generateG3(n, o, a), void i.generateG4(n, o, a)) }), i.freeSpaces = a }, intersectSpaces: function(t, e) {
                var i = { leftStart: e.leftNew, leftEnd: e.leftNew + e.widthAndGap, topStart: e.topNew, topEnd: e.topNew + e.heightAndGap };
                if (t.leftStart === i.leftStart && t.leftEnd === i.leftEnd && t.topStart === i.topStart && t.topEnd === i.topEnd) return null;
                var a = Math.max(t.leftStart, i.leftStart),
                    n = Math.min(t.leftEnd, i.leftEnd),
                    o = Math.max(t.topStart, i.topStart),
                    s = Math.min(t.topEnd, i.topEnd);
                return a >= n || o >= s ? null : { leftStart: a, leftEnd: n, topStart: o, topEnd: s } }, generateG1: function(t, e, i) { t.topStart !== e.topStart && i.push({ leftStart: t.leftStart, leftEnd: t.leftEnd, topStart: t.topStart, topEnd: e.topStart }) }, generateG2: function(t, e, i) { t.leftEnd !== e.leftEnd && i.push({ leftStart: e.leftEnd, leftEnd: t.leftEnd, topStart: t.topStart, topEnd: t.topEnd }) }, generateG3: function(t, e, i) { t.topEnd !== e.topEnd && i.push({ leftStart: t.leftStart, leftEnd: t.leftEnd, topStart: e.topEnd, topEnd: t.topEnd }) }, generateG4: function(t, e, i) { t.leftStart !== e.leftStart && i.push({ leftStart: t.leftStart, leftEnd: e.leftStart, topStart: t.topStart, topEnd: t.topEnd }) }, cleanFreeSpaces: function() {
                var t = this;
                t.freeSpaces.sort(function(t, e) {
                    return t.topStart > e.topStart ? 1 : t.topStart < e.topStart ? -1 : t.leftStart > e.leftStart ? 1 : t.leftStart < e.leftStart ? -1 : 0 }), t.correctSubPixelValues(), t.removeNonMaximalFreeSpaces() }, correctSubPixelValues: function() {
                var t, e, i, a, n = this;
                for (t = 0, e = n.freeSpaces.length - 1; e > t; t++) i = n.freeSpaces[t], a = n.freeSpaces[t + 1], a.topStart - i.topStart <= 1 && (a.topStart = i.topStart) }, removeNonMaximalFreeSpaces: function() {
                var e = this;
                e.uniqueFreeSpaces(), e.freeSpaces = t.map(e.freeSpaces, function(i, a) {
                    return t.each(e.freeSpaces, function(t, e) {
                        return a !== t && e.leftStart <= i.leftStart && e.leftEnd >= i.leftEnd && e.topStart <= i.topStart && e.topEnd >= i.topEnd ? (i = null, !1) : void 0 }), i }) }, uniqueFreeSpaces: function() {
                var e = this,
                    i = [];
                t.each(e.freeSpaces, function(e, a) { t.each(i, function(t, e) {
                        return e.leftStart === a.leftStart && e.leftEnd === a.leftEnd && e.topStart === a.topStart && e.topEnd === a.topEnd ? (a = null, !1) : void 0 }), null !== a && i.push(a) }), e.freeSpaces = i }, addHeightToBlocks: function() {
                var e = this;
                if (!(e.freeSpaces.length > 1)) {
                    var i = e.freeSpaces[0].topStart;
                    e.blocksOn.each(function(e, a) {
                        var n = t(a).data("cbp");
                        if (n.pack === !0) {
                            var o = i - n.topNew - n.heightAndGap;
                            0 > o && (a.style.height = n.height + o + "px") } }) } }, sortBlocksToPreventGaps: function() {
                var e = this;
                e.blocksAreSorted = !0, e.blocksOn.sort(function(e, i) {
                    var a = t(e).data("cbp"),
                        n = t(i).data("cbp");
                    return a.widthAndGap < n.widthAndGap ? 1 : a.widthAndGap > n.widthAndGap ? -1 : a.heightAndGap < n.heightAndGap ? 1 : a.heightAndGap > n.heightAndGap ? -1 : a.index > n.index ? 1 : a.index < n.index ? -1 : void 0 }), e.blocksOn.each(function(e, i) { t(i).data("cbp").pack = !1, i.style.height = "" }) }, sortBlocks: function(e, i) { e.sort(function(e, a) {
                    var n = t(e).data("cbp"),
                        o = t(a).data("cbp");
                    return n[i] > o[i] ? 1 : n[i] < o[i] ? -1 : n.leftNew > o.leftNew ? 1 : n.leftNew < o.leftNew ? -1 : 0 }) } }) }(jQuery, window, document), jQuery.fn.cubeportfolio.options = { filters: "", loadMore: "", loadMoreAction: "click", search: "", layoutMode: "grid", sortToPreventGaps: !1, drag: !0, auto: !1, autoTimeout: 5e3, autoPauseOnHover: !0, showNavigation: !0, showPagination: !0, rewindNav: !0, scrollByPage: !1, defaultFilter: "*", filterDeeplinking: !1, animationType: "fadeOut", gridAdjustment: "responsive", mediaQueries: !1, gapHorizontal: 10, gapVertical: 10, caption: "pushTop", displayType: "fadeIn", displayTypeSpeed: 400, lightboxDelegate: ".cbp-lightbox", lightboxGallery: !0, lightboxTitleSrc: "data-title", lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>', singlePageDelegate: ".cbp-singlePage", singlePageDeeplinking: !0, singlePageStickyNavigation: !0, singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>', singlePageAnimation: "left", singlePageCallback: null, singlePageInlineDelegate: ".cbp-singlePageInline", singlePageInlineDeeplinking: !1, singlePageInlinePosition: "top", singlePageInlineInFocus: !0, singlePageInlineCallback: null, plugins: {} },
    function(t, e, i, a) { "use strict";
        var n = t.fn.cubeportfolio.constructor;
        n["private"] = { resizeEventArray: [], initResizeEvent: function(t) {
                var e = n["private"];
                0 === e.resizeEventArray.length && e.resizeEvent(), e.resizeEventArray.push(t) }, destroyResizeEvent: function(i) {
                var a = n["private"],
                    o = t.map(a.resizeEventArray, function(t, e) {
                        return t.instance !== i ? t : void 0 });
                a.resizeEventArray = o, 0 === a.resizeEventArray.length && t(e).off("resize.cbp") }, resizeEvent: function() {
                var i, a = n["private"];
                t(e).on("resize.cbp", function() { clearTimeout(i), i = setTimeout(function() { e.innerHeight != screen.height && t.each(a.resizeEventArray, function(t, e) { e.fn.call(e.instance) }) }, 50) }) }, checkInstance: function(e) {
                var i = t.data(this, "cubeportfolio");
                if (!i) throw new Error("cubeportfolio is not initialized. Initialize it before calling " + e + " method!");
                return i.triggerEvent("publicMethod"), i }, browserInfo: function() {
                var t, i, o, s = n["private"],
                    r = navigator.appVersion; - 1 !== r.indexOf("MSIE 8.") ? s.browser = "ie8" : -1 !== r.indexOf("MSIE 9.") ? s.browser = "ie9" : -1 !== r.indexOf("MSIE 10.") ? s.browser = "ie10" : e.ActiveXObject || "ActiveXObject" in e ? s.browser = "ie11" : /android/gi.test(r) ? s.browser = "android" : /iphone|ipad|ipod/gi.test(r) ? s.browser = "ios" : /chrome/gi.test(r) ? s.browser = "chrome" : s.browser = "", o = s.styleSupport("perspective"), typeof o !== a && (t = s.styleSupport("transition"), s.transitionend = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[t], i = s.styleSupport("animation"), s.animationend = { WebkitAnimation: "webkitAnimationEnd", animation: "animationend" }[i], s.animationDuration = { WebkitAnimation: "webkitAnimationDuration", animation: "animationDuration" }[i], s.animationDelay = { WebkitAnimation: "webkitAnimationDelay", animation: "animationDelay" }[i], s.transform = s.styleSupport("transform"), t && i && s.transform && (s.modernBrowser = !0)) }, styleSupport: function(t) {
                var e, a = "Webkit" + t.charAt(0).toUpperCase() + t.slice(1),
                    n = i.createElement("div");
                return t in n.style ? e = t : a in n.style && (e = a), n = null, e } }, n["private"].browserInfo() }(jQuery, window, document),
    function(t, e, i, a) {
        "use strict";
        var n = t.fn.cubeportfolio.constructor;
        n["public"] = {
            init: function(t, e) { new n(this, t, e) },
            destroy: function(e) {
                var i = n["private"].checkInstance.call(this, "destroy");
                i.triggerEvent("beforeDestroy"), t.removeData(this, "cubeportfolio"), i.blocks.removeData("cbp"), i.$obj.removeClass("cbp-ready").removeAttr("style"), i.$ul.removeClass("cbp-wrapper"), n["private"].destroyResizeEvent(i), i.$obj.off(".cbp"), i.blocks.removeClass("cbp-item-off").removeAttr("style"), i.blocks.find(".cbp-item-wrapper").children().unwrap(), i.options.caption && i.$obj.removeClass("cbp-caption-active cbp-caption-" + i.options.caption), i.destroySlider(), i.$ul.unwrap(), i.addedWrapp && i.blocks.unwrap(),
                    t.each(i.plugins, function(t, e) { "function" == typeof e.destroy && e.destroy() }), t.isFunction(e) && e.call(i), i.triggerEvent("afterDestroy")
            },
            filter: function(e, i) {
                var o, s = n["private"].checkInstance.call(this, "filter");
                if (!s.isAnimating) {
                    if (s.isAnimating = !0, t.isFunction(i) && s.registerEvent("filterFinish", i, !0), t.isFunction(e)) {
                        if (o = e.call(s, s.blocks), o === a) throw new Error("When you call cubeportfolio API `filter` method with a param of type function you must return the blocks that will be visible.") } else {
                        if (s.options.filterDeeplinking) {
                            var r = location.href.replace(/#cbpf=(.*?)([#\?&]|$)/gi, "");
                            location.href = r + "#cbpf=" + encodeURIComponent(e), s.singlePage && s.singlePage.url && (s.singlePage.url = location.href) }
                        s.defaultFilter = e, o = s.filterConcat(s.defaultFilter) }
                    s.singlePageInline && s.singlePageInline.isOpen ? s.singlePageInline.close("promise", { callback: function() { s.computeFilter(o) } }) : s.computeFilter(o) } },
            showCounter: function(e, i) {
                var a = n["private"].checkInstance.call(this, "showCounter");
                t.isFunction(i) && a.registerEvent("showCounterFinish", i, !0), a.elems = e, e.each(function() {
                    var e = t(this),
                        i = a.blocks.filter(e.data("filter")).length;
                    e.find(".cbp-filter-counter").text(i) }), a.triggerEvent("showCounterFinish", e) },
            appendItems: function(t, e) { n["public"].append.call(this, t, e) },
            append: function(e, i) {
                var a = n["private"].checkInstance.call(this, "append"),
                    o = t(e).filter(".cbp-item");
                return a.isAnimating || o.length < 1 ? void(t.isFunction(i) && i.call(a, o)) : (a.isAnimating = !0, void(a.singlePageInline && a.singlePageInline.isOpen ? a.singlePageInline.close("promise", { callback: function() { a.addItems(o, i, "append") } }) : a.addItems(o, i, "append"))) },
            prepend: function(e, i) {
                var a = n["private"].checkInstance.call(this, "prepend"),
                    o = t(e).filter(".cbp-item");
                return a.isAnimating || o.length < 1 ? void(t.isFunction(i) && i.call(a, o)) : (a.isAnimating = !0, void(a.singlePageInline && a.singlePageInline.isOpen ? a.singlePageInline.close("promise", { callback: function() { a.addItems(o, i, "prepend") } }) : a.addItems(o, i, "prepend"))) },
            remove: function(e, i) {
                var a = n["private"].checkInstance.call(this, "remove"),
                    o = t(e).filter(".cbp-item");
                return a.isAnimating || o.length < 1 ? void(t.isFunction(i) && i.call(a, o)) : (a.isAnimating = !0, void(a.singlePageInline && a.singlePageInline.isOpen ? a.singlePageInline.close("promise", { callback: function() { a.removeItems(o, i) } }) : a.removeItems(o, i))) }
        }
    }(jQuery, window, document),
    function(t, e, i, a) { "use strict";
        var n = t.fn.cubeportfolio.constructor;
        t.extend(n.prototype, { updateSliderPagination: function() {
                var e, i, a = this;
                if (a.options.showPagination) {
                    for (e = Math.ceil(a.blocksOn.length / a.cols), a.navPagination.empty(), i = e - 1; i >= 0; i--) t("<div/>", { "class": "cbp-nav-pagination-item", "data-slider-action": "jumpTo" }).appendTo(a.navPagination);
                    a.navPaginationItems = a.navPagination.children() }
                a.enableDisableNavSlider() }, destroySlider: function() {
                var e = this; "slider" === e.options.layoutMode && (e.$obj.removeClass("cbp-mode-slider"), e.$ul.removeAttr("style"), e.$ul.off(".cbp"), t(i).off(".cbp"), e.options.auto && e.stopSliderAuto()) }, nextSlider: function(t) {
                var e = this;
                if (e.isEndSlider()) {
                    if (!e.isRewindNav()) return;
                    e.sliderActive = 0 } else e.options.scrollByPage ? e.sliderActive = Math.min(e.sliderActive + e.cols, e.blocksOn.length - e.cols) : e.sliderActive += 1;
                e.goToSlider() }, prevSlider: function(t) {
                var e = this;
                if (e.isStartSlider()) {
                    if (!e.isRewindNav()) return;
                    e.sliderActive = e.blocksOn.length - e.cols } else e.options.scrollByPage ? e.sliderActive = Math.max(0, e.sliderActive - e.cols) : e.sliderActive -= 1;
                e.goToSlider() }, jumpToSlider: function(t) {
                var e = this,
                    i = Math.min(t.index() * e.cols, e.blocksOn.length - e.cols);
                i !== e.sliderActive && (e.sliderActive = i, e.goToSlider()) }, jumpDragToSlider: function(t) {
                var e, i, a, n = this,
                    o = t > 0;
                n.options.scrollByPage ? (e = n.cols * n.columnWidth, i = n.cols) : (e = n.columnWidth, i = 1), t = Math.abs(t), a = Math.floor(t / e) * i, t % e > 20 && (a += i), o ? n.sliderActive = Math.min(n.sliderActive + a, n.blocksOn.length - n.cols) : n.sliderActive = Math.max(0, n.sliderActive - a), n.goToSlider() }, isStartSlider: function() {
                return 0 === this.sliderActive }, isEndSlider: function() {
                var t = this;
                return t.sliderActive + t.cols > t.blocksOn.length - 1 }, goToSlider: function() {
                var t = this;
                t.enableDisableNavSlider(), t.updateSliderPosition() }, startSliderAuto: function() {
                var t = this;
                return t.isDrag ? void t.stopSliderAuto() : void(t.timeout = setTimeout(function() { t.nextSlider(), t.startSliderAuto() }, t.options.autoTimeout)) }, stopSliderAuto: function() { clearTimeout(this.timeout) }, enableDisableNavSlider: function() {
                var t, e, i = this;
                i.isRewindNav() || (e = i.isStartSlider() ? "addClass" : "removeClass", i.navPrev[e]("cbp-nav-stop"), e = i.isEndSlider() ? "addClass" : "removeClass", i.navNext[e]("cbp-nav-stop")), i.options.showPagination && (t = i.options.scrollByPage ? Math.ceil(i.sliderActive / i.cols) : i.isEndSlider() ? i.navPaginationItems.length - 1 : Math.floor(i.sliderActive / i.cols), i.navPaginationItems.removeClass("cbp-nav-pagination-active").eq(t).addClass("cbp-nav-pagination-active")), i.customPagination && (t = i.options.scrollByPage ? Math.ceil(i.sliderActive / i.cols) : i.isEndSlider() ? i.customPaginationItems.length - 1 : Math.floor(i.sliderActive / i.cols), i.customPaginationItems.removeClass(i.customPaginationClass).eq(t).addClass(i.customPaginationClass)) }, isRewindNav: function() {
                var t = this;
                return t.options.showNavigation ? t.blocksOn.length <= t.cols ? !1 : !!t.options.rewindNav : !0 }, sliderItemsLength: function() {
                return this.blocksOn.length <= this.cols }, sliderLayout: function() {
                var e = this;
                e.blocksOn.each(function(i, a) {
                    var n = t(a).data("cbp");
                    n.leftNew = e.columnWidth * i, n.topNew = 0, e.sliderFreeSpaces.push({ topStart: n.heightAndGap }) }), e.getFreeSpacesForSlider(), e.$ul.width(e.columnWidth * e.blocksOn.length - e.options.gapVertical) }, getFreeSpacesForSlider: function() {
                var t = this;
                t.freeSpaces = t.sliderFreeSpaces.slice(t.sliderActive, t.sliderActive + t.cols), t.freeSpaces.sort(function(t, e) {
                    return t.topStart > e.topStart ? 1 : t.topStart < e.topStart ? -1 : void 0 }) }, updateSliderPosition: function() {
                var t = this,
                    e = -t.sliderActive * t.columnWidth;
                n["private"].modernBrowser ? t.$ul[0].style[n["private"].transform] = "translate3d(" + e + "px, 0px, 0)" : t.$ul[0].style.left = e + "px", t.getFreeSpacesForSlider(), t.resizeMainContainer() }, dragSlider: function() {
                function o(e) {
                    if (!m.sliderItemsLength()) {
                        if (b ? g = e : e.preventDefault(), m.options.auto && m.stopSliderAuto(), w) return void t(h).one("click.cbp", function() {
                            return !1 });
                        h = t(e.target), c = d(e).x, p = 0, u = -m.sliderActive * m.columnWidth, f = m.columnWidth * (m.blocksOn.length - m.cols), v.on(y.move, r), v.on(y.end, s), m.$obj.addClass("cbp-mode-slider-dragStart") } }

                function s(t) { m.$obj.removeClass("cbp-mode-slider-dragStart"), w = !0, 0 !== p ? (h.one("click.cbp", function(t) {
                        return !1 }), requestAnimationFrame(function() { m.jumpDragToSlider(p), m.$ul.one(n["private"].transitionend, l) })) : l.call(m), v.off(y.move), v.off(y.end) }

                function r(t) { p = c - d(t).x, (p > 8 || -8 > p) && t.preventDefault(), m.isDrag = !0;
                    var e = u - p;
                    0 > p && u > p ? e = (u - p) / 5 : p > 0 && -f > u - p && (e = -f + (f + u - p) / 5), n["private"].modernBrowser ? m.$ul[0].style[n["private"].transform] = "translate3d(" + e + "px, 0px, 0)" : m.$ul[0].style.left = e + "px" }

                function l() {
                    if (w = !1, m.isDrag = !1, m.options.auto) {
                        if (m.mouseIsEntered) return;
                        m.startSliderAuto() } }

                function d(t) {
                    return t.originalEvent !== a && t.originalEvent.touches !== a && (t = t.originalEvent.touches[0]), { x: t.pageX, y: t.pageY } }
                var c, p, h, u, f, g, m = this,
                    v = t(i),
                    w = !1,
                    y = {},
                    b = !1;
                m.isDrag = !1, "ontouchstart" in e || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? (y = { start: "touchstart.cbp", move: "touchmove.cbp", end: "touchend.cbp" }, b = !0) : y = { start: "mousedown.cbp", move: "mousemove.cbp", end: "mouseup.cbp" }, m.$ul.on(y.start, o) }, sliderLayoutReset: function() {
                var t = this;
                t.freeSpaces = [], t.sliderFreeSpaces = [] } }) }(jQuery, window, document), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e }),
    function() {
        for (var t = 0, e = ["moz", "webkit"], i = 0; i < e.length && !window.requestAnimationFrame; i++) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
            var a = (new Date).getTime(),
                n = Math.max(0, 16 - (a - t)),
                o = window.setTimeout(function() { e(a + n) }, n);
            return t = a + n, o }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) { clearTimeout(t) }) }(),
    function(t, e, i, a) { "use strict";

        function n(t) {
            var e = this;
            e.parent = t, t.filterLayout = e.filterLayout, t.registerEvent("computeBlocksFinish", function(e) { t.blocksOn2On = t.blocksOnInitial.filter(e), t.blocksOn2Off = t.blocksOnInitial.not(e) }) }
        var o = t.fn.cubeportfolio.constructor;
        n.prototype.filterLayout = function() {
            function e() { i.blocks.removeClass("cbp-item-on2off cbp-item-off2on cbp-item-on2on").each(function(e, i) {
                    var a = t(i).data("cbp");
                    a.left = a.leftNew, a.top = a.topNew, i.style.left = a.left + "px", i.style.top = a.top + "px", i.style[o["private"].transform] = "" }), i.blocksOff.addClass("cbp-item-off"), i.$obj.removeClass("cbp-animation-" + i.options.animationType), i.filterFinish() }
            var i = this;
            i.$obj.addClass("cbp-animation-" + i.options.animationType), i.blocksOn2On.addClass("cbp-item-on2on").each(function(e, i) {
                var a = t(i).data("cbp");
                i.style[o["private"].transform] = "translate3d(" + (a.leftNew - a.left) + "px, " + (a.topNew - a.top) + "px, 0)" }), i.blocksOn2Off.addClass("cbp-item-on2off"), i.blocksOff2On = i.blocksOn.filter(".cbp-item-off").removeClass("cbp-item-off").addClass("cbp-item-off2on").each(function(e, i) {
                var a = t(i).data("cbp");
                i.style.left = a.leftNew + "px", i.style.top = a.topNew + "px" }), i.blocksOn2Off.length ? i.blocksOn2Off.last().data("cbp").wrapper.one(o["private"].animationend, e) : i.blocksOff2On.length ? i.blocksOff2On.last().data("cbp").wrapper.one(o["private"].animationend, e) : e(), i.resizeMainContainer() }, n.prototype.destroy = function() {
            var t = this.parent;
            t.$obj.removeClass("cbp-animation-" + t.options.animationType) }, o.plugins.animationClassic = function(e) {
            return !o["private"].modernBrowser || t.inArray(e.options.animationType, ["boxShadow", "fadeOut", "flipBottom", "flipOut", "quicksand", "scaleSides", "skew"]) < 0 ? null : new n(e) } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(t) {
            var e = this;
            e.parent = t, t.filterLayout = e.filterLayout }
        var o = t.fn.cubeportfolio.constructor;
        n.prototype.filterLayout = function() {
            function e() { i.wrapper[0].removeChild(a), "sequentially" === i.options.animationType && i.blocksOn.each(function(e, i) { t(i).data("cbp").wrapper[0].style[o["private"].animationDelay] = "" }), i.$obj.removeClass("cbp-animation-" + i.options.animationType), i.filterFinish() }
            var i = this,
                a = i.$ul[0].cloneNode(!0);
            a.setAttribute("class", "cbp-wrapper-helper"), i.wrapper[0].insertBefore(a, i.$ul[0]), requestAnimationFrame(function() { i.$obj.addClass("cbp-animation-" + i.options.animationType), i.blocksOff.addClass("cbp-item-off"), i.blocksOn.removeClass("cbp-item-off").each(function(e, a) {
                    var n = t(a).data("cbp");
                    n.left = n.leftNew, n.top = n.topNew, a.style.left = n.left + "px", a.style.top = n.top + "px", "sequentially" === i.options.animationType && (n.wrapper[0].style[o["private"].animationDelay] = 60 * e + "ms") }), i.blocksOn.length ? i.blocksOn.last().data("cbp").wrapper.one(o["private"].animationend, e) : i.blocksOnInitial.length ? i.blocksOnInitial.last().data("cbp").wrapper.one(o["private"].animationend, e) : e(), i.resizeMainContainer() }) }, n.prototype.destroy = function() {
            var t = this.parent;
            t.$obj.removeClass("cbp-animation-" + t.options.animationType) }, o.plugins.animationClone = function(e) {
            return !o["private"].modernBrowser || t.inArray(e.options.animationType, ["fadeOutTop", "slideLeft", "sequentially"]) < 0 ? null : new n(e) } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(t) {
            var e = this;
            e.parent = t, t.filterLayout = e.filterLayout }
        var o = t.fn.cubeportfolio.constructor;
        n.prototype.filterLayout = function() {
            function e() { i.wrapper[0].removeChild(a[0]), i.$obj.removeClass("cbp-animation-" + i.options.animationType), i.blocks.each(function(e, i) { t(i).data("cbp").wrapper[0].style[o["private"].animationDelay] = "" }), i.filterFinish() }
            var i = this,
                a = i.$ul.clone(!0, !0);
            a[0].setAttribute("class", "cbp-wrapper-helper"), i.wrapper[0].insertBefore(a[0], i.$ul[0]);
            var n = a.find(".cbp-item").not(".cbp-item-off");
            i.sortBlocks(n, "top"), n.children(".cbp-item-wrapper").each(function(t, e) { e.style[o["private"].animationDelay] = 50 * t + "ms" }), requestAnimationFrame(function() { i.$obj.addClass("cbp-animation-" + i.options.animationType), i.blocksOff.addClass("cbp-item-off"), i.blocksOn.removeClass("cbp-item-off").each(function(e, i) {
                    var a = t(i).data("cbp");
                    a.left = a.leftNew, a.top = a.topNew, i.style.left = a.left + "px", i.style.top = a.top + "px", a.wrapper[0].style[o["private"].animationDelay] = 50 * e + "ms" });
                var a = i.blocksOn.length,
                    s = n.length;
                0 === a && 0 === s ? e() : s > a ? n.last().children(".cbp-item-wrapper").one(o["private"].animationend, e) : i.blocksOn.last().data("cbp").wrapper.one(o["private"].animationend, e), i.resizeMainContainer() }) }, n.prototype.destroy = function() {
            var t = this.parent;
            t.$obj.removeClass("cbp-animation-" + t.options.animationType) }, o.plugins.animationCloneDelay = function(e) {
            return !o["private"].modernBrowser || t.inArray(e.options.animationType, ["3dflip", "flipOutDelay", "foldLeft", "frontRow", "rotateRoom", "rotateSides", "scaleDown", "slideDelay", "unfold"]) < 0 ? null : new n(e) } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(t) {
            var e = this;
            e.parent = t, t.filterLayout = e.filterLayout }
        var o = t.fn.cubeportfolio.constructor;
        n.prototype.filterLayout = function() {
            function e() { i.wrapper[0].removeChild(a), i.$obj.removeClass("cbp-animation-" + i.options.animationType), i.filterFinish() }
            var i = this,
                a = i.$ul[0].cloneNode(!0);
            a.setAttribute("class", "cbp-wrapper-helper"), i.wrapper[0].insertBefore(a, i.$ul[0]), requestAnimationFrame(function() { i.$obj.addClass("cbp-animation-" + i.options.animationType), i.blocksOff.addClass("cbp-item-off"), i.blocksOn.removeClass("cbp-item-off").each(function(e, i) {
                    var a = t(i).data("cbp");
                    a.left = a.leftNew, a.top = a.topNew, i.style.left = a.left + "px", i.style.top = a.top + "px" }), i.blocksOn.length ? i.$ul.one(o["private"].animationend, e) : i.blocksOnInitial.length ? t(a).one(o["private"].animationend, e) : e(), i.resizeMainContainer() }) }, n.prototype.destroy = function() {
            var t = this.parent;
            t.$obj.removeClass("cbp-animation-" + t.options.animationType) }, o.plugins.animationWrapper = function(e) {
            return !o["private"].modernBrowser || t.inArray(e.options.animationType, ["bounceBottom", "bounceLeft", "bounceTop", "moveLeft"]) < 0 ? null : new n(e) } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(e) {
            var i = this;
            i.parent = e, e.registerEvent("initFinish", function() { e.$obj.on("click.cbp", ".cbp-caption-defaultWrap", function(i) {
                    if (i.preventDefault(), !e.isAnimating) { e.isAnimating = !0;
                        var a = t(this),
                            n = a.next(),
                            o = a.parent(),
                            s = { position: "relative", height: n.outerHeight(!0) },
                            r = { position: "relative", height: 0 };
                        if (e.$obj.addClass("cbp-caption-expand-active"), o.hasClass("cbp-caption-expand-open")) {
                            var l = r;
                            r = s, s = l, o.removeClass("cbp-caption-expand-open") }
                        n.css(s), e.$obj.one("pluginResize.cbp", function() { e.isAnimating = !1, e.$obj.removeClass("cbp-caption-expand-active"), 0 === s.height && (o.removeClass("cbp-caption-expand-open"), n.attr("style", "")) }), e.layoutAndAdjustment(), n.css(r), requestAnimationFrame(function() { o.addClass("cbp-caption-expand-open"), n.css(s), e.triggerEvent("gridAdjust"), e.triggerEvent("resizeGrid") }) } }) }, !0) }
        var o = t.fn.cubeportfolio.constructor;
        n.prototype.destroy = function() { this.parent.$obj.find(".cbp-caption-defaultWrap").off("click.cbp").parent().removeClass("cbp-caption-expand-active") }, o.plugins.captionExpand = function(t) {
            return "expand" !== t.options.caption ? null : new n(t) } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(e) {
            var i = t.Deferred();
            e.pushQueue("delayFrame", i), e.registerEvent("initEndWrite", function() { e.blocksOn.each(function(t, i) { i.style[o["private"].animationDelay] = t * e.options.displayTypeSpeed + "ms" }), e.$obj.addClass("cbp-displayType-bottomToTop"), e.blocksOn.last().one(o["private"].animationend, function() { e.$obj.removeClass("cbp-displayType-bottomToTop"), e.blocksOn.each(function(t, e) { e.style[o["private"].animationDelay] = "" }), i.resolve() }) }, !0) }
        var o = t.fn.cubeportfolio.constructor;
        o.plugins.displayBottomToTop = function(t) {
            return o["private"].modernBrowser && "bottomToTop" === t.options.displayType && 0 !== t.blocksOn.length ? new n(t) : null } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(e) {
            var i = t.Deferred();
            e.pushQueue("delayFrame", i), e.registerEvent("initEndWrite", function() { e.obj.style[o["private"].animationDuration] = e.options.displayTypeSpeed + "ms", e.$obj.addClass("cbp-displayType-fadeIn"), e.$obj.one(o["private"].animationend, function() { e.$obj.removeClass("cbp-displayType-fadeIn"), e.obj.style[o["private"].animationDuration] = "", i.resolve() }) }, !0) }
        var o = t.fn.cubeportfolio.constructor;
        o.plugins.displayFadeIn = function(t) {
            return !o["private"].modernBrowser || "lazyLoading" !== t.options.displayType && "fadeIn" !== t.options.displayType || 0 === t.blocksOn.length ? null : new n(t) } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(e) {
            var i = t.Deferred();
            e.pushQueue("delayFrame", i), e.registerEvent("initEndWrite", function() { e.obj.style[o["private"].animationDuration] = e.options.displayTypeSpeed + "ms", e.$obj.addClass("cbp-displayType-fadeInToTop"), e.$obj.one(o["private"].animationend, function() { e.$obj.removeClass("cbp-displayType-fadeInToTop"), e.obj.style[o["private"].animationDuration] = "", i.resolve() }) }, !0) }
        var o = t.fn.cubeportfolio.constructor;
        o.plugins.displayFadeInToTop = function(t) {
            return o["private"].modernBrowser && "fadeInToTop" === t.options.displayType && 0 !== t.blocksOn.length ? new n(t) : null } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(e) {
            var i = t.Deferred();
            e.pushQueue("delayFrame", i), e.registerEvent("initEndWrite", function() { e.blocksOn.each(function(t, i) { i.style[o["private"].animationDelay] = t * e.options.displayTypeSpeed + "ms" }), e.$obj.addClass("cbp-displayType-sequentially"), e.blocksOn.last().one(o["private"].animationend, function() { e.$obj.removeClass("cbp-displayType-sequentially"), e.blocksOn.each(function(t, e) { e.style[o["private"].animationDelay] = "" }), i.resolve() }) }, !0) }
        var o = t.fn.cubeportfolio.constructor;
        o.plugins.displaySequentially = function(t) {
            return o["private"].modernBrowser && "sequentially" === t.options.displayType && 0 !== t.blocksOn.length ? new n(t) : null } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(e) {
            var i = this;
            i.parent = e, i.filters = t(e.options.filters), i.filterData = [], e.registerEvent("afterPlugins", function(t) { i.filterFromUrl(), i.registerFilter() }), e.registerEvent("resetFiltersVisual", function() {
                var a = e.options.defaultFilter.split("|");
                i.filters.each(function(e, i) {
                    var n = t(i).find(".cbp-filter-item");
                    t.each(a, function(t, e) {
                        var i = n.filter('[data-filter="' + e + '"]');
                        return i.length ? (i.addClass("cbp-filter-item-active").siblings().removeClass("cbp-filter-item-active"), a.splice(t, 1), !1) : void 0 }) }), e.defaultFilter = e.options.defaultFilter }) }
        var o = t.fn.cubeportfolio.constructor;
        n.prototype.registerFilter = function() {
            var e = this,
                i = e.parent,
                a = i.defaultFilter.split("|");
            e.wrap = e.filters.find(".cbp-l-filters-dropdownWrap").on({ "mouseover.cbp": function() { t(this).addClass("cbp-l-filters-dropdownWrap-open") }, "mouseleave.cbp": function() { t(this).removeClass("cbp-l-filters-dropdownWrap-open") } }), e.filters.each(function(n, o) {
                var s = t(o),
                    r = "*",
                    l = s.find(".cbp-filter-item"),
                    d = {};
                s.hasClass("cbp-l-filters-dropdown") && (d.wrap = s.find(".cbp-l-filters-dropdownWrap"), d.header = s.find(".cbp-l-filters-dropdownHeader"), d.headerText = d.header.text()), i.$obj.cubeportfolio("showCounter", l), t.each(a, function(t, e) {
                    return l.filter('[data-filter="' + e + '"]').length ? (r = e, a.splice(t, 1), !1) : void 0 }), t.data(o, "filterName", r), e.filterData.push(o), e.filtersCallback(d, l.filter('[data-filter="' + r + '"]')), l.on("click.cbp", function() {
                    var a = t(this);
                    if (!a.hasClass("cbp-filter-item-active") && !i.isAnimating) { e.filtersCallback(d, a), t.data(o, "filterName", a.data("filter"));
                        var n = t.map(e.filterData, function(e, i) {
                            var a = t.data(e, "filterName");
                            return "" !== a && "*" !== a ? a : null });
                        n.length < 1 && (n = ["*"]);
                        var s = n.join("|");
                        i.defaultFilter !== s && i.$obj.cubeportfolio("filter", s) } }) }) }, n.prototype.filtersCallback = function(e, i) { t.isEmptyObject(e) || (e.wrap.trigger("mouseleave.cbp"), e.headerText ? e.headerText = "" : e.header.html(i.html())), i.addClass("cbp-filter-item-active").siblings().removeClass("cbp-filter-item-active") }, n.prototype.filterFromUrl = function() {
            var t = /#cbpf=(.*?)([#\?&]|$)/gi.exec(location.href);
            null !== t && (this.parent.defaultFilter = decodeURIComponent(t[1])) }, n.prototype.destroy = function() {
            var t = this;
            t.filters.find(".cbp-filter-item").off(".cbp"), t.wrap.off(".cbp") }, o.plugins.filters = function(t) {
            return "" === t.options.filters ? null : new n(t) } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(e) {
            var i = this;
            i.parent = e, i.options = t.extend({}, s, i.parent.options.plugins.inlineSlider), i.runInit(), e.registerEvent("addItemsToDOM", function() { i.runInit() }) }

        function o(t) {
            var e = this;
            t.hasClass("cbp-slider-inline-ready") || (t.addClass("cbp-slider-inline-ready"), e.items = t.find(".cbp-slider-wrapper").children(".cbp-slider-item"), e.active = e.items.filter(".cbp-slider-item--active").index(), e.total = e.items.length - 1, e.updateLeft(), t.find(".cbp-slider-next").on("click.cbp", function(t) { t.preventDefault(), e.active < e.total ? (e.active++, e.updateLeft()) : e.active === e.total && (e.active = 0, e.updateLeft()) }), t.find(".cbp-slider-prev").on("click.cbp", function(t) { t.preventDefault(), e.active > 0 ? (e.active--, e.updateLeft()) : 0 === e.active && (e.active = e.total, e.updateLeft()) })) }
        var s = {},
            r = t.fn.cubeportfolio.constructor;
        o.prototype.updateLeft = function() {
            var t = this;
            t.items.removeClass("cbp-slider-item--active"), t.items.eq(t.active).addClass("cbp-slider-item--active"), t.items.each(function(e, i) { i.style.left = e - t.active + "00%" }) }, n.prototype.runInit = function() {
            var e = this;
            e.parent.$obj.find(".cbp-slider-inline").not(".cbp-slider-inline-ready").each(function(i, a) {
                var n = t(a),
                    s = n.find(".cbp-slider-item--active").find("img")[0];
                s.hasAttribute("data-cbp-src") ? e.parent.$obj.on("lazyLoad.cbp", function(t, e) { e.src === s.src && new o(n) }) : new o(n) }) }, n.prototype.destroy = function() {
            var e = this;
            e.parent.$obj.find(".cbp-slider-next").off("click.cbp"), e.parent.$obj.find(".cbp-slider-prev").off("click.cbp"), e.parent.$obj.off("lazyLoad.cbp"), e.parent.$obj.find(".cbp-slider-inline").each(function(e, i) {
                var a = t(i);
                a.removeClass("cbp-slider-inline-ready");
                var n = a.find(".cbp-slider-item");
                n.removeClass("cbp-slider-item--active"), n.removeAttr("style"), n.eq(0).addClass("cbp-slider-item--active") }) }, r.plugins.inlineSlider = function(t) {
            return new n(t) } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(i) {
            var a = this;
            a.window = t(e), a.parent = i, a.options = t.extend({}, o, a.parent.options.plugins.lazyLoad), i.registerEvent("initEndWrite", function() {
                var t;
                a.triggerImg(), i.registerEvent("resizeMainContainer", function() { a.triggerImg() }), a.window.on("scroll.cbp", function() { clearTimeout(t), t = setTimeout(function() { a.triggerImg() }, 300) }) }, !0) }
        var o = { loadingClass: "cbp-lazyload", threshold: 0 },
            s = t.fn.cubeportfolio.constructor;
        n.prototype.triggerImg = function() {
            var e = this,
                i = e.parent.$obj.find("img").filter("[data-cbp-src]");
            0 !== i.length && (e.screenHeight = e.window.height(), i.each(function(i, a) {
                var n = t(a.parentNode);
                if (!e.isElementInScreen(a)) return void n.addClass(e.options.loadingClass);
                var o = a.getAttribute("data-cbp-src");
                null === e.parent.checkSrc(o) ? (e.removeLazy(a, o), n.removeClass(e.options.loadingClass)) : (n.addClass(e.options.loadingClass), t("<img>").on("load.cbp error.cbp", function() { e.removeLazy(a, o, n) }).attr("src", o)) })) }, n.prototype.removeLazy = function(e, i, a) {
            var n = this;
            e.src = i, e.removeAttribute("data-cbp-src"), n.parent.removeAttrImage(e), n.parent.$obj.trigger("lazyLoad.cbp", e), a && (s["private"].modernBrowser ? t(e).one(s["private"].transitionend, function() { a.removeClass(n.options.loadingClass) }) : a.removeClass(n.options.loadingClass)) }, n.prototype.isElementInScreen = function(t) {
            var e = this,
                i = t.getBoundingClientRect(),
                a = i.bottom + e.options.threshold,
                n = e.screenHeight + a - (i.top - e.options.threshold);
            return a >= 0 && n >= a }, n.prototype.destroy = function() {
            var t = this;
            t.window.off("scroll.cbp") }, s.plugins.lazyLoad = function(t) {
            return new n(t) } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(e) {
            var i = this;
            i.parent = e, i.loadMore = t(e.options.loadMore).find(".cbp-l-loadMore-link"), i.loadMore.length && i[e.options.loadMoreAction]() }
        var o = t.fn.cubeportfolio.constructor;
        n.prototype.click = function() {
            var e = this,
                i = 0;
            e.loadMore.on("click.cbp", function(a) {
                var n = t(this);
                a.preventDefault(), e.parent.isAnimating || n.hasClass("cbp-l-loadMore-stop") || (n.addClass("cbp-l-loadMore-loading"), i++, t.ajax({ url: e.loadMore.attr("href") + "?block=" + i, type: "GET", dataType: "HTML" }).done(function(t) {
                    var a = t.replace(/(\r\n|\n|\r)/gm, ""),
                        o = a.indexOf("cbp-loadMore-block" + i);
                    if (-1 === o) return void n.addClass("cbp-l-loadMore-stop");
                    var s, r = a.indexOf(">", o) + 1,
                        l = a.indexOf("cbp-loadMore-block" + (i + 1));
                    s = -1 === l ? a.lastIndexOf("</") : a.lastIndexOf("</", l), e.parent.$obj.cubeportfolio("append", a.substring(r, s), function() { n.removeClass("cbp-l-loadMore-loading"), -1 === l && n.addClass("cbp-l-loadMore-stop") }) }).fail(function() {})) }) }, n.prototype.auto = function() {
            var i = this;
            i.parent.$obj.on("initComplete.cbp", function() { Object.create({ init: function() {
                        var a = this;
                        a.isActive = !1, a.numberOfClicks = 0, i.loadMore.addClass("cbp-l-loadMore-loading"), a.window = t(e), a.addEvents(), a.getNewItems() }, addEvents: function() {
                        var t, e = this;
                        i.loadMore.on("click.cbp", function(t) { t.preventDefault() }), e.window.on("scroll.loadMoreObject", function() { clearTimeout(t), t = setTimeout(function() { i.parent.isAnimating || e.getNewItems() }, 80) }), i.parent.$obj.on("filterComplete.cbp", function() { e.getNewItems() }) }, getNewItems: function() {
                        var e, a, n = this;
                        n.isActive || i.loadMore.hasClass("cbp-l-loadMore-stop") || (e = i.loadMore.offset().top - 200, a = n.window.scrollTop() + n.window.height(), e > a || (n.isActive = !0, n.numberOfClicks++, t.ajax({ url: i.loadMore.attr("href") + "?block=" + n.numberOfClicks, type: "GET", dataType: "HTML", cache: !0 }).done(function(t) {
                            var e = t.replace(/(\r\n|\n|\r)/gm, ""),
                                a = e.indexOf("cbp-loadMore-block" + n.numberOfClicks);
                            if (-1 === a) return void i.loadMore.addClass("cbp-l-loadMore-stop");
                            var o, s = e.indexOf(">", a) + 1,
                                r = e.indexOf("cbp-loadMore-block" + (n.numberOfClicks + 1));
                            o = -1 === r ? e.lastIndexOf("</") : e.lastIndexOf("</", r), i.parent.$obj.cubeportfolio("append", e.substring(s, o), function() {-1 === r ? (i.loadMore.addClass("cbp-l-loadMore-stop"), n.window.off("scroll.loadMoreObject"), i.parent.$obj.off("filterComplete.cbp")) : (n.isActive = !1, n.window.trigger("scroll.loadMoreObject")) }) }).fail(function() { n.isActive = !1 }))) } }).init() }) }, n.prototype.destroy = function() {
            var i = this;
            i.loadMore.off(".cbp"), t(e).off("scroll.loadMoreObject") }, o.plugins.loadMore = function(t) {
            return "" === t.options.loadMore ? null : new n(t) } }(jQuery, window, document),
    function(t, e, i, a) {
        "use strict";

        function n(t) {
            var e = this;
            e.parent = t, t.options.lightboxShowCounter === !1 && (t.options.lightboxCounter = ""), t.options.singlePageShowCounter === !1 && (t.options.singlePageCounter = ""), t.registerEvent("initStartRead", function() { e.run() }, !0) }
        var o = t.fn.cubeportfolio.constructor,
            s = {
                init: function(e, a) {
                    var n, o = this;
                    if (o.cubeportfolio = e, o.type = a, o.isOpen = !1, o.options = o.cubeportfolio.options, "lightbox" === a && o.cubeportfolio.registerEvent("resizeWindow", function() { o.resizeImage() }), "singlePageInline" !== a) {
                        if (o.createMarkup(), "singlePage" === a && (o.cubeportfolio.registerEvent("resizeWindow", function() {
                                if (o.options.singlePageStickyNavigation) {
                                    var t = o.wrap[0].clientWidth;
                                    t > 0 && (o.navigationWrap.width(t), o.navigation.width(t)) } }), o.options.singlePageDeeplinking)) { o.url = location.href, "#" === o.url.slice(-1) && (o.url = o.url.slice(0, -1));
                            var s = o.url.split("#cbp="),
                                r = s.shift();
                            if (t.each(s, function(e, i) {
                                    return o.cubeportfolio.blocksOn.each(function(e, a) {
                                        var s = t(a).find(o.options.singlePageDelegate + '[href="' + i + '"]');
                                        return s.length ? (n = s, !1) : void 0 }), n ? !1 : void 0 }), n) { o.url = r;
                                var l = n,
                                    d = l.attr("data-cbp-singlePage"),
                                    c = [];
                                d ? c = l.closest(t(".cbp-item")).find('[data-cbp-singlePage="' + d + '"]') : o.cubeportfolio.blocksOn.each(function(e, i) {
                                    var a = t(i);
                                    a.not(".cbp-item-off") && a.find(o.options.singlePageDelegate).each(function(e, i) { t(i).attr("data-cbp-singlePage") || c.push(i) }) }), o.openSinglePage(c, n[0]) } else if (s.length) {
                                var p = i.createElement("a");
                                p.setAttribute("href", s[0]), o.openSinglePage([p], p) } } } else if (o.height = 0, o.createMarkupSinglePageInline(), o.cubeportfolio.registerEvent("resizeGrid", function() { o.isOpen && o.close() }), o.options.singlePageInlineDeeplinking) { o.url = location.href, "#" === o.url.slice(-1) && (o.url = o.url.slice(0, -1));
                        var s = o.url.split("#cbpi="),
                            r = s.shift();
                        t.each(s, function(e, i) {
                            return o.cubeportfolio.blocksOn.each(function(e, a) {
                                var s = t(a).find(o.options.singlePageInlineDelegate + '[href="' + i + '"]');
                                return s.length ? (n = s, !1) : void 0 }), n ? !1 : void 0 }), n && o.cubeportfolio.registerEvent("initFinish", function() { o.openSinglePageInline(o.cubeportfolio.blocksOn, n[0]) }, !0) } },
                createMarkup: function() {
                    var e = this,
                        a = ""; "singlePage" === e.type && "left" !== e.options.singlePageAnimation && (a = " cbp-popup-singlePage-" + e.options.singlePageAnimation), e.wrap = t("<div/>", { "class": "cbp-popup-wrap cbp-popup-" + e.type + a, "data-action": "lightbox" === e.type ? "close" : "" }).on("click.cbp", function(i) {
                        if (!e.stopEvents) {
                            var a = t(i.target).attr("data-action");
                            e[a] && (e[a](), i.preventDefault()) } }), e.content = t("<div/>", { "class": "cbp-popup-content" }).appendTo(e.wrap), t("<div/>", { "class": "cbp-popup-loadingBox" }).appendTo(e.wrap), "ie8" === o["private"].browser && (e.bg = t("<div/>", { "class": "cbp-popup-ie8bg", "data-action": "lightbox" === e.type ? "close" : "" }).appendTo(e.wrap)), e.navigationWrap = t("<div/>", { "class": "cbp-popup-navigation-wrap" }).appendTo(e.wrap), e.navigation = t("<div/>", { "class": "cbp-popup-navigation" }).appendTo(e.navigationWrap), e.closeButton = t("<div/>", { "class": "cbp-popup-close", title: "Close (Esc arrow key)", "data-action": "close" }).appendTo(e.navigation), e.nextButton = t("<div/>", { "class": "cbp-popup-next", title: "Next (Right arrow key)", "data-action": "next" }).appendTo(e.navigation), e.prevButton = t("<div/>", { "class": "cbp-popup-prev", title: "Previous (Left arrow key)", "data-action": "prev" }).appendTo(e.navigation), "singlePage" === e.type && (e.options.singlePageCounter && (e.counter = t(e.options.singlePageCounter).appendTo(e.navigation), e.counter.text("")), e.content.on("click.cbp", e.options.singlePageDelegate, function(t) { t.preventDefault();
                        var i, a = e.dataArray.length,
                            n = this.getAttribute("href");
                        for (i = 0; a > i && e.dataArray[i].url !== n; i++);
                        e.singlePageJumpTo(i - e.current) }), e.wrap.on("mousewheel.cbp DOMMouseScroll.cbp", function(t) { t.stopImmediatePropagation() })), t(i).on("keydown.cbp", function(t) { e.isOpen && (e.stopEvents || (37 === t.keyCode ? e.prev() : 39 === t.keyCode ? e.next() : 27 === t.keyCode && e.close())) }) },
                createMarkupSinglePageInline: function() {
                    var e = this;
                    e.wrap = t("<div/>", { "class": "cbp-popup-singlePageInline" }).on("click.cbp", function(i) {
                        if (!e.stopEvents) {
                            var a = t(i.target).attr("data-action");
                            a && e[a] && (e[a](), i.preventDefault()) } }), e.content = t("<div/>", { "class": "cbp-popup-content" }).appendTo(e.wrap), e.navigation = t("<div/>", { "class": "cbp-popup-navigation" }).appendTo(e.wrap), e.closeButton = t("<div/>", { "class": "cbp-popup-close", title: "Close (Esc arrow key)", "data-action": "close" }).appendTo(e.navigation) },
                destroy: function() {
                    var e = this,
                        a = t("body");
                    t(i).off("keydown.cbp"), a.off("click.cbp", e.options.lightboxDelegate), a.off("click.cbp", e.options.singlePageDelegate), e.content.off("click.cbp", e.options.singlePageDelegate), e.cubeportfolio.$obj.off("click.cbp", e.options.singlePageInlineDelegate), e.cubeportfolio.$obj.off("click.cbp", e.options.lightboxDelegate), e.cubeportfolio.$obj.off("click.cbp", e.options.singlePageDelegate), e.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"), e.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"), e.wrap.remove() },
                openLightbox: function(a, n) {
                    var o, s, r = this,
                        l = 0,
                        d = [];
                    if (!r.isOpen) {
                        if (r.isOpen = !0, r.stopEvents = !1, r.dataArray = [], r.current = null, o = n.getAttribute("href"), null === o) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
                        t.each(a, function(e, i) {
                            var a, n = i.getAttribute("href"),
                                s = n,
                                c = "isImage";
                            if (-1 === t.inArray(n, d)) {
                                if (o === n) r.current = l;
                                else if (!r.options.lightboxGallery) return;
                                /youtube/i.test(n) ? (a = n.substring(n.lastIndexOf("v=") + 2), /autoplay=/i.test(a) || (a += "&autoplay=1"), a = a.replace(/\?|&/, "?"), s = "//www.youtube.com/embed/" + a, c = "isYoutube") : /vimeo\.com/i.test(n) ? (a = n.substring(n.lastIndexOf("/") + 1),
                                    /autoplay=/i.test(a) || (a += "&autoplay=1"), a = a.replace(/\?|&/, "?"), s = "//player.vimeo.com/video/" + a, c = "isVimeo") : /www\.ted\.com/i.test(n) ? (s = "http://embed.ted.com/talks/" + n.substring(n.lastIndexOf("/") + 1) + ".html", c = "isTed") : /soundcloud\.com/i.test(n) ? (s = n, c = "isSoundCloud") : /(\.mp4)|(\.ogg)|(\.ogv)|(\.webm)/i.test(n) ? (s = -1 !== n.indexOf("|") ? n.split("|") : n.split("%7C"), c = "isSelfHostedVideo") : /\.mp3$/i.test(n) && (s = n, c = "isSelfHostedAudio"), r.dataArray.push({ src: s, title: i.getAttribute(r.options.lightboxTitleSrc), type: c }), l++
                            }
                            d.push(n)
                        }), r.counterTotal = r.dataArray.length, 1 === r.counterTotal ? (r.nextButton.hide(), r.prevButton.hide(), r.dataActionImg = "") : (r.nextButton.show(), r.prevButton.show(), r.dataActionImg = 'data-action="next"'), r.wrap.appendTo(i.body), r.scrollTop = t(e).scrollTop(), r.originalStyle = t("html").attr("style"), t("html").css({ overflow: "hidden", marginRight: e.innerWidth - t(i).width() }), r.wrap.addClass("cbp-popup-transitionend"), r.wrap.show(), s = r.dataArray[r.current], r[s.type](s)
                    }
                },
                openSinglePage: function(a, n) {
                    var s, r = this,
                        l = 0,
                        d = [];
                    if (!r.isOpen) {
                        if (r.cubeportfolio.singlePageInline && r.cubeportfolio.singlePageInline.isOpen && r.cubeportfolio.singlePageInline.close(), r.isOpen = !0, r.stopEvents = !1, r.dataArray = [], r.current = null, s = n.getAttribute("href"), null === s) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
                        t.each(a, function(e, i) {
                            var a = i.getAttribute("href"); - 1 === t.inArray(a, d) && (s === a && (r.current = l), r.dataArray.push({ url: a, element: i }), l++), d.push(a) }), r.counterTotal = r.dataArray.length, 1 === r.counterTotal ? (r.nextButton.hide(), r.prevButton.hide()) : (r.nextButton.show(), r.prevButton.show()), r.wrap.appendTo(i.body), r.scrollTop = t(e).scrollTop(), r.wrap.scrollTop(0), r.wrap.show(), r.finishOpen = 2, r.navigationMobile = t(), r.wrap.one(o["private"].transitionend, function() { t("html").css({ overflow: "hidden", marginRight: e.innerWidth - t(i).width() }), r.wrap.addClass("cbp-popup-transitionend"), r.options.singlePageStickyNavigation && (r.wrap.addClass("cbp-popup-singlePage-sticky"), r.navigationWrap.width(r.wrap[0].clientWidth), ("android" === o["private"].browser || "ios" === o["private"].browser) && (r.navigationMobile = t("<div/>", { "class": "cbp-popup-singlePage cbp-popup-singlePage-sticky", id: r.wrap.attr("id") }).on("click.cbp", function(e) {
                                if (!r.stopEvents) {
                                    var i = t(e.target).attr("data-action");
                                    r[i] && (r[i](), e.preventDefault()) } }), r.navigationMobile.appendTo(i.body).append(r.navigationWrap))), r.finishOpen--, r.finishOpen <= 0 && r.updateSinglePageIsOpen.call(r) }), ("ie8" === o["private"].browser || "ie9" === o["private"].browser) && (r.options.singlePageStickyNavigation && (r.navigationWrap.width(r.wrap[0].clientWidth), setTimeout(function() { r.wrap.addClass("cbp-popup-singlePage-sticky") }, 1e3)), r.finishOpen--), r.wrap.addClass("cbp-popup-loading"), r.wrap.offset(), r.wrap.addClass("cbp-popup-singlePage-open"), r.options.singlePageDeeplinking && (r.url = r.url.split("#cbp=")[0], location.href = r.url + "#cbp=" + r.dataArray[r.current].url), t.isFunction(r.options.singlePageCallback) && r.options.singlePageCallback.call(r, r.dataArray[r.current].url, r.dataArray[r.current].element) } },
                openSinglePageInline: function(i, a, n) {
                    var o, s, r, l, d = this;
                    if (n = n || !1, d.fromOpen = n, d.storeBlocks = i, d.storeCurrentBlock = a, d.isOpen) return s = t(a).closest(".cbp-item").index(), void(d.dataArray[d.current].url !== a.getAttribute("href") || d.current !== s ? d.cubeportfolio.singlePageInline.close("open", { blocks: i, currentBlock: a, fromOpen: !0 }) : d.close());
                    if (d.isOpen = !0, d.stopEvents = !1, d.dataArray = [], d.current = null, o = a.getAttribute("href"), null === o) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
                    if (r = t(a).closest(".cbp-item")[0], i.each(function(t, e) { r === e && (d.current = t) }), d.dataArray[d.current] = { url: o, element: a }, l = t(d.dataArray[d.current].element).parents(".cbp-item").addClass("cbp-singlePageInline-active"), d.counterTotal = i.length, d.wrap.insertBefore(d.cubeportfolio.wrapper), "top" === d.options.singlePageInlinePosition) d.blocksToMove = i, d.top = 0;
                    else if ("bottom" === d.options.singlePageInlinePosition) d.blocksToMove = t(), d.top = d.cubeportfolio.height;
                    else if ("above" === d.options.singlePageInlinePosition) d.top = t(i[d.current]).data("cbp").top, d.blocksToMove = t(), i.each(function(e, i) {
                        var a = t(i).data("cbp");
                        a.top + a.height >= d.top && (d.blocksToMove = d.blocksToMove.add(i)) }), d.top = Math.max(d.top - d.options.gapHorizontal, 0);
                    else {
                        var c = t(i[d.current]).data("cbp");
                        d.top = c.top + c.height, d.blocksToMove = t(), i.each(function(e, i) {
                            var a = t(i).data("cbp");
                            a.top + a.height > d.top && (d.blocksToMove = d.blocksToMove.add(i)) }) }
                    if (d.wrap[0].style.height = d.wrap.outerHeight(!0) + "px", d.deferredInline = t.Deferred(), d.options.singlePageInlineInFocus) { d.scrollTop = t(e).scrollTop();
                        var p = d.cubeportfolio.$obj.offset().top + d.top - 100;
                        d.scrollTop !== p ? t("html,body").animate({ scrollTop: p }, 350).promise().then(function() { d.resizeSinglePageInline(), d.deferredInline.resolve() }) : (d.resizeSinglePageInline(), d.deferredInline.resolve()) } else d.resizeSinglePageInline(), d.deferredInline.resolve();
                    d.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-open"), d.wrap.css({ top: d.top }), d.options.singlePageInlineDeeplinking && (d.url = d.url.split("#cbpi=")[0], location.href = d.url + "#cbpi=" + d.dataArray[d.current].url), t.isFunction(d.options.singlePageInlineCallback) && d.options.singlePageInlineCallback.call(d, d.dataArray[d.current].url, d.dataArray[d.current].element) },
                resizeSinglePageInline: function() {
                    var t = this;
                    t.height = 0 === t.top || t.top === t.cubeportfolio.height ? t.wrap.outerHeight(!0) : t.wrap.outerHeight(!0) - t.options.gapHorizontal, t.storeBlocks.each(function(t, e) { o["private"].modernBrowser ? e.style[o["private"].transform] = "" : e.style.marginTop = "" }), t.blocksToMove.each(function(e, i) { o["private"].modernBrowser ? i.style[o["private"].transform] = "translate3d(0px, " + t.height + "px, 0)" : i.style.marginTop = t.height + "px" }), t.cubeportfolio.obj.style.height = t.cubeportfolio.height + t.height + "px" },
                revertResizeSinglePageInline: function() {
                    var e = this;
                    e.deferredInline = t.Deferred(), e.storeBlocks.each(function(t, e) { o["private"].modernBrowser ? e.style[o["private"].transform] = "" : e.style.marginTop = "" }), e.cubeportfolio.obj.style.height = e.cubeportfolio.height + "px" },
                appendScriptsToWrap: function(t) {
                    var e = this,
                        a = 0,
                        n = function(o) {
                            var s = i.createElement("script"),
                                r = o.src;
                            s.type = "text/javascript", s.readyState ? s.onreadystatechange = function() {
                                ("loaded" == s.readyState || "complete" == s.readyState) && (s.onreadystatechange = null, a++, t[a] && n(t[a])) } : s.onload = function() { a++, t[a] && n(t[a]) }, r ? s.src = r : s.text = o.text, e.content[0].appendChild(s) };
                    n(t[0]) },
                updateSinglePage: function(e, i, a) {
                    var n, o = this;
                    o.content.addClass("cbp-popup-content").removeClass("cbp-popup-content-basic"), a === !1 && o.content.removeClass("cbp-popup-content").addClass("cbp-popup-content-basic"), o.counter && (n = t(o.getCounterMarkup(o.options.singlePageCounter, o.current + 1, o.counterTotal)), o.counter.text(n.text())), o.fromAJAX = { html: e, scripts: i }, o.finishOpen--, o.finishOpen <= 0 && o.updateSinglePageIsOpen.call(o) },
                updateSinglePageIsOpen: function() {
                    var e, i = this;
                    i.wrap.addClass("cbp-popup-ready"), i.wrap.removeClass("cbp-popup-loading"), i.content.html(i.fromAJAX.html), i.fromAJAX.scripts && i.appendScriptsToWrap(i.fromAJAX.scripts), i.fromAJAX = {}, i.cubeportfolio.$obj.trigger("updateSinglePageStart.cbp"), e = i.content.find(".cbp-slider"), e ? (e.find(".cbp-slider-item").addClass("cbp-item"), i.slider = e.cubeportfolio({ layoutMode: "slider", mediaQueries: [{ width: 1, cols: 1 }], gapHorizontal: 0, gapVertical: 0, caption: "", coverRatio: "" })) : i.slider = null, i.checkForSocialLinks(i.content), ("android" === o["private"].browser || "ios" === o["private"].browser) && t("html").css({ position: "fixed" }), i.cubeportfolio.$obj.trigger("updateSinglePageComplete.cbp") },
                checkForSocialLinks: function(t) {
                    var e = this;
                    e.createFacebookShare(t.find(".cbp-social-fb")), e.createTwitterShare(t.find(".cbp-social-twitter")), e.createGooglePlusShare(t.find(".cbp-social-googleplus")), e.createPinterestShare(t.find(".cbp-social-pinterest")) },
                createFacebookShare: function(t) { t.length && !t.attr("onclick") && t.attr("onclick", "window.open('http://www.facebook.com/sharer.php?u=" + encodeURIComponent(e.location.href) + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;") },
                createTwitterShare: function(t) { t.length && !t.attr("onclick") && t.attr("onclick", "window.open('https://twitter.com/intent/tweet?source=" + encodeURIComponent(e.location.href) + "&text=" + encodeURIComponent(i.title) + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=300'); return false;") },
                createGooglePlusShare: function(t) { t.length && !t.attr("onclick") && t.attr("onclick", "window.open('https://plus.google.com/share?url=" + encodeURIComponent(e.location.href) + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=450'); return false;") },
                createPinterestShare: function(t) {
                    if (t.length && !t.attr("onclick")) {
                        var i = "",
                            a = this.content.find("img")[0];
                        a && (i = a.src), t.attr("onclick", "window.open('http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(e.location.href) + "&media=" + i + "', '_blank', 'top=100,left=100,toolbar=0,status=0,width=620,height=400'); return false;") } },
                updateSinglePageInline: function(t, e) {
                    var i = this;
                    i.content.html(t), e && i.appendScriptsToWrap(e), i.cubeportfolio.$obj.trigger("updateSinglePageInlineStart.cbp"), i.singlePageInlineIsOpen.call(i) },
                singlePageInlineIsOpen: function() {
                    function t() { e.wrap.addClass("cbp-popup-singlePageInline-ready"), e.wrap[0].style.height = "", e.resizeSinglePageInline(), e.cubeportfolio.$obj.trigger("updateSinglePageInlineComplete.cbp") }
                    var e = this;
                    e.cubeportfolio.loadImages(e.wrap, function() {
                        var i = e.content.find(".cbp-slider");
                        i.length ? (i.find(".cbp-slider-item").addClass("cbp-item"), i.one("initComplete.cbp", function() { e.deferredInline.done(t) }), i.on("pluginResize.cbp", function() { e.deferredInline.done(t) }), e.slider = i.cubeportfolio({ layoutMode: "slider", displayType: "default", mediaQueries: [{ width: 1, cols: 1 }], gapHorizontal: 0, gapVertical: 0, caption: "", coverRatio: "" })) : (e.slider = null, e.deferredInline.done(t)), e.checkForSocialLinks(e.content) }) },
                isImage: function(e) {
                    var i = this;
                    new Image, i.tooggleLoading(!0), i.cubeportfolio.loadImages(t('<div><img src="' + e.src + '"></div>'), function() { i.updateImagesMarkup(e.src, e.title, i.getCounterMarkup(i.options.lightboxCounter, i.current + 1, i.counterTotal)), i.tooggleLoading(!1) }) },
                isVimeo: function(t) {
                    var e = this;
                    e.updateVideoMarkup(t.src, t.title, e.getCounterMarkup(e.options.lightboxCounter, e.current + 1, e.counterTotal)) },
                isYoutube: function(t) {
                    var e = this;
                    e.updateVideoMarkup(t.src, t.title, e.getCounterMarkup(e.options.lightboxCounter, e.current + 1, e.counterTotal)) },
                isTed: function(t) {
                    var e = this;
                    e.updateVideoMarkup(t.src, t.title, e.getCounterMarkup(e.options.lightboxCounter, e.current + 1, e.counterTotal)) },
                isSoundCloud: function(t) {
                    var e = this;
                    e.updateVideoMarkup(t.src, t.title, e.getCounterMarkup(e.options.lightboxCounter, e.current + 1, e.counterTotal)) },
                isSelfHostedVideo: function(t) {
                    var e = this;
                    e.updateSelfHostedVideo(t.src, t.title, e.getCounterMarkup(e.options.lightboxCounter, e.current + 1, e.counterTotal)) },
                isSelfHostedAudio: function(t) {
                    var e = this;
                    e.updateSelfHostedAudio(t.src, t.title, e.getCounterMarkup(e.options.lightboxCounter, e.current + 1, e.counterTotal)) },
                getCounterMarkup: function(t, e, i) {
                    if (!t.length) return "";
                    var a = { current: e, total: i };
                    return t.replace(/\{\{current}}|\{\{total}}/gi, function(t) {
                        return a[t.slice(2, -2)] }) },
                updateSelfHostedVideo: function(t, e, i) {
                    var a, n = this;
                    n.wrap.addClass("cbp-popup-lightbox-isIframe");
                    var o = '<div class="cbp-popup-lightbox-iframe"><video controls="controls" height="auto" style="width: 100%">';
                    for (a = 0; a < t.length; a++) /(\.mp4)/i.test(t[a]) ? o += '<source src="' + t[a] + '" type="video/mp4">' : /(\.ogg)|(\.ogv)/i.test(t[a]) ? o += '<source src="' + t[a] + '" type="video/ogg">' : /(\.webm)/i.test(t[a]) && (o += '<source src="' + t[a] + '" type="video/webm">');
                    o += 'Your browser does not support the video tag.</video><div class="cbp-popup-lightbox-bottom">' + (e ? '<div class="cbp-popup-lightbox-title">' + e + "</div>" : "") + i + "</div></div>", n.content.html(o), n.wrap.addClass("cbp-popup-ready"), n.preloadNearbyImages() },
                updateSelfHostedAudio: function(t, e, i) {
                    var a = this;
                    a.wrap.addClass("cbp-popup-lightbox-isIframe");
                    var n = '<div class="cbp-popup-lightbox-iframe"><div class="cbp-misc-video"><audio controls="controls" height="auto" style="width: 75%"><source src="' + t + '" type="audio/mpeg">Your browser does not support the audio tag.</audio></div><div class="cbp-popup-lightbox-bottom">' + (e ? '<div class="cbp-popup-lightbox-title">' + e + "</div>" : "") + i + "</div></div>";
                    a.content.html(n), a.wrap.addClass("cbp-popup-ready"), a.preloadNearbyImages() },
                updateVideoMarkup: function(t, e, i) {
                    var a = this;
                    a.wrap.addClass("cbp-popup-lightbox-isIframe");
                    var n = '<div class="cbp-popup-lightbox-iframe"><iframe src="' + t + '" frameborder="0" allowfullscreen scrolling="no"></iframe><div class="cbp-popup-lightbox-bottom">' + (e ? '<div class="cbp-popup-lightbox-title">' + e + "</div>" : "") + i + "</div></div>";
                    a.content.html(n), a.wrap.addClass("cbp-popup-ready"), a.preloadNearbyImages() },
                updateImagesMarkup: function(t, e, i) {
                    var a = this;
                    a.wrap.removeClass("cbp-popup-lightbox-isIframe");
                    var n = '<div class="cbp-popup-lightbox-figure"><img src="' + t + '" class="cbp-popup-lightbox-img" ' + a.dataActionImg + ' /><div class="cbp-popup-lightbox-bottom">' + (e ? '<div class="cbp-popup-lightbox-title">' + e + "</div>" : "") + i + "</div></div>";
                    a.content.html(n), a.wrap.addClass("cbp-popup-ready"), a.resizeImage(), a.preloadNearbyImages() },
                next: function() {
                    var t = this;
                    t[t.type + "JumpTo"](1) },
                prev: function() {
                    var t = this;
                    t[t.type + "JumpTo"](-1) },
                lightboxJumpTo: function(t) {
                    var e, i = this;
                    i.current = i.getIndex(i.current + t), e = i.dataArray[i.current], i[e.type](e) },
                singlePageJumpTo: function(e) {
                    var i = this;
                    i.current = i.getIndex(i.current + e), t.isFunction(i.options.singlePageCallback) && (i.resetWrap(), i.wrap.scrollTop(0), i.wrap.addClass("cbp-popup-loading"), i.options.singlePageCallback.call(i, i.dataArray[i.current].url, i.dataArray[i.current].element), i.options.singlePageDeeplinking && (location.href = i.url + "#cbp=" + i.dataArray[i.current].url)) },
                resetWrap: function() {
                    var t = this; "singlePage" === t.type && t.options.singlePageDeeplinking && (location.href = t.url + "#"), "singlePageInline" === t.type && t.options.singlePageInlineDeeplinking && (location.href = t.url + "#") },
                getIndex: function(t) {
                    var e = this;
                    return t %= e.counterTotal, 0 > t && (t = e.counterTotal + t), t },
                close: function(i, a) {
                    function n() { r.content.html(""), r.wrap.detach(), r.cubeportfolio.$obj.removeClass("cbp-popup-singlePageInline-open cbp-popup-singlePageInline-close"), "promise" === i && t.isFunction(a.callback) && a.callback.call(r.cubeportfolio), r.resetWrap() }

                    function s() { r.options.singlePageInlineInFocus && "promise" !== i ? t("html,body").animate({ scrollTop: r.scrollTop }, 350).promise().then(function() { n() }) : n() }
                    var r = this;
                    r.isOpen = !1, "singlePageInline" === r.type ? "open" === i ? (r.wrap.removeClass("cbp-popup-singlePageInline-ready"), t(r.dataArray[r.current].element).closest(".cbp-item").removeClass("cbp-singlePageInline-active"), r.openSinglePageInline(a.blocks, a.currentBlock, a.fromOpen)) : (r.height = 0, r.revertResizeSinglePageInline(), r.wrap.removeClass("cbp-popup-singlePageInline-ready"), r.cubeportfolio.$obj.addClass("cbp-popup-singlePageInline-close"), r.cubeportfolio.$obj.find(".cbp-item").removeClass("cbp-singlePageInline-active"), o["private"].modernBrowser ? r.wrap.one(o["private"].transitionend, function() { s() }) : s()) : "singlePage" === r.type ? (r.resetWrap(), r.wrap.removeClass("cbp-popup-ready cbp-popup-transitionend"), ("android" === o["private"].browser || "ios" === o["private"].browser) && (t("html").css({ position: "" }), r.navigationWrap.appendTo(r.wrap), r.navigationMobile.remove()), t(e).scrollTop(r.scrollTop), setTimeout(function() { r.stopScroll = !0, r.navigationWrap.css({ top: r.wrap.scrollTop() }), r.wrap.removeClass("cbp-popup-singlePage-open cbp-popup-singlePage-sticky"), ("ie8" === o["private"].browser || "ie9" === o["private"].browser) && (r.content.html(""), r.wrap.detach(), t("html").css({ overflow: "", marginRight: "", position: "" }), r.navigationWrap.removeAttr("style")) }, 0), t("html").css({ overflow: "", marginRight: "", position: "" }), r.wrap.one(o["private"].transitionend, function() { r.content.html(""), r.wrap.detach(), r.navigationWrap.removeAttr("style") })) : (r.originalStyle ? t("html").attr("style", r.originalStyle) : t("html").css({ overflow: "", marginRight: "" }), t(e).scrollTop(r.scrollTop), r.content.html(""), r.wrap.detach()) },
                tooggleLoading: function(t) {
                    var e = this;
                    e.stopEvents = t, e.wrap[t ? "addClass" : "removeClass"]("cbp-popup-loading") },
                resizeImage: function() {
                    if (this.isOpen) {
                        var i = t(e).height(),
                            a = this.content.find("img"),
                            n = parseInt(a.css("margin-top"), 10) + parseInt(a.css("margin-bottom"), 10);
                        a.css("max-height", i - n + "px") } },
                preloadNearbyImages: function() {
                    var t = [],
                        e = this;
                    t.push(e.getIndex(e.current + 1)), t.push(e.getIndex(e.current + 2)), t.push(e.getIndex(e.current + 3)), t.push(e.getIndex(e.current - 1)), t.push(e.getIndex(e.current - 2)), t.push(e.getIndex(e.current - 3));
                    for (var i = t.length - 1; i >= 0; i--) "isImage" === e.dataArray[t[i]].type && e.cubeportfolio.checkSrc(e.dataArray[t[i]].src) }
            },
            r = !1,
            l = !1;
        n.prototype.run = function() {
            var e = this,
                a = e.parent,
                n = t(i.body);
            a.lightbox = null, a.options.lightboxDelegate && !r && (r = !0, a.lightbox = Object.create(s), a.lightbox.init(a, "lightbox"), n.on("click.cbp", a.options.lightboxDelegate, function(i) { i.preventDefault();
                var n = t(this),
                    o = n.attr("data-cbp-lightbox"),
                    s = e.detectScope(n),
                    r = s.data("cubeportfolio"),
                    l = [];
                r ? r.blocksOn.each(function(e, i) {
                    var n = t(i);
                    n.not(".cbp-item-off") && n.find(a.options.lightboxDelegate).each(function(e, i) { o ? t(i).attr("data-cbp-lightbox") === o && l.push(i) : l.push(i) }) }) : l = o ? s.find(a.options.lightboxDelegate + "[data-cbp-lightbox=" + o + "]") : s.find(a.options.lightboxDelegate), a.lightbox.openLightbox(l, n[0]) })), a.singlePage = null, a.options.singlePageDelegate && !l && (l = !0, a.singlePage = Object.create(s), a.singlePage.init(a, "singlePage"), n.on("click.cbp", a.options.singlePageDelegate, function(i) { i.preventDefault();
                var n = t(this),
                    o = n.attr("data-cbp-singlePage"),
                    s = e.detectScope(n),
                    r = s.data("cubeportfolio"),
                    l = [];
                r ? r.blocksOn.each(function(e, i) {
                    var n = t(i);
                    n.not(".cbp-item-off") && n.find(a.options.singlePageDelegate).each(function(e, i) { o ? t(i).attr("data-cbp-singlePage") === o && l.push(i) : l.push(i) }) }) : l = o ? s.find(a.options.singlePageDelegate + "[data-cbp-singlePage=" + o + "]") : s.find(a.options.singlePageDelegate), a.singlePage.openSinglePage(l, n[0]) })), a.singlePageInline = null, a.options.singlePageInlineDelegate && (a.singlePageInline = Object.create(s), a.singlePageInline.init(a, "singlePageInline"), a.$obj.on("click.cbp", a.options.singlePageInlineDelegate, function(e) { e.preventDefault();
                var i = t.data(this, "cbp-locked"),
                    n = t.data(this, "cbp-locked", +new Date);
                (!i || n - i > 300) && a.singlePageInline.openSinglePageInline(a.blocksOn, this) })) }, n.prototype.detectScope = function(e) {
            var a, n, o;
            return a = e.closest(".cbp-popup-singlePageInline"), a.length ? (o = e.closest(".cbp", a[0]), o.length ? o : a) : (n = e.closest(".cbp-popup-singlePage"), n.length ? (o = e.closest(".cbp", n[0]), o.length ? o : n) : (o = e.closest(".cbp"), o.length ? o : t(i.body))) }, n.prototype.destroy = function() {
            var e = this.parent;
            t(i.body).off("click.cbp"), r = !1, l = !1, e.lightbox && e.lightbox.destroy(), e.singlePage && e.singlePage.destroy(), e.singlePageInline && e.singlePageInline.destroy() }, o.plugins.popUp = function(t) {
            return new n(t) }
    }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(e) {
            var i = this;
            i.parent = e, i.searchInput = t(e.options.search), i.searchInput.each(function(e, i) {
                var a = i.getAttribute("data-search");
                a || (a = "*"), t.data(i, "searchData", { value: i.value, el: a }) });
            var a = null;
            i.searchInput.on("keyup.cbp paste.cbp", function(e) { e.preventDefault();
                var n = t(this);
                clearTimeout(a), a = setTimeout(function() { i.runEvent.call(i, n) }, 350) }), i.searchNothing = i.searchInput.siblings(".cbp-search-nothing").detach(), i.searchNothingHeight = null, i.searchNothingHTML = i.searchNothing.html(), i.searchInput.siblings(".cbp-search-icon").on("click.cbp", function(e) { e.preventDefault(), i.runEvent.call(i, t(this).prev().val("")) }) }
        var o = t.fn.cubeportfolio.constructor;
        n.prototype.runEvent = function(e) {
            var i = this,
                a = e.val(),
                n = e.data("searchData"),
                o = new RegExp(a, "i");
            n.value === a || i.parent.isAnimating || (n.value = a, a.length > 0 ? e.attr("value", a) : e.removeAttr("value"), i.parent.$obj.cubeportfolio("filter", function(e) {
                var s = e.filter(function(e, i) {
                    var a = t(i).find(n.el).text();
                    return a.search(o) > -1 ? !0 : void 0 });
                if (0 === s.length && i.searchNothing.length) {
                    var r = i.searchNothingHTML.replace("{{query}}", a);
                    i.searchNothing.html(r), i.searchNothing.appendTo(i.parent.$obj), null === i.searchNothingHeight && (i.searchNothingHeight = i.searchNothing.outerHeight(!0)), i.parent.registerEvent("resizeMainContainer", function() { i.parent.height = i.parent.height + i.searchNothingHeight, i.parent.obj.style.height = i.parent.height + "px" }, !0) } else i.searchNothing.detach();
                return i.parent.triggerEvent("resetFiltersVisual"), s }, function() { e.trigger("keyup.cbp") })) }, n.prototype.destroy = function() {
            var e = this;
            e.searchInput.off(".cbp"), e.searchInput.next(".cbp-search-icon").off(".cbp"), e.searchInput.each(function(e, i) { t.removeData(i) }) }, o.plugins.search = function(t) {
            return "" === t.options.search ? null : new n(t) } }(jQuery, window, document),
    function(t, e, i, a) { "use strict";

        function n(e) {
            var i = this;
            i.parent = e, i.options = t.extend({}, o, i.parent.options.plugins.slider);
            var a = t(i.options.pagination);
            a.length > 0 && (i.parent.customPagination = a, i.parent.customPaginationItems = a.children(), i.parent.customPaginationClass = i.options.paginationClass, i.parent.customPaginationItems.on("click.cbp", function(e) { e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), i.parent.sliderStopEvents || i.parent.jumpToSlider(t(this)) })), i.parent.registerEvent("gridAdjust", function() { i.sliderMarkup.call(i.parent), i.parent.registerEvent("gridAdjust", function() { i.updateSlider.call(i.parent) }) }, !0) }
        var o = { pagination: "", paginationClass: "cbp-pagination-active" },
            s = t.fn.cubeportfolio.constructor;
        n.prototype.sliderMarkup = function() {
            var e = this;
            e.sliderStopEvents = !1, e.sliderActive = 0, e.$obj.one("initComplete.cbp", function() { e.$obj.addClass("cbp-mode-slider") }), e.nav = t("<div/>", { "class": "cbp-nav" }), e.nav.on("click.cbp", "[data-slider-action]", function(i) {
                if (i.preventDefault(), i.stopImmediatePropagation(), i.stopPropagation(), !e.sliderStopEvents) {
                    var a = t(this),
                        n = a.attr("data-slider-action");
                    e[n + "Slider"] && e[n + "Slider"](a) } }), e.options.showNavigation && (e.controls = t("<div/>", { "class": "cbp-nav-controls" }), e.navPrev = t("<div/>", { "class": "cbp-nav-prev", "data-slider-action": "prev" }).appendTo(e.controls), e.navNext = t("<div/>", { "class": "cbp-nav-next", "data-slider-action": "next" }).appendTo(e.controls), e.controls.appendTo(e.nav)), e.options.showPagination && (e.navPagination = t("<div/>", { "class": "cbp-nav-pagination" }).appendTo(e.nav)), (e.controls || e.navPagination) && e.nav.appendTo(e.$obj), e.updateSliderPagination(), e.options.auto && (e.options.autoPauseOnHover && (e.mouseIsEntered = !1, e.$obj.on("mouseenter.cbp", function(t) { e.mouseIsEntered = !0, e.stopSliderAuto() }).on("mouseleave.cbp", function(t) { e.mouseIsEntered = !1, e.startSliderAuto() })), e.startSliderAuto()), e.options.drag && s["private"].modernBrowser && e.dragSlider() }, n.prototype.updateSlider = function() {
            var t = this;
            t.updateSliderPosition(), t.updateSliderPagination() }, n.prototype.destroy = function() {
            var t = this;
            t.parent.customPaginationItems && t.parent.customPaginationItems.off(".cbp"), (t.parent.controls || t.parent.navPagination) && (t.parent.nav.off(".cbp"), t.parent.nav.remove()) }, s.plugins.slider = function(t) {
            return "slider" !== t.options.layoutMode ? null : new n(t) } }(jQuery, window, document), ! function(t, e) { "object" == typeof exports ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], e) : e(t.jQuery) }(this, function(t) {
        var e = function(t, e) {
                var i, a = document.createElement("canvas");
                t.appendChild(a), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(a);
                var n = a.getContext("2d");
                a.width = a.height = e.size;
                var o = 1;
                window.devicePixelRatio > 1 && (o = window.devicePixelRatio, a.style.width = a.style.height = [e.size, "px"].join(""), a.width = a.height = e.size * o, n.scale(o, o)), n.translate(e.size / 2, e.size / 2), n.rotate((-.5 + e.rotate / 180) * Math.PI);
                var s = (e.size - e.lineWidth) / 2;
                e.scaleColor && e.scaleLength && (s -= e.scaleLength + 2), Date.now = Date.now || function() {
                    return +new Date };
                var r = function(t, e, i) { i = Math.min(Math.max(-1, i || 0), 1);
                        var a = 0 >= i;
                        n.beginPath(), n.arc(0, 0, s, 0, 2 * Math.PI * i, a), n.strokeStyle = t, n.lineWidth = e, n.stroke() },
                    l = function() {
                        var t, i;
                        n.lineWidth = 1, n.fillStyle = e.scaleColor, n.save();
                        for (var a = 24; a > 0; --a) a % 6 === 0 ? (i = e.scaleLength, t = 0) : (i = .6 * e.scaleLength, t = e.scaleLength - i), n.fillRect(-e.size / 2 + t, 0, i, 1), n.rotate(Math.PI / 12);
                        n.restore() },
                    d = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) { window.setTimeout(t, 1e3 / 60) } }(),
                    c = function() { e.scaleColor && l(), e.trackColor && r(e.trackColor, e.trackWidth || e.lineWidth, 1) };
                this.getCanvas = function() {
                    return a }, this.getCtx = function() {
                    return n }, this.clear = function() { n.clearRect(e.size / -2, e.size / -2, e.size, e.size) }, this.draw = function(t) { e.scaleColor || e.trackColor ? n.getImageData && n.putImageData ? i ? n.putImageData(i, 0, 0) : (c(), i = n.getImageData(0, 0, e.size * o, e.size * o)) : (this.clear(), c()) : this.clear(), n.lineCap = e.lineCap;
                    var a;
                    a = "function" == typeof e.barColor ? e.barColor(t) : e.barColor, r(a, e.lineWidth, t / 100) }.bind(this), this.animate = function(t, i) {
                    var a = Date.now();
                    e.onStart(t, i);
                    var n = function() {
                        var o = Math.min(Date.now() - a, e.animate.duration),
                            s = e.easing(this, o, t, i - t, e.animate.duration);
                        this.draw(s), e.onStep(t, i, s), o >= e.animate.duration ? e.onStop(t, i) : d(n) }.bind(this);
                    d(n) }.bind(this) },
            i = function(t, i) {
                var a = { barColor: "#ef1e25", trackColor: "#f9f9f9", scaleColor: "#dfe0e0", scaleLength: 5, lineCap: "round", lineWidth: 3, trackWidth: void 0, size: 110, rotate: 0, animate: { duration: 1e3, enabled: !0 }, easing: function(t, e, i, a, n) {
                        return e /= n / 2, 1 > e ? a / 2 * e * e + i : -a / 2 * (--e * (e - 2) - 1) + i }, onStart: function() {}, onStep: function() {}, onStop: function() {} };
                if ("undefined" != typeof e) a.renderer = e;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    a.renderer = SVGRenderer }
                var n = {},
                    o = 0,
                    s = function() { this.el = t, this.options = n;
                        for (var e in a) a.hasOwnProperty(e) && (n[e] = i && "undefined" != typeof i[e] ? i[e] : a[e], "function" == typeof n[e] && (n[e] = n[e].bind(this)));
                        n.easing = "string" == typeof n.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[n.easing]) ? jQuery.easing[n.easing] : a.easing, "number" == typeof n.animate && (n.animate = { duration: n.animate, enabled: !0 }), "boolean" != typeof n.animate || n.animate || (n.animate = { duration: 1e3, enabled: n.animate }), this.renderer = new n.renderer(t, n), this.renderer.draw(o), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent"))) }.bind(this);
                this.update = function(t) {
                    return t = parseFloat(t), n.animate.enabled ? this.renderer.animate(o, t) : this.renderer.draw(t), o = t, this }.bind(this), this.disableAnimation = function() {
                    return n.animate.enabled = !1, this }, this.enableAnimation = function() {
                    return n.animate.enabled = !0, this }, s() };
        t.fn.easyPieChart = function(e) {
            return this.each(function() {
                var a;
                t.data(this, "easyPieChart") || (a = t.extend({}, e, t(this).data()), t.data(this, "easyPieChart", new i(this, a))) }) } }), ! function(t, e) { "function" == typeof define && define.amd ? define([], e(t)) : "object" == typeof exports ? module.exports = e(t) : t.smoothScroll = e(t) }("undefined" != typeof global ? global : this.window || this.global, function(t) { "use strict";
        var e, i, a, n, o, s = {},
            r = "querySelector" in document && "addEventListener" in t,
            l = { selector: "[data-scroll]", selectorHeader: "[data-scroll-header]", speed: 500, easing: "easeInOutCubic", offset: 0, updateURL: !0, callback: function() {} },
            d = function() {
                var t = {},
                    e = !1,
                    i = 0,
                    a = arguments.length; "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (e = arguments[0], i++);
                for (var n = function(i) {
                        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (e && "[object Object]" === Object.prototype.toString.call(i[a]) ? t[a] = d(!0, t[a], i[a]) : t[a] = i[a]) }; a > i; i++) {
                    var o = arguments[i];
                    n(o) }
                return t },
            c = function(t) {
                return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight) },
            p = function(t, e) {
                var i, a, n = e.charAt(0),
                    o = "classList" in document.documentElement;
                for ("[" === n && (e = e.substr(1, e.length - 2), i = e.split("="), i.length > 1 && (a = !0, i[1] = i[1].replace(/"/g, "").replace(/'/g, ""))); t && t !== document; t = t.parentNode) {
                    if ("." === n)
                        if (o) {
                            if (t.classList.contains(e.substr(1))) return t } else if (new RegExp("(^|\\s)" + e.substr(1) + "(\\s|$)").test(t.className)) return t;
                    if ("#" === n && t.id === e.substr(1)) return t;
                    if ("[" === n && t.hasAttribute(i[0])) {
                        if (!a) return t;
                        if (t.getAttribute(i[0]) === i[1]) return t }
                    if (t.tagName.toLowerCase() === e) return t }
                return null };
        s.escapeCharacters = function(t) { "#" === t.charAt(0) && (t = t.substr(1));
            for (var e, i = String(t), a = i.length, n = -1, o = "", s = i.charCodeAt(0); ++n < a;) {
                if (e = i.charCodeAt(n), 0 === e) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                o += e >= 1 && 31 >= e || 127 == e || 0 === n && e >= 48 && 57 >= e || 1 === n && e >= 48 && 57 >= e && 45 === s ? "\\" + e.toString(16) + " " : e >= 128 || 45 === e || 95 === e || e >= 48 && 57 >= e || e >= 65 && 90 >= e || e >= 97 && 122 >= e ? i.charAt(n) : "\\" + i.charAt(n) }
            return "#" + o };
        var h = function(t, e) {
                var i;
                return "easeInQuad" === t && (i = e * e), "easeOutQuad" === t && (i = e * (2 - e)), "easeInOutQuad" === t && (i = .5 > e ? 2 * e * e : -1 + (4 - 2 * e) * e), "easeInCubic" === t && (i = e * e * e), "easeOutCubic" === t && (i = --e * e * e + 1), "easeInOutCubic" === t && (i = .5 > e ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1), "easeInQuart" === t && (i = e * e * e * e), "easeOutQuart" === t && (i = 1 - --e * e * e * e), "easeInOutQuart" === t && (i = .5 > e ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e), "easeInQuint" === t && (i = e * e * e * e * e), "easeOutQuint" === t && (i = 1 + --e * e * e * e * e), "easeInOutQuint" === t && (i = .5 > e ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e), i || e },
            u = function(t, e, i) {
                var a = 0;
                if (t.offsetParent)
                    do a += t.offsetTop, t = t.offsetParent; while (t);
                return a = a - e - i, a >= 0 ? a : 0 },
            f = function() {
                return Math.max(t.document.body.scrollHeight, t.document.documentElement.scrollHeight, t.document.body.offsetHeight, t.document.documentElement.offsetHeight, t.document.body.clientHeight, t.document.documentElement.clientHeight) },
            g = function(t) {
                return t && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(t) : {} },
            m = function(e, i) { t.history.pushState && (i || "true" === i) && "file:" !== t.location.protocol && t.history.pushState(null, null, [t.location.protocol, "//", t.location.host, t.location.pathname, t.location.search, e].join("")) },
            v = function(t) {
                return null === t ? 0 : c(t) + t.offsetTop };
        s.animateScroll = function(i, s, r) {
            var c = g(s ? s.getAttribute("data-options") : null),
                p = d(e || l, r || {}, c),
                w = "[object Number]" === Object.prototype.toString.call(i),
                y = w ? null : "#" === i ? t.document.documentElement : t.document.querySelector(i);
            if (w || y) {
                var b = t.pageYOffset;
                a || (a = t.document.querySelector(p.selectorHeader)), n || (n = v(a));
                var x, _, T = w ? i : u(y, n, parseInt(p.offset, 10)),
                    C = T - b,
                    S = f(),
                    k = 0;
                w || m(i, p.updateURL);
                var P = function(e, a, n) {
                        var o = t.pageYOffset;
                        (e == a || o == a || t.innerHeight + o >= S) && (clearInterval(n), w || y.focus(), p.callback(i, s)) },
                    I = function() { k += 16, x = k / parseInt(p.speed, 10), x = x > 1 ? 1 : x, _ = b + C * h(p.easing, x), t.scrollTo(0, Math.floor(_)), P(_, T, o) },
                    A = function() { clearInterval(o), o = setInterval(I, 16) };
                0 === t.pageYOffset && t.scrollTo(0, 0), A() } };
        var w = function(t) {
                if (0 === t.button && !t.metaKey && !t.ctrlKey) {
                    var i = p(t.target, e.selector);
                    if (i && "a" === i.tagName.toLowerCase()) { t.preventDefault();
                        var a = s.escapeCharacters(i.hash);
                        s.animateScroll(a, i, e) } } },
            y = function(t) { i || (i = setTimeout(function() { i = null, n = v(a) }, 66)) };
        return s.destroy = function() { e && (t.document.removeEventListener("click", w, !1), t.removeEventListener("resize", y, !1), e = null, i = null, a = null, n = null, o = null) }, s.init = function(i) { r && (s.destroy(), e = d(l, i || {}), a = t.document.querySelector(e.selectorHeader), n = v(a), t.document.addEventListener("click", w, !1), a && t.addEventListener("resize", y, !1)) }, s }), ! function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function(t) {
        var e, i, a, n, o, s, r = "Close",
            l = "BeforeClose",
            d = "AfterClose",
            c = "BeforeAppend",
            p = "MarkupParse",
            h = "Open",
            u = "Change",
            f = "mfp",
            g = "." + f,
            m = "mfp-ready",
            v = "mfp-removing",
            w = "mfp-prevent-close",
            y = function() {},
            b = !!window.jQuery,
            x = t(window),
            _ = function(t, i) { e.ev.on(f + t + g, i) },
            T = function(e, i, a, n) {
                var o = document.createElement("div");
                return o.className = "mfp-" + e, a && (o.innerHTML = a), n ? i && i.appendChild(o) : (o = t(o), i && o.appendTo(i)), o },
            C = function(i, a) {
                e.ev.triggerHandler(f + i, a), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(a) ? a : [a]))
            },
            S = function(i) {
                return i === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = i), e.currTemplate.closeBtn },
            k = function() { t.magnificPopup.instance || (e = new y, e.init(), t.magnificPopup.instance = e) },
            P = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1 };
        y.prototype = { constructor: y, init: function() {
                var i = navigator.appVersion;
                e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = P(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), a = t(document), e.popupsCache = {} }, open: function(i) {
                var n;
                if (i.isObj === !1) { e.items = i.items.toArray(), e.index = 0;
                    var s, r = i.items;
                    for (n = 0; n < r.length; n++)
                        if (s = r[n], s.parsed && (s = s.el[0]), s === i.el[0]) { e.index = n;
                            break } } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], o = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = a, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = T("bg").on("click" + g, function() { e.close() }), e.wrap = T("wrap").attr("tabindex", -1).on("click" + g, function(t) { e._checkIfClose(t.target) && e.close() }), e.container = T("container", e.wrap)), e.contentContainer = T("content"), e.st.preloader && (e.preloader = T("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (n = 0; n < l.length; n++) {
                    var d = l[n];
                    d = d.charAt(0).toUpperCase() + d.slice(1), e["init" + d].call(e) }
                C("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (_(p, function(t, e, i, a) { i.close_replaceWith = S(a.type) }), o += " mfp-close-btn-in") : e.wrap.append(S())), e.st.alignTop && (o += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({ overflow: e.st.overflowY, overflowX: "hidden", overflowY: e.st.overflowY }) : e.wrap.css({ top: x.scrollTop(), position: "absolute" }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({ height: a.height(), position: "absolute" }), e.st.enableEscapeKey && a.on("keyup" + g, function(t) { 27 === t.keyCode && e.close() }), x.on("resize" + g, function() { e.updateSize() }), e.st.closeOnContentClick || (o += " mfp-auto-cursor"), o && e.wrap.addClass(o);
                var c = e.wH = x.height(),
                    u = {};
                if (e.fixedContentPos && e._hasScrollBar(c)) {
                    var f = e._getScrollbarSize();
                    f && (u.marginRight = f) }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : u.overflow = "hidden");
                var v = e.st.mainClass;
                return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), C("BuildControls"), t("html").css(u), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() { e.content ? (e._addClassToMFP(m), e._setFocus()) : e.bgOverlay.addClass(m), a.on("focusin" + g, e._onFocusIn) }, 16), e.isOpen = !0, e.updateSize(c), C(h), i }, close: function() { e.isOpen && (C(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout(function() { e._close() }, e.st.removalDelay)) : e._close()) }, _close: function() { C(r);
                var i = v + " " + m + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var n = { marginRight: "" };
                    e.isIE7 ? t("body, html").css("overflow", "") : n.overflow = "", t("html").css(n) }
                a.off("keyup" + g + " focusin" + g), e.ev.off(g), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, C(d) }, updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        a = window.innerHeight * i;
                    e.wrap.css("height", a), e.wH = a } else e.wH = t || x.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), C("Resize") }, updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var a = i.type;
                if (C("BeforeChange", [e.currItem ? e.currItem.type : "", a]), e.currItem = i, !e.currTemplate[a]) {
                    var o = e.st[a] ? e.st[a].markup : !1;
                    C("FirstMarkupParse", o), o ? e.currTemplate[a] = t(o) : e.currTemplate[a] = !0 }
                n && n !== i.type && e.container.removeClass("mfp-" + n + "-holder");
                var s = e["get" + a.charAt(0).toUpperCase() + a.slice(1)](i, e.currTemplate[a]);
                e.appendContent(s, a), i.preloaded = !0, C(u, i), n = i.type, e.container.prepend(e.contentContainer), C("AfterChange") }, appendContent: function(t, i) { e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(S()) : e.content = t : e.content = "", C(c), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content) }, parseEl: function(i) {
                var a, n = e.items[i];
                if (n.tagName ? n = { el: t(n) } : (a = n.type, n = { data: n, src: n.src }), n.el) {
                    for (var o = e.types, s = 0; s < o.length; s++)
                        if (n.el.hasClass("mfp-" + o[s])) { a = o[s];
                            break }
                    n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href")) }
                return n.type = a || e.st.type || "inline", n.index = i, n.parsed = !0, e.items[i] = n, C("ElementParse", n), e.items[i] }, addGroup: function(t, i) {
                var a = function(a) { a.mfpEl = this, e._openClick(a, t, i) };
                i || (i = {});
                var n = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(n).on(n, a)) : (i.isObj = !1, i.delegate ? t.off(n).on(n, i.delegate, a) : (i.items = t, t.off(n).on(n, a))) }, _openClick: function(i, a, n) {
                var o = void 0 !== n.midClick ? n.midClick : t.magnificPopup.defaults.midClick;
                if (o || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var s = void 0 !== n.disableOn ? n.disableOn : t.magnificPopup.defaults.disableOn;
                    if (s)
                        if (t.isFunction(s)) {
                            if (!s.call(e)) return !0 } else if (x.width() < s) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), n.el = t(i.mfpEl), n.delegate && (n.items = a.find(n.delegate)), e.open(n) } }, updateStatus: function(t, a) {
                if (e.preloader) { i !== t && e.container.removeClass("mfp-s-" + i), a || "loading" !== t || (a = e.st.tLoading);
                    var n = { status: t, text: a };
                    C("UpdateStatus", n), t = n.status, a = n.text, e.preloader.html(a), e.preloader.find("a").on("click", function(t) { t.stopImmediatePropagation() }), e.container.addClass("mfp-s-" + t), i = t } }, _checkIfClose: function(i) {
                if (!t(i).hasClass(w)) {
                    var a = e.st.closeOnContentClick,
                        n = e.st.closeOnBgClick;
                    if (a && n) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (a) return !0 } else if (n && t.contains(document, i)) return !0;
                    return !1 } }, _addClassToMFP: function(t) { e.bgOverlay.addClass(t), e.wrap.addClass(t) }, _removeClassFromMFP: function(t) { this.bgOverlay.removeClass(t), e.wrap.removeClass(t) }, _hasScrollBar: function(t) {
                return (e.isIE7 ? a.height() : document.body.scrollHeight) > (t || x.height()) }, _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus() }, _onFocusIn: function(i) {
                return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1) }, _parseMarkup: function(e, i, a) {
                var n;
                a.data && (i = t.extend(a.data, i)), C(p, [e, i, a]), t.each(i, function(i, a) {
                    if (void 0 === a || a === !1) return !0;
                    if (n = i.split("_"), n.length > 1) {
                        var o = e.find(g + "-" + n[0]);
                        if (o.length > 0) {
                            var s = n[1]; "replaceWith" === s ? o[0] !== a[0] && o.replaceWith(a) : "img" === s ? o.is("img") ? o.attr("src", a) : o.replaceWith(t("<img>").attr("src", a).attr("class", o.attr("class"))) : o.attr(n[1], a) } } else e.find(g + "-" + i).html(a) }) }, _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t) }
                return e.scrollbarSize } }, t.magnificPopup = { instance: null, proto: y.prototype, modules: [], open: function(e, i) {
                return k(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e) }, close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close() }, registerModule: function(e, i) { i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, t.fn.magnificPopup = function(i) { k();
            var a = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var n, o = b ? a.data("magnificPopup") : a[0].magnificPopup,
                        s = parseInt(arguments[1], 10) || 0;
                    o.items ? n = o.items[s] : (n = a, o.delegate && (n = n.find(o.delegate)), n = n.eq(s)), e._openClick({ mfpEl: n }, a, o) } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), b ? a.data("magnificPopup", i) : a[0].magnificPopup = i, e.addGroup(a, i);
            return a };
        var I, A, L, O = "inline",
            M = function() { L && (A.after(L.addClass(I)).detach(), L = null) };
        t.magnificPopup.registerModule(O, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() { e.types.push(O), _(r + "." + O, function() { M() }) }, getInline: function(i, a) {
                    if (M(), i.src) {
                        var n = e.st.inline,
                            o = t(i.src);
                        if (o.length) {
                            var s = o[0].parentNode;
                            s && s.tagName && (A || (I = n.hiddenClass, A = T(I), I = "mfp-" + I), L = o.after(A).detach().removeClass(I)), e.updateStatus("ready") } else e.updateStatus("error", n.tNotFound), o = t("<div>");
                        return i.inlineElement = o, o }
                    return e.updateStatus("ready"), e._parseMarkup(a, {}, i), a } } });
        var z, E = "ajax",
            D = function() { z && t(document.body).removeClass(z) },
            j = function() { D(), e.req && e.req.abort() };
        t.magnificPopup.registerModule(E, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() { e.types.push(E), z = e.st.ajax.cursor, _(r + "." + E, j), _("BeforeChange." + E, j) }, getAjax: function(i) { z && t(document.body).addClass(z), e.updateStatus("loading");
                    var a = t.extend({ url: i.src, success: function(a, n, o) {
                            var s = { data: a, xhr: o };
                            C("ParseAjax", s), e.appendContent(t(s.data), E), i.finished = !0, D(), e._setFocus(), setTimeout(function() { e.wrap.addClass(m) }, 16), e.updateStatus("ready"), C("AjaxContentAdded") }, error: function() { D(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src)) } }, e.st.ajax.settings);
                    return e.req = t.ajax(a), "" } } });
        var R, F = function(i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var a = e.st.image.titleSrc;
            if (a) {
                if (t.isFunction(a)) return a.call(e, i);
                if (i.el) return i.el.attr(a) || "" }
            return "" };
        t.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() {
                    var i = e.st.image,
                        a = ".image";
                    e.types.push("image"), _(h + a, function() { "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor) }), _(r + a, function() { i.cursor && t(document.body).removeClass(i.cursor), x.off("resize" + g) }), _("Resize" + a, e.resizeImage), e.isLowIE && _("AfterChange", e.resizeImage) }, resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i) } }, _onImageHasSize: function(t) { t.img && (t.hasSize = !0, R && clearInterval(R), t.isCheckingImgSize = !1, C("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1)) }, findImageSize: function(t) {
                    var i = 0,
                        a = t.img[0],
                        n = function(o) { R && clearInterval(R), R = setInterval(function() {
                                return a.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(R), i++, void(3 === i ? n(10) : 40 === i ? n(50) : 100 === i && n(500))) }, o) };
                    n(1) }, getImage: function(i, a) {
                    var n = 0,
                        o = function() { i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : (n++, 200 > n ? setTimeout(o, 100) : s())) },
                        s = function() { i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", r.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0) },
                        r = e.st.image,
                        l = a.find(".mfp-img");
                    if (l.length) {
                        var d = document.createElement("img");
                        d.className = "mfp-img", i.el && i.el.find("img").length && (d.alt = i.el.find("img").attr("alt")), i.img = t(d).on("load.mfploader", o).on("error.mfploader", s), d.src = i.src, l.is("img") && (i.img = i.img.clone()), d = i.img[0], d.naturalWidth > 0 ? i.hasSize = !0 : d.width || (i.hasSize = !1) }
                    return e._parseMarkup(a, { title: F(i), img_replaceWith: i.img }, i), e.resizeImage(), i.hasSize ? (R && clearInterval(R), i.loadError ? (a.addClass("mfp-loading"), e.updateStatus("error", r.tError.replace("%url%", i.src))) : (a.removeClass("mfp-loading"), e.updateStatus("ready")), a) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, a.addClass("mfp-loading"), e.findImageSize(i)), a) } } });
        var $, W = function() {
            return void 0 === $ && ($ = void 0 !== document.createElement("p").style.MozTransform), $ };
        t.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function(t) {
                    return t.is("img") ? t : t.find("img") } }, proto: { initZoom: function() {
                    var t, i = e.st.zoom,
                        a = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var n, o, s = i.duration,
                            d = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    a = "all " + i.duration / 1e3 + "s " + i.easing,
                                    n = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                    o = "transition";
                                return n["-webkit-" + o] = n["-moz-" + o] = n["-o-" + o] = n[o] = a, e.css(n), e },
                            c = function() { e.content.css("visibility", "visible") };
                        _("BuildControls" + a, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(n), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void c();
                                o = d(t), o.css(e._getOffset()), e.wrap.append(o), n = setTimeout(function() { o.css(e._getOffset(!0)), n = setTimeout(function() { c(), setTimeout(function() { o.remove(), t = o = null, C("ZoomAnimationEnded") }, 16) }, s) }, 16) } }), _(l + a, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(n), e.st.removalDelay = s, !t) {
                                    if (t = e._getItemToZoom(), !t) return;
                                    o = d(t) }
                                o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), setTimeout(function() { o.css(e._getOffset()) }, 16) } }), _(r + a, function() { e._allowZoom() && (c(), o && o.remove(), t = null) }) } }, _allowZoom: function() {
                    return "image" === e.currItem.type }, _getItemToZoom: function() {
                    return e.currItem.hasSize ? e.currItem.img : !1 }, _getOffset: function(i) {
                    var a;
                    a = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var n = a.offset(),
                        o = parseInt(a.css("padding-top"), 10),
                        s = parseInt(a.css("padding-bottom"), 10);
                    n.top -= t(window).scrollTop() - o;
                    var r = { width: a.width(), height: (b ? a.innerHeight() : a[0].offsetHeight) - s - o };
                    return W() ? r["-moz-transform"] = r.transform = "translate(" + n.left + "px," + n.top + "px)" : (r.left = n.left, r.top = n.top), r } } });
        var B = "iframe",
            H = "//about:blank",
            N = function(t) {
                if (e.currTemplate[B]) {
                    var i = e.currTemplate[B].find("iframe");
                    i.length && (t || (i[0].src = H), e.isIE8 && i.css("display", t ? "block" : "none")) } };
        t.magnificPopup.registerModule(B, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() { e.types.push(B), _("BeforeChange", function(t, e, i) { e !== i && (e === B ? N() : i === B && N(!0)) }), _(r + "." + B, function() { N() }) }, getIframe: function(i, a) {
                    var n = i.src,
                        o = e.st.iframe;
                    t.each(o.patterns, function() {
                        return n.indexOf(this.index) > -1 ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1) : void 0 });
                    var s = {};
                    return o.srcAction && (s[o.srcAction] = n), e._parseMarkup(a, s, i), e.updateStatus("ready"), a } } });
        var Q = function(t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : 0 > t ? i + t : t },
            V = function(t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i) };
        t.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() {
                    var i = e.st.gallery,
                        n = ".mfp-gallery";
                    return e.direction = !0, i && i.enabled ? (o += " mfp-gallery", _(h + n, function() { i.navigateByImgClick && e.wrap.on("click" + n, ".mfp-img", function() {
                            return e.items.length > 1 ? (e.next(), !1) : void 0 }), a.on("keydown" + n, function(t) { 37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next() }) }), _("UpdateStatus" + n, function(t, i) { i.text && (i.text = V(i.text, e.currItem.index, e.items.length)) }), _(p + n, function(t, a, n, o) {
                        var s = e.items.length;
                        n.counter = s > 1 ? V(i.tCounter, o.index, s) : "" }), _("BuildControls" + n, function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var a = i.arrowMarkup,
                                n = e.arrowLeft = t(a.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(w),
                                o = e.arrowRight = t(a.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(w);
                            n.click(function() { e.prev() }), o.click(function() { e.next() }), e.container.append(n.add(o)) } }), _(u + n, function() { e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() { e.preloadNearbyImages(), e._preloadTimeout = null }, 16) }), void _(r + n, function() { a.off(n), e.wrap.off("click" + n), e.arrowRight = e.arrowLeft = null })) : !1 }, next: function() { e.direction = !0, e.index = Q(e.index + 1), e.updateItemHTML() }, prev: function() { e.direction = !1, e.index = Q(e.index - 1), e.updateItemHTML() }, goTo: function(t) { e.direction = t >= e.index, e.index = t, e.updateItemHTML() }, preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        a = Math.min(i[0], e.items.length),
                        n = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? n : a); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? a : n); t++) e._preloadItem(e.index - t) }, _preloadItem: function(i) {
                    if (i = Q(i), !e.items[i].preloaded) {
                        var a = e.items[i];
                        a.parsed || (a = e.parseEl(i)), C("LazyLoad", a), "image" === a.type && (a.img = t('<img class="mfp-img" />').on("load.mfploader", function() { a.hasSize = !0 }).on("error.mfploader", function() { a.hasSize = !0, a.loadError = !0, C("LazyLoadError", a) }).attr("src", a.src)), a.preloaded = !0 } } } });
        var X = "retina";
        t.magnificPopup.registerModule(X, { options: { replaceSrc: function(t) {
                    return t.src.replace(/\.\w+$/, function(t) {
                        return "@2x" + t }) }, ratio: 1 }, proto: { initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        i = isNaN(i) ? i() : i, i > 1 && (_("ImageHasSize." + X, function(t, e) { e.img.css({ "max-width": e.img[0].naturalWidth / i, width: "100%" }) }), _("ElementParse." + X, function(e, a) { a.src = t.replaceSrc(a, i) })) } } } }), k()
    }),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = function(t) { this.canvas = t.canvas, this.ctx = t;
                var e = function(t, e) {
                    return t["offset" + e] ? t["offset" + e] : document.defaultView.getComputedStyle(t).getPropertyValue(e) };
                this.width = e(t.canvas, "Width") || t.canvas.width, this.height = e(t.canvas, "Height") || t.canvas.height;
                return this.aspectRatio = this.width / this.height, a.retinaScale(this), this };
        i.defaults = { global: { animation: !0, animationSteps: 60, animationEasing: "easeOutQuart", showScale: !0, scaleOverride: !1, scaleSteps: null, scaleStepWidth: null, scaleStartValue: null, scaleLineColor: "rgba(0,0,0,.1)", scaleLineWidth: 1, scaleShowLabels: !0, scaleLabel: "<%=value%>", scaleIntegersOnly: !0, scaleBeginAtZero: !1, scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", scaleFontSize: 12, scaleFontStyle: "normal", scaleFontColor: "#666", responsive: !1, maintainAspectRatio: !0, showTooltips: !0, customTooltips: !1, tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"], tooltipFillColor: "rgba(0,0,0,0.8)", tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipFontSize: 14, tooltipFontStyle: "normal", tooltipFontColor: "#fff", tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", tooltipTitleFontSize: 14, tooltipTitleFontStyle: "bold", tooltipTitleFontColor: "#fff", tooltipTitleTemplate: "<%= label%>", tooltipYPadding: 6, tooltipXPadding: 6, tooltipCaretSize: 8, tooltipCornerRadius: 6, tooltipXOffset: 10, tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>", multiTooltipTemplate: "<%= datasetLabel %>: <%= value %>", multiTooltipKeyBackground: "#fff", segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928"], segmentHighlightColorDefaults: ["#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150"], onAnimationProgress: function() {}, onAnimationComplete: function() {} } }, i.types = {};
        var a = i.helpers = {},
            n = a.each = function(t, e, i) {
                var a = Array.prototype.slice.call(arguments, 3);
                if (t)
                    if (t.length === +t.length) {
                        var n;
                        for (n = 0; n < t.length; n++) e.apply(i, [t[n], n].concat(a)) } else
                        for (var o in t) e.apply(i, [t[o], o].concat(a)) },
            o = a.clone = function(t) {
                var e = {};
                return n(t, function(i, a) { t.hasOwnProperty(a) && (e[a] = i) }), e },
            s = a.extend = function(t) {
                return n(Array.prototype.slice.call(arguments, 1), function(e) { n(e, function(i, a) { e.hasOwnProperty(a) && (t[a] = i) }) }), t },
            r = a.merge = function(t, e) {
                var i = Array.prototype.slice.call(arguments, 0);
                return i.unshift({}), s.apply(null, i) },
            l = a.indexOf = function(t, e) {
                if (Array.prototype.indexOf) return t.indexOf(e);
                for (var i = 0; i < t.length; i++)
                    if (t[i] === e) return i;
                return -1 },
            d = (a.where = function(t, e) {
                var i = [];
                return a.each(t, function(t) { e(t) && i.push(t) }), i }, a.findNextWhere = function(t, e, i) { i || (i = -1);
                for (var a = i + 1; a < t.length; a++) {
                    var n = t[a];
                    if (e(n)) return n } }, a.findPreviousWhere = function(t, e, i) { i || (i = t.length);
                for (var a = i - 1; a >= 0; a--) {
                    var n = t[a];
                    if (e(n)) return n } }, a.inherits = function(t) {
                var e = this,
                    i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                        return e.apply(this, arguments) },
                    a = function() { this.constructor = i };
                return a.prototype = e.prototype, i.prototype = new a, i.extend = d, t && s(i.prototype, t), i.__super__ = e.prototype, i }),
            c = a.noop = function() {},
            p = a.uid = function() {
                var t = 0;
                return function() {
                    return "chart-" + t++ } }(),
            h = a.warn = function(t) { window.console && "function" == typeof window.console.warn && console.warn(t) },
            u = a.amd = "function" == typeof define && define.amd,
            f = a.isNumber = function(t) {
                return !isNaN(parseFloat(t)) && isFinite(t) },
            g = a.max = function(t) {
                return Math.max.apply(Math, t) },
            m = a.min = function(t) {
                return Math.min.apply(Math, t) },
            v = (a.cap = function(t, e, i) {
                if (f(e)) {
                    if (t > e) return e } else if (f(i) && i > t) return i;
                return t }, a.getDecimalPlaces = function(t) {
                if (t % 1 !== 0 && f(t)) {
                    var e = t.toString();
                    if (e.indexOf("e-") < 0) return e.split(".")[1].length;
                    if (e.indexOf(".") < 0) return parseInt(e.split("e-")[1]);
                    var i = e.split(".")[1].split("e-");
                    return i[0].length + parseInt(i[1]) }
                return 0 }),
            w = a.radians = function(t) {
                return t * (Math.PI / 180) },
            y = (a.getAngleFromPoint = function(t, e) {
                var i = e.x - t.x,
                    a = e.y - t.y,
                    n = Math.sqrt(i * i + a * a),
                    o = 2 * Math.PI + Math.atan2(a, i);
                return 0 > i && 0 > a && (o += 2 * Math.PI), { angle: o, distance: n } }, a.aliasPixel = function(t) {
                return t % 2 === 0 ? 0 : .5 }),
            b = (a.splineCurve = function(t, e, i, a) {
                var n = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
                    o = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
                    s = a * n / (n + o),
                    r = a * o / (n + o);
                return { inner: { x: e.x - s * (i.x - t.x), y: e.y - s * (i.y - t.y) }, outer: { x: e.x + r * (i.x - t.x), y: e.y + r * (i.y - t.y) } } }, a.calculateOrderOfMagnitude = function(t) {
                return Math.floor(Math.log(t) / Math.LN10) }),
            x = (a.calculateScaleRange = function(t, e, i, a, o) {
                var s = 2,
                    r = Math.floor(e / (1.5 * i)),
                    l = s >= r,
                    d = [];
                n(t, function(t) { null == t || d.push(t) });
                var c = m(d),
                    p = g(d);
                p === c && (p += .5, c >= .5 && !a ? c -= .5 : p += .5);
                for (var h = Math.abs(p - c), u = b(h), f = Math.ceil(p / (1 * Math.pow(10, u))) * Math.pow(10, u), v = a ? 0 : Math.floor(c / (1 * Math.pow(10, u))) * Math.pow(10, u), w = f - v, y = Math.pow(10, u), x = Math.round(w / y);
                    (x > r || r > 2 * x) && !l;)
                    if (x > r) y *= 2, x = Math.round(w / y), x % 1 !== 0 && (l = !0);
                    else if (o && u >= 0) {
                    if (y / 2 % 1 !== 0) break;
                    y /= 2, x = Math.round(w / y) } else y /= 2, x = Math.round(w / y);
                return l && (x = s, y = w / x), { steps: x, stepValue: y, min: v, max: v + x * y } }, a.template = function(t, e) {
                function i(t, e) {
                    var i = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : a[t] = a[t];
                    return e ? i(e) : i }
                if (t instanceof Function) return t(e);
                var a = {};
                return i(t, e) }),
            _ = (a.generateLabels = function(t, e, i, a) {
                var o = new Array(e);
                return t && n(o, function(e, n) { o[n] = x(t, { value: i + a * (n + 1) }) }), o }, a.easingEffects = { linear: function(t) {
                    return t }, easeInQuad: function(t) {
                    return t * t }, easeOutQuad: function(t) {
                    return -1 * t * (t - 2) }, easeInOutQuad: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t : -0.5 * (--t * (t - 2) - 1) }, easeInCubic: function(t) {
                    return t * t * t }, easeOutCubic: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t + 1) }, easeInOutCubic: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2) }, easeInQuart: function(t) {
                    return t * t * t * t }, easeOutQuart: function(t) {
                    return -1 * ((t = t / 1 - 1) * t * t * t - 1) }, easeInOutQuart: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2) }, easeInQuint: function(t) {
                    return 1 * (t /= 1) * t * t * t * t }, easeOutQuint: function(t) {
                    return 1 * ((t = t / 1 - 1) * t * t * t * t + 1) }, easeInOutQuint: function(t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2) }, easeInSine: function(t) {
                    return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1 }, easeOutSine: function(t) {
                    return 1 * Math.sin(t / 1 * (Math.PI / 2)) }, easeInOutSine: function(t) {
                    return -0.5 * (Math.cos(Math.PI * t / 1) - 1) }, easeInExpo: function(t) {
                    return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1)) }, easeOutExpo: function(t) {
                    return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1) }, easeInOutExpo: function(t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2) }, easeInCirc: function(t) {
                    return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1) }, easeOutCirc: function(t) {
                    return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t) }, easeInOutCirc: function(t) {
                    return (t /= .5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) }, easeInElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        a = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), a < Math.abs(1) ? (a = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / a), -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i))) }, easeOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        a = 1;
                    return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), a < Math.abs(1) ? (a = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / a), a * Math.pow(2, -10 * t) * Math.sin((1 * t - e) * (2 * Math.PI) / i) + 1) }, easeInOutElastic: function(t) {
                    var e = 1.70158,
                        i = 0,
                        a = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)), a < Math.abs(1) ? (a = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / a), 1 > t ? -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i)) : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((1 * t - e) * (2 * Math.PI) / i) * .5 + 1) }, easeInBack: function(t) {
                    var e = 1.70158;
                    return 1 * (t /= 1) * t * ((e + 1) * t - e) }, easeOutBack: function(t) {
                    var e = 1.70158;
                    return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1) }, easeInOutBack: function(t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2) }, easeInBounce: function(t) {
                    return 1 - _.easeOutBounce(1 - t) }, easeOutBounce: function(t) {
                    return (t /= 1) < 1 / 2.75 ? 1 * (7.5625 * t * t) : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }, easeInOutBounce: function(t) {
                    return .5 > t ? .5 * _.easeInBounce(2 * t) : .5 * _.easeOutBounce(2 * t - 1) + .5 } }),
            T = a.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60) } }(),
            C = (a.cancelAnimFrame = function() {
                return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                    return window.clearTimeout(t, 1e3 / 60) } }(), a.animationLoop = function(t, e, i, a, n, o) {
                var s = 0,
                    r = _[i] || _.linear,
                    l = function() { s++;
                        var i = s / e,
                            d = r(i);
                        t.call(o, d, i, s), a.call(o, d, i), e > s ? o.animationFrame = T(l) : n.apply(o) };
                T(l) }, a.getRelativePosition = function(t) {
                var e, i, a = t.originalEvent || t,
                    n = t.currentTarget || t.srcElement,
                    o = n.getBoundingClientRect();
                return a.touches ? (e = a.touches[0].clientX - o.left, i = a.touches[0].clientY - o.top) : (e = a.clientX - o.left, i = a.clientY - o.top), { x: e, y: i } }, a.addEvent = function(t, e, i) { t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i }),
            S = a.removeEvent = function(t, e, i) { t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = c },
            k = (a.bindEvents = function(t, e, i) { t.events || (t.events = {}), n(e, function(e) { t.events[e] = function() { i.apply(t, arguments) }, C(t.chart.canvas, e, t.events[e]) }) }, a.unbindEvents = function(t, e) { n(e, function(e, i) { S(t.chart.canvas, i, e) }) }),
            P = a.getMaximumWidth = function(t) {
                var e = t.parentNode,
                    i = parseInt(A(e, "padding-left")) + parseInt(A(e, "padding-right"));
                return e ? e.clientWidth - i : 0 },
            I = a.getMaximumHeight = function(t) {
                var e = t.parentNode,
                    i = parseInt(A(e, "padding-bottom")) + parseInt(A(e, "padding-top"));
                return e ? e.clientHeight - i : 0 },
            A = a.getStyle = function(t, e) {
                return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e) },
            L = (a.getMaximumSize = a.getMaximumWidth, a.retinaScale = function(t) {
                var e = t.ctx,
                    i = t.canvas.width,
                    a = t.canvas.height;
                window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = a + "px", e.canvas.height = a * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio)) }),
            O = a.clear = function(t) { t.ctx.clearRect(0, 0, t.width, t.height) },
            M = a.fontString = function(t, e, i) {
                return e + " " + t + "px " + i },
            z = a.longestText = function(t, e, i) { t.font = e;
                var a = 0;
                return n(i, function(e) {
                    var i = t.measureText(e).width;
                    a = i > a ? i : a }), a },
            E = a.drawRoundedRectangle = function(t, e, i, a, n, o) { t.beginPath(), t.moveTo(e + o, i), t.lineTo(e + a - o, i), t.quadraticCurveTo(e + a, i, e + a, i + o), t.lineTo(e + a, i + n - o), t.quadraticCurveTo(e + a, i + n, e + a - o, i + n), t.lineTo(e + o, i + n), t.quadraticCurveTo(e, i + n, e, i + n - o), t.lineTo(e, i + o), t.quadraticCurveTo(e, i, e + o, i), t.closePath() };
        i.instances = {}, i.Type = function(t, e, a) { this.options = e, this.chart = a, this.id = p(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t) }, s(i.Type.prototype, {
            initialize: function() {
                return this },
            clear: function() {
                return O(this.chart), this },
            stop: function() {
                return i.animationService.cancelAnimation(this), this },
            resize: function(t) { this.stop();
                var e = this.chart.canvas,
                    i = P(this.chart.canvas),
                    a = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : I(this.chart.canvas);
                return e.width = this.chart.width = i, e.height = this.chart.height = a, L(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this },
            reflow: c,
            render: function(t) {
                if (t && this.reflow(), this.options.animation && !t) {
                    var e = new i.Animation;
                    e.numSteps = this.options.animationSteps, e.easing = this.options.animationEasing, e.render = function(t, e) {
                        var i = a.easingEffects[e.easing],
                            n = e.currentStep / e.numSteps,
                            o = i(n);
                        t.draw(o, n, e.currentStep) }, e.onAnimationProgress = this.options.onAnimationProgress, e.onAnimationComplete = this.options.onAnimationComplete, i.animationService.addAnimation(this, e) } else this.draw(), this.options.onAnimationComplete.call(this);
                return this },
            generateLegend: function() {
                return a.template(this.options.legendTemplate, this) },
            destroy: function() {
                this.stop(), this.clear(), k(this, this.events);
                var t = this.chart.canvas;
                t.width = this.chart.width, t.height = this.chart.height, t.style.removeProperty ? (t.style.removeProperty("width"), t.style.removeProperty("height")) : (t.style.removeAttribute("width"),
                    t.style.removeAttribute("height")), delete i.instances[this.id]
            },
            showTooltip: function(t, e) { "undefined" == typeof this.activeElements && (this.activeElements = []);
                var o = function(t) {
                    var e = !1;
                    return t.length !== this.activeElements.length ? e = !0 : (n(t, function(t, i) { t !== this.activeElements[i] && (e = !0) }, this), e) }.call(this, t);
                if (o || e) {
                    if (this.activeElements = t, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), t.length > 0)
                        if (this.datasets && this.datasets.length > 1) {
                            for (var s, r, d = this.datasets.length - 1; d >= 0 && (s = this.datasets[d].points || this.datasets[d].bars || this.datasets[d].segments, r = l(s, t[0]), -1 === r); d--);
                            var c = [],
                                p = [],
                                h = function(t) {
                                    var e, i, n, o, s, l = [],
                                        d = [],
                                        h = [];
                                    return a.each(this.datasets, function(t) { e = t.points || t.bars || t.segments, e[r] && e[r].hasValue() && l.push(e[r]) }), a.each(l, function(t) { d.push(t.x), h.push(t.y), c.push(a.template(this.options.multiTooltipTemplate, t)), p.push({ fill: t._saved.fillColor || t.fillColor, stroke: t._saved.strokeColor || t.strokeColor }) }, this), s = m(h), n = g(h), o = m(d), i = g(d), { x: o > this.chart.width / 2 ? o : i, y: (s + n) / 2 } }.call(this, r);
                            new i.MultiTooltip({ x: h.x, y: h.y, xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, xOffset: this.options.tooltipXOffset, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, titleTextColor: this.options.tooltipTitleFontColor, titleFontFamily: this.options.tooltipTitleFontFamily, titleFontStyle: this.options.tooltipTitleFontStyle, titleFontSize: this.options.tooltipTitleFontSize, cornerRadius: this.options.tooltipCornerRadius, labels: c, legendColors: p, legendColorBackground: this.options.multiTooltipKeyBackground, title: x(this.options.tooltipTitleTemplate, t[0]), chart: this.chart, ctx: this.chart.ctx, custom: this.options.customTooltips }).draw() } else n(t, function(t) {
                            var e = t.tooltipPosition();
                            new i.Tooltip({ x: Math.round(e.x), y: Math.round(e.y), xPadding: this.options.tooltipXPadding, yPadding: this.options.tooltipYPadding, fillColor: this.options.tooltipFillColor, textColor: this.options.tooltipFontColor, fontFamily: this.options.tooltipFontFamily, fontStyle: this.options.tooltipFontStyle, fontSize: this.options.tooltipFontSize, caretHeight: this.options.tooltipCaretSize, cornerRadius: this.options.tooltipCornerRadius, text: x(this.options.tooltipTemplate, t), chart: this.chart, custom: this.options.customTooltips }).draw() }, this);
                    return this } },
            toBase64Image: function() {
                return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments) }
        }), i.Type.extend = function(t) {
            var e = this,
                a = function() {
                    return e.apply(this, arguments) };
            if (a.prototype = o(e.prototype), s(a.prototype, t), a.extend = i.Type.extend, t.name || e.prototype.name) {
                var n = t.name || e.prototype.name,
                    l = i.defaults[e.prototype.name] ? o(i.defaults[e.prototype.name]) : {};
                i.defaults[n] = s(l, t.defaults), i.types[n] = a, i.prototype[n] = function(t, e) {
                    var o = r(i.defaults.global, i.defaults[n], e || {});
                    return new a(t, o, this) } } else h("Name not provided for this chart, so it hasn't been registered");
            return e }, i.Element = function(t) { s(this, t), this.initialize.apply(this, arguments), this.save() }, s(i.Element.prototype, { initialize: function() {}, restore: function(t) {
                return t ? n(t, function(t) { this[t] = this._saved[t] }, this) : s(this, this._saved), this }, save: function() {
                return this._saved = o(this), delete this._saved._saved, this }, update: function(t) {
                return n(t, function(t, e) { this._saved[e] = this[e], this[e] = t }, this), this }, transition: function(t, e) {
                return n(t, function(t, i) { this[i] = (t - this._saved[i]) * e + this._saved[i] }, this), this }, tooltipPosition: function() {
                return { x: this.x, y: this.y } }, hasValue: function() {
                return f(this.value) } }), i.Element.extend = d, i.Point = i.Element.extend({ display: !0, inRange: function(t, e) {
                var i = this.hitDetectionRadius + this.radius;
                return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2) }, draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke() } } }), i.Arc = i.Element.extend({ inRange: function(t, e) {
                var i = a.getAngleFromPoint(this, { x: t, y: e }),
                    n = i.angle % (2 * Math.PI),
                    o = (2 * Math.PI + this.startAngle) % (2 * Math.PI),
                    s = (2 * Math.PI + this.endAngle) % (2 * Math.PI) || 360,
                    r = o > s ? s >= n || n >= o : n >= o && s >= n,
                    l = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
                return r && l }, tooltipPosition: function() {
                var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                    e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
                return { x: this.x + Math.cos(t) * e, y: this.y + Math.sin(t) * e } }, draw: function(t) {
                var e = this.ctx;
                e.beginPath(), e.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle), e.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, !0), e.closePath(), e.strokeStyle = this.strokeColor, e.lineWidth = this.strokeWidth, e.fillStyle = this.fillColor, e.fill(), e.lineJoin = "bevel", this.showStroke && e.stroke() } }), i.Rectangle = i.Element.extend({ draw: function() {
                var t = this.ctx,
                    e = this.width / 2,
                    i = this.x - e,
                    a = this.x + e,
                    n = this.base - (this.base - this.y),
                    o = this.strokeWidth / 2;
                this.showStroke && (i += o, a -= o, n += o), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, n), t.lineTo(a, n), t.lineTo(a, this.base), t.fill(), this.showStroke && t.stroke() }, height: function() {
                return this.base - this.y }, inRange: function(t, e) {
                return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base } }), i.Animation = i.Element.extend({ currentStep: null, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null }), i.Tooltip = i.Element.extend({ draw: function() {
                var t = this.chart.ctx;
                t.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
                var e = this.caretPadding = 2,
                    i = t.measureText(this.text).width + 2 * this.xPadding,
                    a = this.fontSize + 2 * this.yPadding,
                    n = a + this.caretHeight + e;
                this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - n < 0 && (this.yAlign = "below");
                var o = this.x - i / 2,
                    s = this.y - n;
                if (t.fillStyle = this.fillColor, this.custom) this.custom(this);
                else {
                    switch (this.yAlign) {
                        case "above":
                            t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                            break;
                        case "below":
                            s = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill() }
                    switch (this.xAlign) {
                        case "left":
                            o = this.x - i + (this.cornerRadius + this.caretHeight);
                            break;
                        case "right":
                            o = this.x - (this.cornerRadius + this.caretHeight) }
                    E(t, o, s, i, a, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, o + i / 2, s + a / 2) } } }), i.MultiTooltip = i.Element.extend({ initialize: function() { this.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = M(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.titleHeight = this.title ? 1.5 * this.titleFontSize : 0, this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + this.titleHeight, this.ctx.font = this.titleFont;
                var t = this.ctx.measureText(this.title).width,
                    e = z(this.ctx, this.font, this.labels) + this.fontSize + 3,
                    i = g([e, t]);
                this.width = i + 2 * this.xPadding;
                var a = this.height / 2;
                this.y - a < 0 ? this.y = a : this.y + a > this.chart.height && (this.y = this.chart.height - a), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset }, getLineHeight: function(t) {
                var e = this.y - this.height / 2 + this.yPadding,
                    i = t - 1;
                return 0 === t ? e + this.titleHeight / 3 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + this.titleHeight }, draw: function() {
                if (this.custom) this.custom(this);
                else { E(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                    var t = this.ctx;
                    t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, a.each(this.labels, function(e, i) { t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize) }, this) } } }), i.Scale = i.Element.extend({ initialize: function() { this.fit() }, buildYLabels: function() { this.yLabels = [];
                for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(x(this.templateString, { value: (this.min + e * this.stepValue).toFixed(t) }));
                this.yLabelWidth = this.display && this.showLabels ? z(this.ctx, this.font, this.yLabels) + 10 : 0 }, addXLabel: function(t) { this.xLabels.push(t), this.valuesCount++, this.fit() }, removeXLabel: function() { this.xLabels.shift(), this.valuesCount--, this.fit() }, fit: function() { this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
                var t, e = this.endPoint,
                    i = this.endPoint - this.startPoint;
                for (this.calculateYRange(i), this.buildYLabels(), this.calculateXLabelRotation(); i > this.endPoint - this.startPoint;) i = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(i), this.buildYLabels(), t < this.yLabelWidth && (this.endPoint = e, this.calculateXLabelRotation()) }, calculateXLabelRotation: function() { this.ctx.font = this.font;
                var t, e, i = this.ctx.measureText(this.xLabels[0]).width,
                    a = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
                if (this.xScalePaddingRight = a / 2 + 3, this.xScalePaddingLeft = i / 2 > this.yLabelWidth ? i / 2 : this.yLabelWidth, this.xLabelRotation = 0, this.display) {
                    var n, o = z(this.ctx, this.font, this.xLabels);
                    this.xLabelWidth = o;
                    for (var s = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > s && 0 === this.xLabelRotation || this.xLabelWidth > s && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) n = Math.cos(w(this.xLabelRotation)), t = n * i, e = n * a, t + this.fontSize / 2 > this.yLabelWidth && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = n * o;
                    this.xLabelRotation > 0 && (this.endPoint -= Math.sin(w(this.xLabelRotation)) * o + 3) } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding }, calculateYRange: c, drawingArea: function() {
                return this.startPoint - this.endPoint }, calculateY: function(t) {
                var e = this.drawingArea() / (this.min - this.max);
                return this.endPoint - e * (t - this.min) }, calculateX: function(t) {
                var e = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                    i = e / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                    a = i * t + this.xScalePaddingLeft;
                return this.offsetGridLines && (a += i / 2), Math.round(a) }, update: function(t) { a.extend(this, t), this.fit() }, draw: function() {
                var t = this.ctx,
                    e = (this.endPoint - this.startPoint) / this.steps,
                    i = Math.round(this.xScalePaddingLeft);
                this.display && (t.fillStyle = this.textColor, t.font = this.font, n(this.yLabels, function(n, o) {
                    var s = this.endPoint - e * o,
                        r = Math.round(s),
                        l = this.showHorizontalLines;
                    t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(n, i - 10, s), 0 !== o || l || (l = !0), l && t.beginPath(), o > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), r += a.aliasPixel(t.lineWidth), l && (t.moveTo(i, r), t.lineTo(this.width, r), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, r), t.lineTo(i, r), t.stroke(), t.closePath() }, this), n(this.xLabels, function(e, i) {
                    var a = this.calculateX(i) + y(this.lineWidth),
                        n = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + y(this.lineWidth),
                        o = this.xLabelRotation > 0,
                        s = this.showVerticalLines;
                    0 !== i || s || (s = !0), s && t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), s && (t.moveTo(n, this.endPoint), t.lineTo(n, this.startPoint - 3), t.stroke(), t.closePath()), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(n, this.endPoint), t.lineTo(n, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(a, o ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * w(this.xLabelRotation)), t.font = this.font, t.textAlign = o ? "right" : "center", t.textBaseline = o ? "middle" : "top", t.fillText(e, 0, 0), t.restore() }, this)) } }), i.RadialScale = i.Element.extend({ initialize: function() { this.size = m([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 }, calculateCenterOffset: function(t) {
                var e = this.drawingArea / (this.max - this.min);
                return (t - this.min) * e }, update: function() { this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels() }, buildYLabels: function() { this.yLabels = [];
                for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(x(this.templateString, { value: (this.min + e * this.stepValue).toFixed(t) })) }, getCircumference: function() {
                return 2 * Math.PI / this.valuesCount }, setScaleSize: function() {
                var t, e, i, a, n, o, s, r, l, d, c, p, h = m([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                    u = this.width,
                    g = 0;
                for (this.ctx.font = M(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++) t = this.getPointPosition(e, h), i = this.ctx.measureText(x(this.templateString, { value: this.labels[e] })).width + 5, 0 === e || e === this.valuesCount / 2 ? (a = i / 2, t.x + a > u && (u = t.x + a, n = e), t.x - a < g && (g = t.x - a, s = e)) : e < this.valuesCount / 2 ? t.x + i > u && (u = t.x + i, n = e) : e > this.valuesCount / 2 && t.x - i < g && (g = t.x - i, s = e);
                l = g, d = Math.ceil(u - this.width), o = this.getIndexAngle(n), r = this.getIndexAngle(s), c = d / Math.sin(o + Math.PI / 2), p = l / Math.sin(r + Math.PI / 2), c = f(c) ? c : 0, p = f(p) ? p : 0, this.drawingArea = h - (p + c) / 2, this.setCenterPoint(p, c) }, setCenterPoint: function(t, e) {
                var i = this.width - e - this.drawingArea,
                    a = t + this.drawingArea;
                this.xCenter = (a + i) / 2, this.yCenter = this.height / 2 }, getIndexAngle: function(t) {
                var e = 2 * Math.PI / this.valuesCount;
                return t * e - Math.PI / 2 }, getPointPosition: function(t, e) {
                var i = this.getIndexAngle(t);
                return { x: Math.cos(i) * e + this.xCenter, y: Math.sin(i) * e + this.yCenter } }, draw: function() {
                if (this.display) {
                    var t = this.ctx;
                    if (n(this.yLabels, function(e, i) {
                            if (i > 0) {
                                var a, n = i * (this.drawingArea / this.steps),
                                    o = this.yCenter - n;
                                if (this.lineWidth > 0)
                                    if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                    else { t.beginPath();
                                        for (var s = 0; s < this.valuesCount; s++) a = this.getPointPosition(s, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === s ? t.moveTo(a.x, a.y) : t.lineTo(a.x, a.y);
                                        t.closePath(), t.stroke() }
                                if (this.showLabels) {
                                    if (t.font = M(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                        var r = t.measureText(e).width;
                                        t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - r / 2 - this.backdropPaddingX, o - this.fontSize / 2 - this.backdropPaddingY, r + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY) }
                                    t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, o) } } }, this), !this.lineArc) { t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                        for (var e = this.valuesCount - 1; e >= 0; e--) {
                            var i = null,
                                a = null;
                            if (this.angleLineWidth > 0 && e % this.angleLineInterval === 0 && (i = this.calculateCenterOffset(this.max), a = this.getPointPosition(e, i), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(a.x, a.y), t.stroke(), t.closePath()), this.backgroundColors && this.backgroundColors.length == this.valuesCount) { null == i && (i = this.calculateCenterOffset(this.max)), null == a && (a = this.getPointPosition(e, i));
                                var o = this.getPointPosition(0 === e ? this.valuesCount - 1 : e - 1, i),
                                    s = this.getPointPosition(e === this.valuesCount - 1 ? 0 : e + 1, i),
                                    r = { x: (o.x + a.x) / 2, y: (o.y + a.y) / 2 },
                                    l = { x: (a.x + s.x) / 2, y: (a.y + s.y) / 2 };
                                t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(r.x, r.y), t.lineTo(a.x, a.y), t.lineTo(l.x, l.y), t.fillStyle = this.backgroundColors[e], t.fill(), t.closePath() }
                            var d = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                            t.font = M(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                            var c = this.labels.length,
                                p = this.labels.length / 2,
                                h = p / 2,
                                u = h > e || e > c - h,
                                f = e === h || e === c - h;
                            0 === e ? t.textAlign = "center" : e === p ? t.textAlign = "center" : p > e ? t.textAlign = "left" : t.textAlign = "right", f ? t.textBaseline = "middle" : u ? t.textBaseline = "bottom" : t.textBaseline = "top", t.fillText(this.labels[e], d.x, d.y) } } } } }), i.animationService = { frameDuration: 17, animations: [], dropFrames: 0, addAnimation: function(t, e) {
                for (var i = 0; i < this.animations.length; ++i)
                    if (this.animations[i].chartInstance === t) return void(this.animations[i].animationObject = e);
                this.animations.push({ chartInstance: t, animationObject: e }), 1 == this.animations.length && a.requestAnimFrame.call(window, this.digestWrapper) }, cancelAnimation: function(t) {
                var e = a.findNextWhere(this.animations, function(e) {
                    return e.chartInstance === t });
                e && this.animations.splice(e, 1) }, digestWrapper: function() { i.animationService.startDigest.call(i.animationService) }, startDigest: function() {
                var t = Date.now(),
                    e = 0;
                this.dropFrames > 1 && (e = Math.floor(this.dropFrames), this.dropFrames -= e);
                for (var i = 0; i < this.animations.length; i++) null === this.animations[i].animationObject.currentStep && (this.animations[i].animationObject.currentStep = 0), this.animations[i].animationObject.currentStep += 1 + e, this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps), this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject), this.animations[i].animationObject.currentStep == this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance), this.animations.splice(i, 1), i--);
                var n = Date.now(),
                    o = n - t - this.frameDuration,
                    s = o / this.frameDuration;
                s > 1 && (this.dropFrames += s), this.animations.length > 0 && a.requestAnimFrame.call(window, this.digestWrapper) } }, a.addEvent(window, "resize", function() {
            var t;
            return function() { clearTimeout(t), t = setTimeout(function() { n(i.instances, function(t) { t.options.responsive && t.resize(t.render, !0) }) }, 50) } }()), u ? define("Chart", [], function() {
            return i }) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function() {
            return t.Chart = e, i }
    }.call(this),
    function() { "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            a = { scaleBeginAtZero: !0, scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, barShowStroke: !0, barStrokeWidth: 2, barValueSpacing: 5, barDatasetSpacing: 1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span class="<%=name.toLowerCase()%>-legend-icon" style="background-color:<%=datasets[i].fillColor%>"></span><span class="<%=name.toLowerCase()%>-legend-text"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>' };
        e.Type.extend({ name: "Bar", defaults: a, initialize: function(t) {
                var a = this.options;
                this.ScaleClass = e.Scale.extend({ offsetGridLines: !0, calculateBarX: function(t, e, i) {
                        var n = this.calculateBaseWidth(),
                            o = this.calculateX(i) - n / 2,
                            s = this.calculateBarWidth(t);
                        return o + s * e + e * a.barDatasetSpacing + s / 2 }, calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * a.barValueSpacing }, calculateBarWidth: function(t) {
                        var e = this.calculateBaseWidth() - (t - 1) * a.barDatasetSpacing;
                        return e / t } }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function(t) { t.restore(["fillColor", "strokeColor"]) }), i.each(e, function(t) { t && (t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke) }), this.showTooltip(e) }), this.BarClass = e.Rectangle.extend({ strokeWidth: this.options.barStrokeWidth, showStroke: this.options.barShowStroke, ctx: this.chart.ctx }), i.each(t.datasets, function(e, a) {
                    var n = { label: e.label || null, fillColor: e.fillColor, strokeColor: e.strokeColor, bars: [] };
                    this.datasets.push(n), i.each(e.data, function(i, a) { n.bars.push(new this.BarClass({ value: i, label: t.labels[a], datasetLabel: e.label, strokeColor: "object" == typeof e.strokeColor ? e.strokeColor[a] : e.strokeColor, fillColor: "object" == typeof e.fillColor ? e.fillColor[a] : e.fillColor, highlightFill: e.highlightFill ? "object" == typeof e.highlightFill ? e.highlightFill[a] : e.highlightFill : "object" == typeof e.fillColor ? e.fillColor[a] : e.fillColor, highlightStroke: e.highlightStroke ? "object" == typeof e.highlightStroke ? e.highlightStroke[a] : e.highlightStroke : "object" == typeof e.strokeColor ? e.strokeColor[a] : e.strokeColor })) }, this) }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, e, a) { i.extend(t, { width: this.scale.calculateBarWidth(this.datasets.length), x: this.scale.calculateBarX(this.datasets.length, a, e), y: this.scale.endPoint }), t.save() }, this), this.render() }, update: function() { this.scale.update(), i.each(this.activeElements, function(t) { t.restore(["fillColor", "strokeColor"]) }), this.eachBars(function(t) { t.save() }), this.render() }, eachBars: function(t) { i.each(this.datasets, function(e, a) { i.each(e.bars, t, this, a) }, this) }, getBarsAtEvent: function(t) {
                for (var e, a = [], n = i.getRelativePosition(t), o = function(t) { a.push(t.bars[e]) }, s = 0; s < this.datasets.length; s++)
                    for (e = 0; e < this.datasets[s].bars.length; e++)
                        if (this.datasets[s].bars[e].inRange(n.x, n.y)) return i.each(this.datasets, o), a;
                return a }, buildScale: function(t) {
                var e = this,
                    a = function() {
                        var t = [];
                        return e.eachBars(function(e) { t.push(e.value) }), t },
                    n = { templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: t.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function(t) {
                            var e = i.calculateScaleRange(a(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e) }, xLabels: t, font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, showHorizontalLines: this.options.scaleShowHorizontalLines, showVerticalLines: this.options.scaleShowVerticalLines, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0, showLabels: this.options.scaleShowLabels, display: this.options.showScale };
                this.options.scaleOverride && i.extend(n, { calculateYRange: i.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth }), this.scale = new this.ScaleClass(n) }, addData: function(t, e) { i.each(t, function(t, i) { this.datasets[i].bars.push(new this.BarClass({ value: t, label: e, datasetLabel: this.datasets[i].label, x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1), y: this.scale.endPoint, width: this.scale.calculateBarWidth(this.datasets.length), base: this.scale.endPoint, strokeColor: this.datasets[i].strokeColor, fillColor: this.datasets[i].fillColor })) }, this), this.scale.addXLabel(e), this.update() }, removeData: function() { this.scale.removeXLabel(), i.each(this.datasets, function(t) { t.bars.shift() }, this), this.update() }, reflow: function() { i.extend(this.BarClass.prototype, { y: this.scale.endPoint, base: this.scale.endPoint });
                var t = i.extend({ height: this.chart.height, width: this.chart.width });
                this.scale.update(t) }, draw: function(t) {
                var e = t || 1;
                this.clear();
                this.chart.ctx;
                this.scale.draw(e), i.each(this.datasets, function(t, a) { i.each(t.bars, function(t, i) { t.hasValue() && (t.base = this.scale.endPoint, t.transition({ x: this.scale.calculateBarX(this.datasets.length, a, i), y: this.scale.calculateY(t.value), width: this.scale.calculateBarWidth(this.datasets.length) }, e).draw()) }, this) }, this) } }) }.call(this),
    function() { "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            a = { segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, percentageInnerCutout: 50, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span class="<%=name.toLowerCase()%>-legend-icon" style="background-color:<%=segments[i].fillColor%>"></span><span class="<%=name.toLowerCase()%>-legend-text"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>' };
        e.Type.extend({ name: "Doughnut", defaults: a, initialize: function(t) { this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({ ctx: this.chart.ctx, x: this.chart.width / 2, y: this.chart.height / 2 }), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) { t.restore(["fillColor"]) }), i.each(e, function(t) { t.fillColor = t.highlightColor }), this.showTooltip(e) }), this.calculateTotal(t), i.each(t, function(e, i) { e.color || (e.color = "hsl(" + 360 * i / t.length + ", 100%, 50%)"), this.addData(e, i, !0) }, this), this.render() }, getSegmentsAtEvent: function(t) {
                var e = [],
                    a = i.getRelativePosition(t);
                return i.each(this.segments, function(t) { t.inRange(a.x, a.y) && e.push(t) }, this), e }, addData: function(t, i, a) {
                var n = void 0 !== i ? i : this.segments.length; "undefined" == typeof t.color && (t.color = e.defaults.global.segmentColorDefault[n % e.defaults.global.segmentColorDefault.length], t.highlight = e.defaults.global.segmentHighlightColorDefaults[n % e.defaults.global.segmentHighlightColorDefaults.length]), this.segments.splice(n, 0, new this.SegmentArc({ value: t.value, outerRadius: this.options.animateScale ? 0 : this.outerRadius, innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout, fillColor: t.color, highlightColor: t.highlight || t.color, showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, startAngle: 1.5 * Math.PI, circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value), label: t.label })), a || (this.reflow(), this.update()) }, calculateCircumference: function(t) {
                return this.total > 0 ? 2 * Math.PI * (t / this.total) : 0 }, calculateTotal: function(t) { this.total = 0, i.each(t, function(t) { this.total += Math.abs(t.value) }, this) }, update: function() { this.calculateTotal(this.segments), i.each(this.activeElements, function(t) { t.restore(["fillColor"]) }), i.each(this.segments, function(t) { t.save() }), this.render() }, removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update() }, reflow: function() { i.extend(this.SegmentArc.prototype, { x: this.chart.width / 2, y: this.chart.height / 2 }), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function(t) { t.update({ outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout }) }, this) }, draw: function(t) {
                var e = t ? t : 1;
                this.clear(), i.each(this.segments, function(t, i) { t.transition({ circumference: this.calculateCircumference(t.value), outerRadius: this.outerRadius, innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle) }, this) } }), e.types.Doughnut.extend({ name: "Pie", defaults: i.merge(a, { percentageInnerCutout: 0 }) }) }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            a = { scaleShowGridLines: !0, scaleGridLineColor: "rgba(0,0,0,.05)", scaleGridLineWidth: 1, scaleShowHorizontalLines: !0, scaleShowVerticalLines: !0, bezierCurve: !0, bezierCurveTension: .4, pointDot: !0, pointDotRadius: 4, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span class="<%=name.toLowerCase()%>-legend-icon" style="background-color:<%=datasets[i].strokeColor%>"></span><span class="<%=name.toLowerCase()%>-legend-text"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>', offsetGridLines: !1 };
        e.Type.extend({
            name: "Line",
            defaults: a,
            initialize: function(t) { this.PointClass = e.Point.extend({ offsetGridLines: this.options.offsetGridLines, strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx, inRange: function(t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2) } }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) { t.restore(["fillColor", "strokeColor"]) }), i.each(e, function(t) { t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke }), this.showTooltip(e) }), i.each(t.datasets, function(e) {
                    var a = { label: e.label || null, fillColor: e.fillColor, strokeColor: e.strokeColor, pointColor: e.pointColor, pointStrokeColor: e.pointStrokeColor, points: [] };
                    this.datasets.push(a), i.each(e.data, function(i, n) { a.points.push(new this.PointClass({ value: i, label: t.labels[n], datasetLabel: e.label, strokeColor: e.pointStrokeColor, fillColor: e.pointColor, highlightFill: e.pointHighlightFill || e.pointColor, highlightStroke: e.pointHighlightStroke || e.pointStrokeColor })) }, this), this.buildScale(t.labels), this.eachPoints(function(t, e) { i.extend(t, { x: this.scale.calculateX(e), y: this.scale.endPoint }), t.save() }, this) }, this), this.render() },
            update: function() { this.scale.update(), i.each(this.activeElements, function(t) { t.restore(["fillColor", "strokeColor"]) }), this.eachPoints(function(t) { t.save() }), this.render() },
            eachPoints: function(t) { i.each(this.datasets, function(e) { i.each(e.points, t, this) }, this) },
            getPointsAtEvent: function(t) {
                var e = [],
                    a = i.getRelativePosition(t);
                return i.each(this.datasets, function(t) { i.each(t.points, function(t) { t.inRange(a.x, a.y) && e.push(t) }) }, this), e },
            buildScale: function(t) {
                var a = this,
                    n = function() {
                        var t = [];
                        return a.eachPoints(function(e) { t.push(e.value) }), t },
                    o = { templateString: this.options.scaleLabel, height: this.chart.height, width: this.chart.width, ctx: this.chart.ctx, textColor: this.options.scaleFontColor, offsetGridLines: this.options.offsetGridLines, fontSize: this.options.scaleFontSize, fontStyle: this.options.scaleFontStyle, fontFamily: this.options.scaleFontFamily, valuesCount: t.length, beginAtZero: this.options.scaleBeginAtZero, integersOnly: this.options.scaleIntegersOnly, calculateYRange: function(t) {
                            var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e) }, xLabels: t, font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily), lineWidth: this.options.scaleLineWidth, lineColor: this.options.scaleLineColor, showHorizontalLines: this.options.scaleShowHorizontalLines, showVerticalLines: this.options.scaleShowVerticalLines, gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0, gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)", padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth, showLabels: this.options.scaleShowLabels, display: this.options.showScale };
                this.options.scaleOverride && i.extend(o, { calculateYRange: i.noop, steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth }), this.scale = new e.Scale(o) },
            addData: function(t, e) { i.each(t, function(t, i) { this.datasets[i].points.push(new this.PointClass({ value: t, label: e, datasetLabel: this.datasets[i].label, x: this.scale.calculateX(this.scale.valuesCount + 1), y: this.scale.endPoint, strokeColor: this.datasets[i].pointStrokeColor, fillColor: this.datasets[i].pointColor })) }, this), this.scale.addXLabel(e), this.update() },
            removeData: function() { this.scale.removeXLabel(), i.each(this.datasets, function(t) { t.points.shift() }, this), this.update() },
            reflow: function() {
                var t = i.extend({ height: this.chart.height, width: this.chart.width });
                this.scale.update(t) },
            draw: function(t) {
                var e = t || 1;
                this.clear();
                var a = this.chart.ctx,
                    n = function(t) {
                        return null !== t.value },
                    o = function(t, e, a) {
                        return i.findNextWhere(e, n, a) || t },
                    s = function(t, e, a) {
                        return i.findPreviousWhere(e, n, a) || t };
                this.scale && (this.scale.draw(e), i.each(this.datasets, function(t) {
                    var r = i.where(t.points, n);
                    i.each(t.points, function(t, i) { t.hasValue() && t.transition({ y: this.scale.calculateY(t.value), x: this.scale.calculateX(i) }, e) }, this), this.options.bezierCurve && i.each(r, function(t, e) {
                        var a = e > 0 && e < r.length - 1 ? this.options.bezierCurveTension : 0;
                        t.controlPoints = i.splineCurve(s(t, r, e), t, o(t, r, e), a), t.controlPoints.outer.y > this.scale.endPoint ? t.controlPoints.outer.y = this.scale.endPoint : t.controlPoints.outer.y < this.scale.startPoint && (t.controlPoints.outer.y = this.scale.startPoint), t.controlPoints.inner.y > this.scale.endPoint ? t.controlPoints.inner.y = this.scale.endPoint : t.controlPoints.inner.y < this.scale.startPoint && (t.controlPoints.inner.y = this.scale.startPoint) }, this), a.lineWidth = this.options.datasetStrokeWidth, a.strokeStyle = t.strokeColor, a.beginPath(), i.each(r, function(t, e) {
                        if (0 === e) a.moveTo(t.x, t.y);
                        else if (this.options.bezierCurve) {
                            var i = s(t, r, e);
                            a.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, t.controlPoints.inner.x, t.controlPoints.inner.y, t.x, t.y) } else a.lineTo(t.x, t.y) }, this), this.options.datasetStroke && a.stroke(), this.options.datasetFill && r.length > 0 && (a.lineTo(r[r.length - 1].x, this.scale.endPoint), a.lineTo(r[0].x, this.scale.endPoint), a.fillStyle = t.fillColor, a.closePath(), a.fill()), i.each(r, function(t) { t.draw() }) }, this)) }
        })
    }.call(this),
    function() { "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            a = { scaleShowLabelBackdrop: !0, scaleBackdropColor: "rgba(255,255,255,0.75)", scaleBeginAtZero: !0, scaleBackdropPaddingY: 2, scaleBackdropPaddingX: 2, scaleShowLine: !0, segmentShowStroke: !0, segmentStrokeColor: "#fff", segmentStrokeWidth: 2, animationSteps: 100, animationEasing: "easeOutBounce", animateRotate: !0, animateScale: !1, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span class="<%=name.toLowerCase()%>-legend-icon" style="background-color:<%=segments[i].fillColor%>"></span><span class="<%=name.toLowerCase()%>-legend-text"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>' };
        e.Type.extend({ name: "PolarArea", defaults: a, initialize: function(t) { this.segments = [], this.SegmentArc = e.Arc.extend({ showStroke: this.options.segmentShowStroke, strokeWidth: this.options.segmentStrokeWidth, strokeColor: this.options.segmentStrokeColor, ctx: this.chart.ctx, innerRadius: 0, x: this.chart.width / 2, y: this.chart.height / 2 }), this.scale = new e.RadialScale({ display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, lineArc: !0, width: this.chart.width, height: this.chart.height, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, valuesCount: t.length }), this.updateScaleRange(t), this.scale.update(), i.each(t, function(t, e) { this.addData(t, e, !0) }, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) { t.restore(["fillColor"]) }), i.each(e, function(t) { t.fillColor = t.highlightColor }), this.showTooltip(e) }), this.render() }, getSegmentsAtEvent: function(t) {
                var e = [],
                    a = i.getRelativePosition(t);
                return i.each(this.segments, function(t) { t.inRange(a.x, a.y) && e.push(t) }, this), e }, addData: function(t, e, i) {
                var a = e || this.segments.length;
                this.segments.splice(a, 0, new this.SegmentArc({ fillColor: t.color, highlightColor: t.highlight || t.color, label: t.label, value: t.value, outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value), circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(), startAngle: 1.5 * Math.PI })), i || (this.reflow(), this.update()) }, removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update() }, calculateTotal: function(t) { this.total = 0, i.each(t, function(t) { this.total += t.value }, this), this.scale.valuesCount = this.segments.length }, updateScaleRange: function(t) {
                var e = [];
                i.each(t, function(t) { e.push(t.value) });
                var a = this.options.scaleOverride ? { steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, a, { size: i.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }) }, update: function() { this.calculateTotal(this.segments), i.each(this.segments, function(t) { t.save() }), this.reflow(), this.render() }, reflow: function() { i.extend(this.SegmentArc.prototype, { x: this.chart.width / 2, y: this.chart.height / 2 }), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, { xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }), i.each(this.segments, function(t) { t.update({ outerRadius: this.scale.calculateCenterOffset(t.value) }) }, this) }, draw: function(t) {
                var e = t || 1;
                this.clear(), i.each(this.segments, function(t, i) { t.transition({ circumference: this.scale.getCircumference(), outerRadius: this.scale.calculateCenterOffset(t.value) }, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw() }, this), this.scale.draw() } }) }.call(this),
    function() { "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers;
        e.Type.extend({ name: "Radar", defaults: { scaleShowLine: !0, angleShowLineOut: !0, scaleShowLabels: !1, scaleBeginAtZero: !0, angleLineColor: "rgba(0,0,0,.1)", angleLineWidth: 1, angleLineInterval: 1, pointLabelFontFamily: "'Arial'", pointLabelFontStyle: "normal", pointLabelFontSize: 10, pointLabelFontColor: "#666", pointDot: !0, pointDotRadius: 3, pointDotStrokeWidth: 1, pointHitDetectionRadius: 20, datasetStroke: !0, datasetStrokeWidth: 2, datasetFill: !0, legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span class="<%=name.toLowerCase()%>-legend-icon" style="background-color:<%=datasets[i].strokeColor%>"></span><span class="<%=name.toLowerCase()%>-legend-text"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>' }, initialize: function(t) { this.PointClass = e.Point.extend({ strokeWidth: this.options.pointDotStrokeWidth, radius: this.options.pointDotRadius, display: this.options.pointDot, hitDetectionRadius: this.options.pointHitDetectionRadius, ctx: this.chart.ctx }), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) { t.restore(["fillColor", "strokeColor"]) }), i.each(e, function(t) { t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke }), this.showTooltip(e) }), i.each(t.datasets, function(e) {
                    var a = { label: e.label || null, fillColor: e.fillColor, strokeColor: e.strokeColor, pointColor: e.pointColor, pointStrokeColor: e.pointStrokeColor, points: [] };
                    this.datasets.push(a), i.each(e.data, function(i, n) {
                        var o;
                        this.scale.animation || (o = this.scale.getPointPosition(n, this.scale.calculateCenterOffset(i))), a.points.push(new this.PointClass({ value: i, label: t.labels[n], datasetLabel: e.label, x: this.options.animation ? this.scale.xCenter : o.x, y: this.options.animation ? this.scale.yCenter : o.y, strokeColor: e.pointStrokeColor, fillColor: e.pointColor, highlightFill: e.pointHighlightFill || e.pointColor, highlightStroke: e.pointHighlightStroke || e.pointStrokeColor })) }, this) }, this), this.render() }, eachPoints: function(t) { i.each(this.datasets, function(e) { i.each(e.points, t, this) }, this) }, getPointsAtEvent: function(t) {
                var e = i.getRelativePosition(t),
                    a = i.getAngleFromPoint({ x: this.scale.xCenter, y: this.scale.yCenter }, e),
                    n = 2 * Math.PI / this.scale.valuesCount,
                    o = Math.round((a.angle - 1.5 * Math.PI) / n),
                    s = [];
                return (o >= this.scale.valuesCount || 0 > o) && (o = 0), a.distance <= this.scale.drawingArea && i.each(this.datasets, function(t) { s.push(t.points[o]) }), s }, buildScale: function(t) { this.scale = new e.RadialScale({ display: this.options.showScale, fontStyle: this.options.scaleFontStyle, fontSize: this.options.scaleFontSize, fontFamily: this.options.scaleFontFamily, fontColor: this.options.scaleFontColor, showLabels: this.options.scaleShowLabels, showLabelBackdrop: this.options.scaleShowLabelBackdrop, backdropColor: this.options.scaleBackdropColor, backgroundColors: this.options.scaleBackgroundColors, backdropPaddingY: this.options.scaleBackdropPaddingY, backdropPaddingX: this.options.scaleBackdropPaddingX, lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0, lineColor: this.options.scaleLineColor, angleLineColor: this.options.angleLineColor, angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0, angleLineInterval: this.options.angleLineInterval ? this.options.angleLineInterval : 1, pointLabelFontColor: this.options.pointLabelFontColor, pointLabelFontSize: this.options.pointLabelFontSize, pointLabelFontFamily: this.options.pointLabelFontFamily, pointLabelFontStyle: this.options.pointLabelFontStyle, height: this.chart.height, width: this.chart.width, xCenter: this.chart.width / 2, yCenter: this.chart.height / 2, ctx: this.chart.ctx, templateString: this.options.scaleLabel, labels: t.labels, valuesCount: t.datasets[0].data.length }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels() }, updateScaleRange: function(t) {
                var e = function() {
                        var e = [];
                        return i.each(t, function(t) { t.data ? e = e.concat(t.data) : i.each(t.points, function(t) { e.push(t.value) }) }), e }(),
                    a = this.options.scaleOverride ? { steps: this.options.scaleSteps, stepValue: this.options.scaleStepWidth, min: this.options.scaleStartValue, max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, a) }, addData: function(t, e) { this.scale.valuesCount++, i.each(t, function(t, i) {
                    var a = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                    this.datasets[i].points.push(new this.PointClass({ value: t, label: e, datasetLabel: this.datasets[i].label, x: a.x, y: a.y, strokeColor: this.datasets[i].pointStrokeColor, fillColor: this.datasets[i].pointColor })) }, this), this.scale.labels.push(e), this.reflow(), this.update() }, removeData: function() { this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function(t) { t.points.shift() }, this), this.reflow(), this.update() }, update: function() { this.eachPoints(function(t) { t.save() }), this.reflow(), this.render() }, reflow: function() { i.extend(this.scale, { width: this.chart.width, height: this.chart.height, size: i.min([this.chart.width, this.chart.height]), xCenter: this.chart.width / 2, yCenter: this.chart.height / 2 }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels() }, draw: function(t) {
                var e = t || 1,
                    a = this.chart.ctx;
                this.clear(), this.scale.draw(), i.each(this.datasets, function(t) { i.each(t.points, function(t, i) { t.hasValue() && t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e) }, this), a.lineWidth = this.options.datasetStrokeWidth, a.strokeStyle = t.strokeColor, a.beginPath(), i.each(t.points, function(t, e) { 0 === e ? a.moveTo(t.x, t.y) : a.lineTo(t.x, t.y) }, this), a.closePath(), a.stroke(), a.fillStyle = t.fillColor, this.options.datasetFill && a.fill(), i.each(t.points, function(t) { t.hasValue() && t.draw() }) }, this) } }) }.call(this);
