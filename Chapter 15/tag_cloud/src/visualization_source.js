define([
    'jquery',
    'underscore',
    'api/SplunkVisualizationBase'
], function($, _, SplunkVisualizationBase) {
    return SplunkVisualizationBase.extend({

        initialize: function() {
            SplunkVisualizationBase.prototype.initialize.apply(this, arguments);
            this.$el = $(this.el);
            this.$el.addClass("tagcloud-viz");
        },

        getInitialDataParams: function() {
            return ({
                outputMode: SplunkVisualizationBase.ROW_MAJOR_OUTPUT_MODE,
                count: 200
            });
        },

        updateView: function(data, config) {
            var labelField = config['display.visualizations.custom.operational_intelligence.tag_cloud.labelField'];
            var valueField = config['display.visualizations.custom.operational_intelligence.tag_cloud.valueField'];
            var minFontSize = parseFloat(config['display.visualizations.custom.operational_intelligence.tag_cloud.minFontSize']);
            var maxFontSize = parseFloat(config['display.visualizations.custom.operational_intelligence.tag_cloud.maxFontSize']);

            var el = this.$el.empty().css('line-height', Math.ceil(maxFontSize * 0.55) + 'px');
            var minMagnitude = Infinity, maxMagnitude = -Infinity;
            var fieldNames = _.pluck(data.fields, 'name');
            var labelFieldIdx = fieldNames.indexOf(labelField);
            var valueFieldIdx = fieldNames.indexOf(valueField);
            _(data.rows).chain().map(function(result) {
                var magnitude = parseFloat(result[valueFieldIdx]);
                minMagnitude = magnitude < minMagnitude ? magnitude : minMagnitude;
                maxMagnitude = magnitude > maxMagnitude ? magnitude : maxMagnitude;
                return {
                    label: result[labelFieldIdx],
                    magnitude: magnitude
                };
            }).each(function(result) {
                var size = minFontSize + ((result.magnitude - minMagnitude) / maxMagnitude * (maxFontSize - minFontSize));
                $('<a class="link" href="#" /> ').text(result.label + ' ').css({
                    'font-size': size
                }).appendTo(el).click(function(e) {
                    e.preventDefault();
                    var payload = {
                        action: SplunkVisualizationBase.FIELD_VALUE_DRILLDOWN,
                        data: {}
                    };
                    payload.data[labelField] = $.trim($(e.target).text());
                    this.drilldown(payload);
                }.bind(this));
            }, this);
        }
    });
});
