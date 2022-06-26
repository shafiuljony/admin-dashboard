import React from 'react';
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Inject,
    Toolbar,
    Selection,
    Edit,
    Sort,
    Filter
} from "@syncfusion/ej2-react-grids";

import {customersData, customersGrid} from "../data/dummy";
import {Header} from "../components";

const Customers = () => {
    const selectionSettings = { persistSelection: true };
    const toolbarOptions = ['Delete'];
    const editing = { allowDeleting: true, allowEditing: true };

    return(
        <div className="mt-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
            <Header category="Page" title="Customers" />
            <GridComponent
                dataSource={customersData}
                enableHover={false}
                allowPaging
                pageSettings={{ pageCount: 5 }}
                selectionSettings={selectionSettings}
                toolbar={toolbarOptions}
                editSettings={editing}
                allowSorting
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[ Page,Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div>
    )
}

export default Customers;