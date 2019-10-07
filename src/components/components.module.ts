import { NgModule } from '@angular/core';
import { ShrinkingSegmentHeader } from './shrinking-segment-header/shrinking-segment-header';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner';
@NgModule({
	declarations: [ShrinkingSegmentHeader,
    LoadingSpinnerComponent],
	imports: [],
	exports: [ShrinkingSegmentHeader,
    LoadingSpinnerComponent]
})
export class ComponentsModule {}
