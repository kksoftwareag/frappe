// Copyright (c) 2016, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.query_reports["Addresses And Contacts"] = {
	"filters": [
		{
			"reqd": 1,
			"fieldname":"reference_doctype",
			"label": __("Entity Type"),
			"fieldtype": "Link",
			"options": "DocType",
		},
		{
			"fieldname":"reference_name",
			"label": __("Entity Name"),
			"fieldtype": "Dynamic Link",
			"get_options": function() {
				let reference_doctype = frappe.query_report_filters_by_name.reference_doctype.get_value();
				if(!reference_doctype) {
					frappe.throw(__("Please select Entity Type first"));
				}
				return reference_doctype;
			}
		}
	]
}
