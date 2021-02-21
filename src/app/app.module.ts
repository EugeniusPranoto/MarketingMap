import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { PoiListComponent } from './poi-list/poi-list.component';
import { HomeComponent } from './home/home.component';
import { PoiReportComponent } from './poi-report/poi-report.component';
import { ModalComponent } from './components/confirmation-modal/modal.component';
import { LegendModalComponent } from './components/legend-modal/legend-modal.component';
import { ProcessModalComponent } from './components/process-modal/process-modal.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { FilterTableModalComponent } from './components/filter-table-modal/filter-table-modal.component';
import { ActivateModalComponent } from './components/activate-modal/activate-modal.component';
import { FilterMapModalComponent } from './components/filter-map-modal/filter-map-modal.component';
import { AdvancedSearchModalComponent } from './components/advanced-search-modal/advanced-search-modal.component';
import { UploadGeojsonModalComponent } from './components/upload-geojson-modal/upload-geojson-modal.component';
import { CompleteReportModalComponent } from './components/complete-report-modal/complete-report-modal.component';
import { AddBrandModalComponent } from './components/add-brand-modal/add-brand-modal.component';
import { PoiDetailsInfoComponent } from './components/poi-details-info/poi-details-info.component';
import { PoiDetailMapModalComponent } from './components/poi-detail-map-modal/poi-detail-map-modal.component';
import { ReportModalComponent } from './components/report-modal/report-modal.component';
import { AddPoiModalComponent } from './components/add-poi-modal/add-poi-modal.component';
import { UploadImageModalComponent } from './components/upload-image-modal/upload-image-modal.component';
import { EditPoiModalComponent } from './components/edit-poi-modal/edit-poi-modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarTestComponent } from './navbar-test/navbar-test.component';
import { LocationPoiModalComponent } from './components/location-poi-modal/location-poi-modal.component';
import { GetLocationComponent } from './get-location/get-location.component';
import { DrawMapComponent } from './draw-map/draw-map.component';
import { MapPipComponent } from './map-pip/map-pip.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    PoiListComponent,
    HomeComponent,
    PoiReportComponent,
    ModalComponent,
    LegendModalComponent,
    ProcessModalComponent,
    SuccessModalComponent,
    FilterTableModalComponent,
    ActivateModalComponent,
    FilterMapModalComponent,
    AdvancedSearchModalComponent,
    UploadGeojsonModalComponent,
    CompleteReportModalComponent,
    AddBrandModalComponent,
    PoiDetailsInfoComponent,
    PoiDetailMapModalComponent,
    ReportModalComponent,
    AddPoiModalComponent,
    UploadImageModalComponent,
    EditPoiModalComponent,
    NavbarComponent,
    NavbarTestComponent,
    LocationPoiModalComponent,
    GetLocationComponent,
    DrawMapComponent,
    MapPipComponent,
    HamburgerMenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
