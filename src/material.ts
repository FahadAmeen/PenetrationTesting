import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatRippleModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    imports: [MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule],
    exports: [MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule],
})
export class MaterialModule { }
