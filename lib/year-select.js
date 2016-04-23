(function($) {

    var YearSelect =  function(el, settings) {
        this.$el = el;
        this.options = $.extend({}, $.fn.yearselect.defaults, settings);
        this.start = this.options.start || this.start;
        this.end = this.options.end || this.end;
        this.step = this.options.step || this.step;
        this.order = this.options.order || this.order;
        this.years = [];
        this.init();
    }

    YearSelect.prototype = {
        constructor: YearSelect,
        init: function() {
            order = this.order.toLowerCase();
            if(order == 'desc') {
                this.start = this.options.end;
                this.end = this.options.start;
            }
            this.destroy();
            this.render(order);
        },
        render: function(order) {
            order = order.toLowerCase();
            if(order == 'asc') {
                this.renderAscending();
            } else if(order == 'desc') {
                this.renderDescending();
            }
        },
        renderAscending: function() {
            for(var i = this.start; i <= this.end; i += this.step) {
                this.years.push(i);
                var el = $('<option>').html(i).val(i);
                this.$el.append(el);
            }
        },
        renderDescending: function() {
            for(var i = this.start; i >= this.end; i -= this.step) {
                this.years.push(i);
                var el = $('<option>').html(i).val(i);
                this.$el.append(el);
            }
        },
        destroy: function() {
            this.years = [];
            this.$el.html('');
        }
    }

    $.fn.yearselect = function(option) {
        return this.each(function() {
            var yearselectel = $(this);
            if(!yearselectel.is('select')) {
                yearselectel = $('<select class="yearselect"></select>');
                $(this).replaceWith(yearselectel);
            }
            new YearSelect(yearselectel, option);
        });
    }

    $.fn.yearselect.defaults = {
        start: 1970,
        end: new Date().getFullYear(),
        step: 1,
        order: 'asc'
    };

}(jQuery));