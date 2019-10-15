import { NgModule } from '@angular/core';
import { ShrinkingSegmentHeader } from './shrinking-segment-header/shrinking-segment-header';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner';
import { ProgressBarComponent } from './progress-bar/progress-bar';

@NgModule({
	declarations: [ShrinkingSegmentHeader,
    LoadingSpinnerComponent,
    ProgressBarComponent],
	imports: [],
	exports: [ShrinkingSegmentHeader,
    LoadingSpinnerComponent,
    ProgressBarComponent]
})
export class ComponentsModule {}
