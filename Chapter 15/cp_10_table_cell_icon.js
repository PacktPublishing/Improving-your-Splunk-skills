require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/tableview',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc, TableView) {

    var RangeMapIconRenderer = TableView.BaseCellRenderer.extend({
        canRender: function(cell) {
            // Only use the cell renderer for the range field
            return cell.field === 'avg_price';
        },
        render: function($td, cell) {
	    var value = parseFloat(cell.value);
            var icon = 'error';
            var range = 'severe';

            if (value > 1000) {
                icon = "check-circle";
                range = "low";
            }
            else if (value > 200) {
                icon = "alert";
                range = "elevated";
            }

            $td.addClass('icon').html(_.template('<%- value %> <i class="icon-<%-icon%> <%- range %>" title="<%- range %>"></i>', {
                icon: icon,
                range: range,
                value: value.toFixed(2)
            }));
            $td.addClass('numeric');
        }
    });
    mvc.Components.get('cp10_highlight').getVisualization(function(tableView){
        // Register custom cell renderer, the table will re-render automatically
        tableView.addCellRenderer(new RangeMapIconRenderer());
    });
});
