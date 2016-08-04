jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function(e, t, n, o, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, o, i) }, easeInQuad: function(e, t, n, o, i) {
        return o * (t /= i) * t + n }, easeOutQuad: function(e, t, n, o, i) {
        return -o * (t /= i) * (t - 2) + n }, easeInOutQuad: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? o / 2 * t * t + n : -o / 2 * (--t * (t - 2) - 1) + n }, easeInCubic: function(e, t, n, o, i) {
        return o * (t /= i) * t * t + n }, easeOutCubic: function(e, t, n, o, i) {
        return o * ((t = t / i - 1) * t * t + 1) + n }, easeInOutCubic: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? o / 2 * t * t * t + n : o / 2 * ((t -= 2) * t * t + 2) + n }, easeInQuart: function(e, t, n, o, i) {
        return o * (t /= i) * t * t * t + n }, easeOutQuart: function(e, t, n, o, i) {
        return -o * ((t = t / i - 1) * t * t * t - 1) + n }, easeInOutQuart: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? o / 2 * t * t * t * t + n : -o / 2 * ((t -= 2) * t * t * t - 2) + n }, easeInQuint: function(e, t, n, o, i) {
        return o * (t /= i) * t * t * t * t + n }, easeOutQuint: function(e, t, n, o, i) {
        return o * ((t = t / i - 1) * t * t * t * t + 1) + n }, easeInOutQuint: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? o / 2 * t * t * t * t * t + n : o / 2 * ((t -= 2) * t * t * t * t + 2) + n }, easeInSine: function(e, t, n, o, i) {
        return -o * Math.cos(t / i * (Math.PI / 2)) + o + n }, easeOutSine: function(e, t, n, o, i) {
        return o * Math.sin(t / i * (Math.PI / 2)) + n }, easeInOutSine: function(e, t, n, o, i) {
        return -o / 2 * (Math.cos(Math.PI * t / i) - 1) + n }, easeInExpo: function(e, t, n, o, i) {
        return 0 == t ? n : o * Math.pow(2, 10 * (t / i - 1)) + n }, easeOutExpo: function(e, t, n, o, i) {
        return t == i ? n + o : o * (-Math.pow(2, -10 * t / i) + 1) + n }, easeInOutExpo: function(e, t, n, o, i) {
        return 0 == t ? n : t == i ? n + o : (t /= i / 2) < 1 ? o / 2 * Math.pow(2, 10 * (t - 1)) + n : o / 2 * (-Math.pow(2, -10 * --t) + 2) + n }, easeInCirc: function(e, t, n, o, i) {
        return -o * (Math.sqrt(1 - (t /= i) * t) - 1) + n }, easeOutCirc: function(e, t, n, o, i) {
        return o * Math.sqrt(1 - (t = t / i - 1) * t) + n }, easeInOutCirc: function(e, t, n, o, i) {
        return (t /= i / 2) < 1 ? -o / 2 * (Math.sqrt(1 - t * t) - 1) + n : o / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n }, easeInElastic: function(e, t, n, o, i) {
        var s = 1.70158,
            a = 0,
            r = o;
        if (0 == t) return n;
        if (1 == (t /= i)) return n + o;
        if (a || (a = .3 * i), r < Math.abs(o)) { r = o;
            var s = a / 4 } else var s = a / (2 * Math.PI) * Math.asin(o / r);
        return -(r * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * i - s) * Math.PI / a)) + n }, easeOutElastic: function(e, t, n, o, i) {
        var s = 1.70158,
            a = 0,
            r = o;
        if (0 == t) return n;
        if (1 == (t /= i)) return n + o;
        if (a || (a = .3 * i), r < Math.abs(o)) { r = o;
            var s = a / 4 } else var s = a / (2 * Math.PI) * Math.asin(o / r);
        return r * Math.pow(2, -10 * t) * Math.sin(2 * (t * i - s) * Math.PI / a) + o + n }, easeInOutElastic: function(e, t, n, o, i) {
        var s = 1.70158,
            a = 0,
            r = o;
        if (0 == t) return n;
        if (2 == (t /= i / 2)) return n + o;
        if (a || (a = .3 * i * 1.5), r < Math.abs(o)) { r = o;
            var s = a / 4 } else var s = a / (2 * Math.PI) * Math.asin(o / r);
        return 1 > t ? -.5 * r * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t * i - s) * Math.PI / a) + n : r * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t * i - s) * Math.PI / a) * .5 + o + n }, easeInBack: function(e, t, n, o, i, s) {
        return void 0 == s && (s = 1.70158), o * (t /= i) * t * ((s + 1) * t - s) + n }, easeOutBack: function(e, t, n, o, i, s) {
        return void 0 == s && (s = 1.70158), o * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n }, easeInOutBack: function(e, t, n, o, i, s) {
        return void 0 == s && (s = 1.70158), (t /= i / 2) < 1 ? o / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : o / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n }, easeInBounce: function(e, t, n, o, i) {
        return o - jQuery.easing.easeOutBounce(e, i - t, 0, o, i) + n }, easeOutBounce: function(e, t, n, o, i) {
        return (t /= i) < 1 / 2.75 ? 7.5625 * o * t * t + n : 2 / 2.75 > t ? o * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? o * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : o * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n }, easeInOutBounce: function(e, t, n, o, i) {
        return i / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, o, i) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, o, i) + .5 * o + n } }), ! function(e, t, n, o, i) { e.fn.multiscroll = function(s) {
        function a() {
            var n = t.location.hash.replace("#", ""),
                o = n;
            if (o.length) {
                var i = e(".ms-left").find('[data-anchor="' + o + '"]'),
                    s = "undefined" == typeof lastScrolledDestiny;
                (s || o !== lastScrolledDestiny) && f(i) } }

        function r(t) { clearTimeout(Y);
            var o = e(n.activeElement);
            if (!o.is("textarea") && !o.is("input") && !o.is("select") && s.keyboardScrolling) {
                var i = t.which,
                    a = [40, 38, 32, 33, 34];
                e.inArray(i, a) > -1 && t.preventDefault(), Y = setTimeout(function() { c(t) }, 150) } }

        function c(t) {
            var n = t.shiftKey;
            switch (t.which) {
                case 38:
                case 33:
                    B.moveSectionUp();
                    break;
                case 32:
                    if (n) { B.moveSectionUp();
                        break }
                case 40:
                case 34:
                    B.moveSectionDown();
                    break;
                case 36:
                    B.moveTo(1);
                    break;
                case 35:
                    B.moveTo(e(".ms-left .ms-section").length);
                    break;
                default:
                    return } }

        function l() { R = e(t).height(), e(".ms-tableCell").each(function() { e(this).css({ height: C(e(this).parent()) }) }), u(), e.isFunction(s.afterResize) && s.afterResize.call(this) }

        function u() { s.css3 ? (v(e(".ms-left"), "translate3d(0px, -" + e(".ms-left").find(".ms-section.active").position().top + "px, 0px)", !1), v(e(".ms-right"), "translate3d(0px, -" + e(".ms-right").find(".ms-section.active").position().top + "px, 0px)", !1)) : (e(".ms-left").css("top", -e(".ms-left").find(".ms-section.active").position().top), e(".ms-right").css("top", -e(".ms-right").find(".ms-section.active").position().top)) }

        function f(t) {
            var n = t.index(),
                o = e(".ms-right").find(".ms-section").eq(q - 1 - n),
                i = t.data("anchor"),
                a = e(".ms-left .ms-section.active"),
                r = a.index() + 1,
                c = M(t);
            z = !0;
            var l = { left: t.position().top, right: o.position().top };
            if (o.addClass("active").siblings().removeClass("active"), t.addClass("active").siblings().removeClass("active"), y(i), s.css3) { e.isFunction(s.onLeave) && s.onLeave.call(this, r, n + 1, c);
                var u = "translate3d(0px, -" + l.left + "px, 0px)",
                    f = "translate3d(0px, -" + l.right + "px, 0px)";
                v(e(".ms-left"), u, !0), v(e(".ms-right"), f, !0), setTimeout(function() { e.isFunction(s.afterLoad) && s.afterLoad.call(this, i, n + 1), setTimeout(function() { z = !1 }, L) }, s.scrollingSpeed) } else e.isFunction(s.onLeave) && s.onLeave.call(this, r, n + 1, c), e(".ms-left").animate({ top: -l.left }, s.scrollingSpeed, s.easing, function() { e.isFunction(s.afterLoad) && s.afterLoad.call(this, i, n + 1), setTimeout(function() { z = !1 }, L) }), e(".ms-right").animate({ top: -l.right }, s.scrollingSpeed, s.easing);
            lastScrolledDestiny = i, S(i), g(i, n) }

        function m() { n.addEventListener ? (n.removeEventListener("mousewheel", h, !1), n.removeEventListener("wheel", h, !1)) : n.detachEvent("onmousewheel", h) }

        function d() { n.addEventListener ? (n.addEventListener("mousewheel", h, !1), n.addEventListener("wheel", h, !1)) : n.attachEvent("onmousewheel", h) }

        function h(e) { e = t.event || e;
            var n = o.max(-1, o.min(1, e.wheelDelta || -e.deltaY || -e.detail));
            return z || (0 > n ? B.moveSectionDown() : B.moveSectionUp()), !1 }

        function v(e, t, n) { e.toggleClass("ms-easing", n), e.css(p(t)) }

        function p(e) {
            return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e } }

        function g(t, n) { s.navigation && (e("#multiscroll-nav").find(".active").removeClass("active"), t ? e("#multiscroll-nav").find('a[href="#' + t + '"]').addClass("active") : e("#multiscroll-nav").find("li").eq(n).find("a").addClass("active")) }

        function S(t) { s.menu && (e(s.menu).find(".active").removeClass("active"), e(s.menu).find('[data-menuanchor="' + t + '"]').addClass("active")) }

        function M(t) {
            var n = e(".ms-left .ms-section.active").index(),
                o = t.index();
            return n > o ? "up" : "down" }

        function y(e) { s.anchors.length && (location.hash = e), w() }

        function w() {
            var t = e(".ms-left .ms-section.active"),
                n = t.data("anchor"),
                o = t.index(),
                i = String(o);
            s.anchors.length && (i = n), i = i.replace("/", "-").replace("#", "");
            var a = new RegExp("\\b\\s?ms-viewing-[^\\s]+\\b", "g");
            e("body")[0].className = e("body")[0].className.replace(a, ""), e("body").addClass("ms-viewing-" + i) }

        function x() {
            var e, o = n.createElement("p"),
                s = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
            n.body.insertBefore(o, null);
            for (var a in s) o.style[a] !== i && (o.style[a] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(o).getPropertyValue(s[a]));
            return n.body.removeChild(o), e !== i && e.length > 0 && "none" !== e }

        function b(e) { e.addClass("ms-table").wrapInner('<div class="ms-tableCell" style="height: ' + C(e) + 'px" />') }

        function C(e) {
            var t = R;
            if (s.paddingTop || s.paddingBottom) {
                var n = parseInt(e.css("padding-top")) + parseInt(e.css("padding-bottom"));
                t = R - n }
            return t }

        function I() {
            var n = t.location.hash.replace("#", ""),
                o = e('.ms-left .ms-section[data-anchor="' + n + '"]');
            n.length && f(o) }

        function E(n) {
            var i = n.originalEvent;
            if (O(i) && (n.preventDefault(), e(".ms-left .ms-section.active"), !z)) {
                var a = k(i);
                U = a.y, W = a.x, o.abs(F - U) > e(t).height() / 100 * s.touchSensitivity && (F > U ? B.moveSectionDown() : U > F && B.moveSectionUp()) } }

        function O(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType }

        function T(e) {
            var t = e.originalEvent;
            if (O(t)) {
                var n = k(t);
                F = n.y, X = n.x } }

        function P() { D && (MSPointer = Q(), e(n).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, T), e(n).off("touchmove " + MSPointer.move).on("touchmove " + MSPointer.move, E)) }

        function Q() {
            var e;
            return e = t.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" } }

        function k(e) {
            var t = [];
            return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, D && O(e) && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t }
        var B = e.fn.multiscroll;
        s = e.extend({ verticalCentered: !0, scrollingSpeed: 700, easing: "easeInQuart", menu: !1, sectionsColor: [], anchors: [], navigation: !1, navigationPosition: "right", navigationColor: "#000", navigationTooltips: [], loopBottom: !1, loopTop: !1, css3: !1, paddingTop: 0, paddingBottom: 0, fixedElements: null, normalScrollElements: null, keyboardScrolling: !0, touchSensitivity: 5, sectionSelector: ".ms-section", leftSelector: ".ms-left", rightSelector: ".ms-right", afterLoad: null, onLeave: null, afterRender: null, afterResize: null }, s);
        var L = 600,
            D = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints; ".ms-right" !== s.rightSelector && e(s.rightSelector).addClass("ms-right"), ".ms-left" !== s.leftSelector && e(s.leftSelector).addClass("ms-left");
        var j, q = e(".ms-left").find(".ms-section").length,
            z = !1,
            R = e(t).height();
        d(), P(), s.css3 && (s.css3 = x()), e("html, body").css({ overflow: "hidden", height: "100%" }), ".ms-section" !== s.sectionSelector && e(s.sectionSelector).each(function() { e(this).addClass("ms-section") }), s.navigation && (e("body").append('<div id="multiscroll-nav"><ul></ul></div>'), j = e("#multiscroll-nav"), j.css("color", s.navigationColor), j.addClass(s.navigationPosition)), e(".ms-right, .ms-left").css({ width: "50%", position: "absolute", height: "100%", "-ms-touch-action": "none" }), e(".ms-right").css({ right: "1px", top: "0", "-ms-touch-action": "none", "touch-action": "none" }), e(".ms-left").css({ left: "0", top: "0", "-ms-touch-action": "none", "touch-action": "none" }), e(".ms-left .ms-section, .ms-right .ms-section").each(function() {
            var t = e(this).index();
            if ((s.paddingTop || s.paddingBottom) && e(this).css("padding", s.paddingTop + " 0 " + s.paddingBottom + " 0"), "undefined" != typeof s.sectionsColor[t] && e(this).css("background-color", s.sectionsColor[t]), "undefined" != typeof s.anchors[t] && e(this).attr("data-anchor", s.anchors[t]), s.verticalCentered && b(e(this)), e(this).closest(".ms-left").length && s.navigation) {
                var n = "";
                s.anchors.length && (n = s.anchors[t]);
                var o = s.navigationTooltips[t]; "undefined" == typeof o && (o = ""), s.navigation && j.find("ul").append('<li data-tooltip="' + o + '"><a href="#' + n + '"><span></span></a></li>') } }), e(".ms-right").html(e(".ms-right").find(".ms-section").get().reverse()), e(".ms-left .ms-section, .ms-right .ms-section").each(function() {
            var t = e(this).index();
            e(this).css({ height: "100%" }), !t && s.navigation && j.find("li").eq(t).find("a").addClass("active") }).promise().done(function() { e(".ms-left .ms-section.active").length || (e(".ms-right").find(".ms-section").last().addClass("active"), e(".ms-left").find(".ms-section").first().addClass("active")), s.navigation && j.css("margin-top", "-" + j.height() / 2 + "px"), e.isFunction(s.afterRender) && s.afterRender.call(this), u(), w(), e(t).on("load", function() { I() }) }), e(t).on("hashchange", a), e(n).keydown(r);
        var Y;
        e(n).mousedown(function(e) {
            return 1 == e.button ? (e.preventDefault(), !1) : void 0 }), e(n).on("click", "#multiscroll-nav a", function(t) { t.preventDefault();
            var n = e(this).parent().index();
            f(e(".ms-left .ms-section").eq(n)) }), e(n).on({ mouseenter: function() {
                var t = e(this).data("tooltip");
                e('<div class="multiscroll-tooltip ' + s.navigationPosition + '">' + t + "</div>").hide().appendTo(e(this)).fadeIn(200) }, mouseleave: function() { e(this).find(".multiscroll-tooltip").fadeOut(200, function() { e(this).remove() }) } }, "#multiscroll-nav li"), s.normalScrollElements && (e(n).on("mouseenter", s.normalScrollElements, function() { B.setMouseWheelScrolling(!1) }), e(n).on("mouseleave", s.normalScrollElements, function() { B.setMouseWheelScrolling(!0) })), e(t).on("resize", l), B.moveSectionUp = function() {
            var t = e(".ms-left .ms-section.active").prev(".ms-section");!t.length && s.loopTop && (t = e(".ms-left .ms-section").last()), t.length && f(t) }, B.moveSectionDown = function() {
            var t = e(".ms-left .ms-section.active").next(".ms-section");!t.length && s.loopBottom && (t = e(".ms-left .ms-section").first()), t.length && f(t) }, B.moveTo = function(t) {
            var n = "";
            n = isNaN(t) ? e('.ms-left [data-anchor="' + t + '"]') : e(".ms-left .ms-section").eq(t - 1), f(n) }, B.setKeyboardScrolling = function(e) { s.keyboardScrolling = e }, B.setMouseWheelScrolling = function(e) { e ? d() : m() }, B.setScrollingSpeed = function(e) { s.scrollingSpeed = e };
        var F = 0,
            X = 0,
            U = 0,
            W = 0;
        B.destroy = function() { B.setKeyboardScrolling(!1), B.setMouseWheelScrolling(!1), e(t).off("hashchange", a).off("resize", l), e(n).off("mouseenter", "#multiscroll-nav li").off("mouseleave", "#multiscroll-nav li").off("click", "#multiscroll-nav a") }, B.build = function() { B.setKeyboardScrolling(!0), B.setMouseWheelScrolling(!0), e(t).on("hashchange", a).on("resize", l), e(n).on("mouseenter", "#multiscroll-nav li").on("mouseleave", "#multiscroll-nav li").on("click", "#multiscroll-nav a") } } }(jQuery, window, document, Math);
