import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ContentHeaderModule, KitTableModule } from 'cat-kit-ui';
import { TableDataService } from '../../services/table.data.service';

@Component({
    selector: 'app-tables',
    imports: [ContentHeaderModule, KitTableModule],
    templateUrl: './tables.component.html',
    standalone: true
})
export class TablesComponent {
    staticData10Items: any[] = [];
    staticData32Items: any[] = [];
    loadDataEvent = this.loadData.bind(this);
    constructor(private titleService: Title,
        private tableDataService: TableDataService
    ) {
        this.titleService.setTitle('Tables | CatKitUI');
        this.staticData10Items = this.tableDataService.getStaticTableData10Items();
        this.staticData32Items = this.tableDataService.getStaticTableData32Items();
    }

    loadData($event: any){
        return this.tableDataService.remoteLoadingTableData($event.page, $event.pageSize);
    }
}
