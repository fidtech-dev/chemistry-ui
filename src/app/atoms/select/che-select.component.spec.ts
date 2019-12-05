import {async, ComponentFixture, flush, TestBed, tick} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {Component, Provider, Type} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CheSelectComponent} from './che-select.component';
import * as $ from 'jquery';
import {NgSelectModule} from '@ng-select/ng-select';

describe('che-select Component', () => {

    let component: any;
    let fixture: ComponentFixture<any>;

    beforeEach(() => {
        // Arrange
        fixture = createComponent(CheSelectF1Component);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    // test 1
    it('Should have background color transparent', () => {
        // Act
        let input = fixture.debugElement.query(By.css('input'))!;
        // Assert
        let style = window.getComputedStyle(input.nativeElement, null);
        // Assert
        expect(style.getPropertyValue('background-color')).toEqual('rgba(0, 0, 0, 0)');
    });

    // test 2
    it('the drop-down menu should appear when clicking the select ', () => {
        // Arrange
        let select = fixture.debugElement.query(By.css('input'))!;

        // Act
        select.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        // Arrange
        let dropdown = fixture.debugElement.query(By.css('ng-dropdown-panel'))!;

        // Assert
        expect(dropdown).toBeDefined('Should exist a dropdown');

    });


    it('Clicking on the "X" will remove the values.', () => {
        // Arrange
        let select = fixture.debugElement.query(By.css('input'))!;


        // Act
        select.nativeElement.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        // Arrange
        let dropdown = fixture.debugElement.query(By.css('ng-dropdown-panel'))!;
        // Assert
        expect(dropdown).toBeDefined('Should exist a dropdown');
        // Act
        $('.ng-option').trigger('click');
        fixture.detectChanges();

        // Arrange
        let hasValueBefore = fixture.debugElement.query(By.css('.ng-has-value'))!;
        let equis = fixture.debugElement.query(By.css('.ng-clear'))!;

        // Assert
        expect(hasValueBefore).toBeDefined('Should exist a element with the class ".ng-has-value"');
        // Act
        $('span').trigger('click');
        fixture.detectChanges();
        // Arrange
        let hasValueAfter = fixture.debugElement.query(By.css('.ng-has-value'))!;
        // Assert
        expect(hasValueAfter).toBeNull('Should exist a element with the class ".ng-has-value"');
    });


    describe('If the textarea is disabled', () => {
        beforeEach(async(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheSelectF3Component);
            fixture.detectChanges();
        }));
        // test 15
        it('Should not show as a disabled select', () => {
            let select = fixture.debugElement.query(By.css('che-select'))!;
            // Assert
            expect(select.nativeElement.getAttribute('disabled')).toBeTruthy('should be a select with the attribute disabled in true');
        });

        // test 16
        it('Should not to allow to make focus in select', () => { // NO pude testear focus
            // Arrange
            let select = fixture.debugElement.query(By.css('input'))!;

            // // Act
            select.nativeElement.dispatchEvent(new Event('focus'));
            fixture.detectChanges();

            // Assert
            expect(select.nativeElement.classList.contains('ng-select-focused')).toBeFalsy('Should not to have the class ng-select-focused');


        });
    });

    describe('If the select is readOnly', () => {
        beforeEach(async(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheSelectF4Component);
            fixture.detectChanges();
        }));
        // test 17
        it('Should not show as a readOnly select', () => {
            // Arrange
            let select = fixture.debugElement.query(By.css('che-select'))!;

            // Assert
            expect(select.nativeElement.getAttribute('readonly')).toBeTruthy('should be a select with the attribute readonly in true');
        });

        // test 18
        it('Should not to allow to make focus', () => {
            // Arrange
            let select = fixture.debugElement.query(By.css('input'))!;
            // Act
            select.triggerEventHandler('focus', null);
            fixture.detectChanges();

            // Assert
            expect(select.nativeElement.classList.contains('ng-select-focused')).toBeFalsy('Should have the class che-focus a');

        });
    });


    describe('If the select is  simple value', () => {

        // test 1
        it('Should have only a one value', () => {
            // Arrange
            let select = fixture.debugElement.query(By.css('input'))!;

            // Act
            select.nativeElement.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            // Arrange
            let dropdown = fixture.debugElement.query(By.css('ng-dropdown-panel'))!;
            // Assert
            expect(dropdown).toBeDefined('Should exist a dropdown');
            // Arrange
            let options = fixture.debugElement.queryAll(By.css('.ng-option'))!;
            // Act
            options[0].nativeElement.dispatchEvent(new Event('click'));
            fixture.detectChanges();
            // Arrange
            let values = fixture.debugElement.queryAll(By.css('.ng-value'))!;
            // Act
            options[1].nativeElement.dispatchEvent(new Event('click'));
            fixture.detectChanges();
            expect(values.length).toEqual(1);

        });


    });

    describe('If the select is multiple value', () => {
        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheSelectF2Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        // test 1
        it('Should have one or more values', () => {
            // Arrange
            let select = fixture.debugElement.query(By.css('input'))!;

            // Act
            select.nativeElement.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            // Arrange
            let dropdown = fixture.debugElement.query(By.css('ng-dropdown-panel'))!;
            // Assert
            expect(dropdown).toBeDefined('Should exist a dropdown');

            // Arrange
            let options = fixture.debugElement.queryAll(By.css('.ng-option'))!;
            // Act
            options[0].nativeElement.dispatchEvent(new Event('click'));
            options[1].nativeElement.dispatchEvent(new Event('click'));
            fixture.detectChanges();
            // Arrange
            let values = fixture.debugElement.queryAll(By.css('.ng-value'))!;
            // Assert
            expect(values.length).toEqual(2);
        });


    });

    describe('If the design the select is borderless', () => {
        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheSelectF3Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('Should have the desing borderless', () => {
            // Arrange
            const select = fixture.debugElement.query(By.css('che-select'))!;

            // assert
            expect(select.nativeElement.getAttribute('desing')).toEqual('borderless');

        });
        describe('If the select has a color', () => {
            // test 7
            it('Should be have the color in the select underline when is focused', () => {
                // Arrange
                const select = fixture.debugElement.query(By.css('ng-select'))!;
                const inputSelect = fixture.debugElement.query(By.css('input'))!;
                // Act
                inputSelect.triggerEventHandler('focus', null);
                fixture.detectChanges();
                // assert
                expect(select.nativeElement.classList.contains('ng-select-focused')).toBeTruthy('Should have the class ng-select-focused');

                // assert
                expect(select.nativeElement.classList.contains('che-bg-warning')).toBeTruthy('Should have the class che-bg-primary');

            });
        });

        describe('If the select has not a color', () => {
            beforeEach(() => {
                // Arrange
                fixture.destroy();
                TestBed.resetTestingModule();
                fixture = createComponent(CheSelectF2Component);
                component = fixture.componentInstance;
                fixture.detectChanges();
            });
            // test 7
            it('Should have the color primary by default', () => {
                // Arrange
                const select = fixture.debugElement.query(By.css('ng-select'))!;
                const inputSelect = fixture.debugElement.query(By.css('input'))!;
                // Act
                inputSelect.triggerEventHandler('focus', null);
                fixture.detectChanges();
                // assert
                expect(select.nativeElement.classList.contains('ng-select-focused')).toBeTruthy('Should have the class ng-select-focused');

                // assert
                expect(select.nativeElement.classList.contains('che-bg-primary')).toBeTruthy('Should have the class che-bg-primary');

            });
        });
        describe('If the select is as required', () => {
            beforeEach(async(() => {
                // Arrange
                fixture.destroy();
                TestBed.resetTestingModule();
                fixture = createComponent(CheSelectF1Component);
                fixture.detectChanges();
            }));
            // test 11
            it('Should to be not invalid to make the first click', () => {
                // Arrange
                let select = fixture.debugElement.query(By.css('ng-select'))!;

                // Act
                expect(select.nativeElement.classList.contains('ng-touched'))
                    .toBe(false, 'should to be as untouched');

                select.triggerEventHandler('click', null);
                fixture.detectChanges();

                // Assert
                expect(select.nativeElement.classList.contains('ng-touched'))
                    .toBe(false, 'should have not the class che-danger');

            });
            // test 12
            it('Should be invalid when not setting a value', () => {
                // Arrange
                let select = fixture.debugElement.query(By.css('ng-select'))!;
                let inputSelect = fixture.debugElement.query(By.css('input'))!;
                // Act
                expect(select.nativeElement.classList.contains('ng-touched'))
                    .toBe(false, 'should be as untouched');

                inputSelect.triggerEventHandler('focus', null);
                fixture.detectChanges();

                // Assert
                expect(select.nativeElement.classList.contains('ng-touched'))
                    .toBe(false, 'should have not the class ng-touched');
                // Act
                // divGroup.triggerEventHandler('click', null);
                inputSelect.triggerEventHandler('blur', null);
                fixture.detectChanges();

                // Assert
                expect(select.nativeElement.classList.contains('ng-invalid'))
                    .toBe(true, 'should have the class ng-invalid');
                expect(select.nativeElement.classList.contains('ng-touched'))
                    .toBe(true, 'should have the class ng-touched');
            });

            // test 13
            it('Should  be valid when setting a value', () => {
                // Arrange
                let select = fixture.debugElement.query(By.css('ng-select'))!;
                let inputSelect = fixture.debugElement.query(By.css('input'))!;
                // Act
                expect(select.nativeElement.classList.contains('ng-touched'))
                    .toBe(false, 'should be as untouched');

                inputSelect.nativeElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();
                // Arrange
                let options = fixture.debugElement.queryAll(By.css('.ng-option'))!;
                // Act
                options[0].nativeElement.dispatchEvent(new Event('click'));
                fixture.detectChanges();

                // Act
                // divGroup.triggerEventHandler('click', null);
                inputSelect.triggerEventHandler('blur', null);
                fixture.detectChanges();

                // Assert
                expect(select.nativeElement.classList.contains('ng-valid'))
                    .toBe(true, 'should have not the class che-danger');


            });


        });
        describe('If the select is not required', () => {
            beforeEach(async(() => {
                // Arrange
                fixture.destroy();
                TestBed.resetTestingModule();
                fixture = createComponent(CheSelectF2Component);
                fixture.detectChanges();
            }));

            it('Should  be not invalid to make click or if have a value', () => {
                // Arrange
                let select = fixture.debugElement.query(By.css('input'))!;

                select.triggerEventHandler('focus', null);
                fixture.detectChanges();

                // Assert
                expect(select.nativeElement.classList.contains('ng-invalid'))
                    .toBe(false, 'should have not the class che-danger');


                select.triggerEventHandler('blur', null);
                fixture.detectChanges();

                // Assert
                expect(select.nativeElement.classList.contains('ng-invalid'))
                    .toBe(false, 'should have not the class che-danger');


            });
        });
    });

    describe('If the design the select is border', () => {
        beforeEach(() => {
            // Arrange
            fixture.destroy();
            TestBed.resetTestingModule();
            fixture = createComponent(CheSelectF5Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });
        it('Should have the desing borderless', () => {
            // Arrange
            const select = fixture.debugElement.query(By.css('che-select'))!;

            // assert
            expect(select.nativeElement.getAttribute('desing')).toEqual('border');

        });


        describe('If the textarea has a color', () => {
            // test 18
            it('should not reflect changes', () => {
                // Arrange
                let select = fixture.debugElement.query(By.css('ng-select'))!;

                let numberOfClass = select.nativeElement.classList.length;

                // Act
                select.triggerEventHandler('focus', null);
                fixture.detectChanges();

                expect(numberOfClass).toBe(select.nativeElement.classList.length, 'should not to change the number of classes');

            });

        });


        describe('If the select has a label', () => {
            // test 19
            it('should be located above of the textarea', () => {
                // Arrange
                let label = fixture.debugElement.query(By.css('label'))!;
                // Act
                // Assert
                expect(label.nativeElement.classList.contains('label-input-border')).toBeTruthy('Should to have the class label-input-border');
            });

            // test 20
            it('Should have the label seted', () => {
                // Arrange
                let label = fixture.debugElement.query(By.css('label'))!;
                // Act
                fixture.componentInstance.label = 'This label';
                fixture.detectChanges();
                // Assert
                expect(label.nativeElement.textContent).toBe('This label', 'Should to be "This label"');
            });

            describe('If textarea is as required', () => {
                beforeEach(async(() => {
                    // Arrange
                    fixture.destroy();
                    TestBed.resetTestingModule();
                    fixture = createComponent(CheSelectF6Component);
                    fixture.detectChanges();
                }));
                // test 21
                it('Should be valid to make the first click', () => {
                    const select = fixture.debugElement.query(By.css('ng-select'))!;
                    const inputSelect = fixture.debugElement.query(By.css('input'))!;
                    const label = fixture.debugElement.query(By.css('label'))!;
                    // Act
                    inputSelect.triggerEventHandler('focus', null);
                    fixture.detectChanges();
                    // assert
                    expect(select.nativeElement.classList.contains('ng-select-focused')).toBeTruthy('Should have the class ng-select-focused');
                    expect(label.nativeElement.classList.contains('label-invalid')).toBeFalsy('Should have not the class label-invalid');

                });

                // test 22
                it('Should be invalid when not setting a value', () => {
                    const select = fixture.debugElement.query(By.css('ng-select'))!;
                    const inputSelect = fixture.debugElement.query(By.css('input'))!;
                    const label = fixture.debugElement.query(By.css('label'))!;
                    // Act
                    inputSelect.triggerEventHandler('focus', null);
                    fixture.detectChanges();
                    // assert
                    expect(select.nativeElement.classList.contains('ng-select-focused')).toBeTruthy('Should have the class ng-select-focused');
                    expect(label.nativeElement.classList.contains('label-invalid')).toBeFalsy('Should have not the class label-invalid');
                    // Act
                    inputSelect.triggerEventHandler('blur', null);
                    fixture.detectChanges();
                    expect(select.nativeElement.classList.contains('ng-select-focused')).toBeFalsy('Should have not the class ng-select-focused');
                    expect(label.nativeElement.classList.contains('label-invalid')).toBeTruthy('Should have the class label-invalid');

                });

                // test 23
                it('Should  be valid when setting a value', () => {
                    const select = fixture.debugElement.query(By.css('ng-select'))!;
                    const inputSelect = fixture.debugElement.query(By.css('input'))!;

                    const label = fixture.debugElement.query(By.css('label'))!;
                    inputSelect.nativeElement.dispatchEvent(new Event('input'));
                    fixture.detectChanges();

                    // Act
                    inputSelect.triggerEventHandler('focus', null);
                    fixture.detectChanges();

                    // Arrange
                    let options = fixture.debugElement.queryAll(By.css('.ng-option'))!;
                    // Act
                    options[0].nativeElement.dispatchEvent(new Event('click'));
                    fixture.detectChanges();
                    // assert
                    expect(select.nativeElement.classList.contains('ng-select-focused')).toBeTruthy('Should have the class ng-select-focused');
                    expect(label.nativeElement.classList.contains('label-invalid')).toBeFalsy('Should have not the class label-invalid');
                    // Act
                    inputSelect.triggerEventHandler('blur', null);
                    fixture.detectChanges();
                    expect(select.nativeElement.classList.contains('ng-select-focused')).toBeFalsy('Should have not the class ng-select-focused');
                    expect(label.nativeElement.classList.contains('label-invalid')).toBeFalsy('Should have not the class label-invalid');


                });

            });

            describe('If the select is as not required', () => {
                beforeEach(async(() => {
                    // Arrange
                    fixture.destroy();
                    TestBed.resetTestingModule();
                    fixture = createComponent(CheSelectF7Component);
                    fixture.detectChanges();
                }));
                // test 24
                it('Should to be valid when not setting a value', () => {
                    const select = fixture.debugElement.query(By.css('ng-select'))!;
                    const inputSelect = fixture.debugElement.query(By.css('input'))!;
                    const label = fixture.debugElement.query(By.css('label'))!;
                    // Act
                    inputSelect.triggerEventHandler('focus', null);
                    fixture.detectChanges();
                    // assert
                    expect(select.nativeElement.classList.contains('ng-select-focused')).toBeTruthy('Should have the class ng-select-focused');
                    expect(label.nativeElement.classList.contains('label-invalid')).toBeFalsy('Should have not the class label-invalid');
                    // Act
                    inputSelect.triggerEventHandler('blur', null);
                    fixture.detectChanges();
                    // assert
                    expect(select.nativeElement.classList.contains('ng-select-focused')).toBeFalsy('Should have the class ng-select-focused');
                    expect(label.nativeElement.classList.contains('label-invalid')).toBeFalsy('Should have not the class label-invalid');

                });
            });


        });
        describe('If it has a placeholder', () => {
            beforeEach(async(() => {
                // Arrange
                fixture.destroy();
                TestBed.resetTestingModule();
                fixture = createComponent(CheSelectF7Component);
                fixture.detectChanges();
            }));
            // test 25
            it('Should  have the placeholder', () => {
                // Arrange
                let placeholder = fixture.debugElement.query(By.css('.ng-placeholder'))!;
                // Act
                fixture.componentInstance.placeholder = 'This placeholder';
                fixture.detectChanges();
                // Assert
                expect(placeholder.nativeElement.innerHTML)
                    .toBe('This placeholder', 'should  have the value "This placeholder"');
            });
        });
    });
});


function createComponent<T>(component: Type<T>,
                            providers: Provider[] = [],
                            imports: any[] = [],
                            declarations: any[] = []): ComponentFixture<T> {
    TestBed.configureTestingModule({
        imports: [
            NgSelectModule,
            FormsModule,
            ...imports
        ],
        declarations: [CheSelectComponent, component, ...declarations],
        providers,
    }).compileComponents();

    return TestBed.createComponent<T>(component);
}


// fixture 1
@Component({
    template: `
        <che-select class="w-100" class="w-100" desing="borderless" required="true" label="label" [(ngModel)]="value" [items]="items"
                    [searchable]="true" [multiple]="false"></che-select>`
})
class CheSelectF1Component {
    value;
    items = [{
        age: 23,
        company: 'ZOLAR',
        email: 'karynwright@zolar.com',
        gender: 'female',
        id: '5a15b13c36e7a7f00cf0d7cb',
        index: 2,
        isActive: true,
        name: 'Karyn Wright',
        phone: '+1 (851) 583-2547',
        picture: 'http://placehold.it/32x32',
    }, {
        age: 35,
        company: 'EXTRAWEAR',
        email: 'rochelleestes@extrawear.com',
        gender: 'female',
        id: '5a15b13c2340978ec3d2c0ea',
        index: 3,
        name: 'Rochelle Estes',
        phone: '+1 (849) 408-2029',
        picture: 'http://placehold.it/32x32'
    }];
}


// fixture 2
@Component({
    template: `
        <che-select class="w-100" class="w-100" desing="borderless" label="label" [(ngModel)]="value" [items]="items"
                    [searchable]="true" [multiple]="true"></che-select>`
})
class CheSelectF2Component {
    value;
    items = [{
        age: 23,
        company: 'ZOLAR',
        email: 'karynwright@zolar.com',
        gender: 'female',
        id: '5a15b13c36e7a7f00cf0d7cb',
        index: 2,
        isActive: true,
        name: 'Karyn Wright',
        phone: '+1 (851) 583-2547',
        picture: 'http://placehold.it/32x32',
    }, {
        age: 35,
        company: 'EXTRAWEAR',
        email: 'rochelleestes@extrawear.com',
        gender: 'female',
        id: '5a15b13c2340978ec3d2c0ea',
        index: 3,
        name: 'Rochelle Estes',
        phone: '+1 (849) 408-2029',
        picture: 'http://placehold.it/32x32'
    }];
}


// fixture 3
@Component({
    template: `
        <che-select class="w-100" desing="borderless" color="warning" disabled="true" label="label" [(ngModel)]="value" [items]="items"
                    [searchable]="true" [multiple]="true"></che-select>`
})
class CheSelectF3Component {
    value;
    items = [{
        age: 23,
        company: 'ZOLAR',
        email: 'karynwright@zolar.com',
        gender: 'female',
        id: '5a15b13c36e7a7f00cf0d7cb',
        index: 2,
        isActive: true,
        name: 'Karyn Wright',
        phone: '+1 (851) 583-2547',
        picture: 'http://placehold.it/32x32',
    }, {
        age: 35,
        company: 'EXTRAWEAR',
        email: 'rochelleestes@extrawear.com',
        gender: 'female',
        id: '5a15b13c2340978ec3d2c0ea',
        index: 3,
        name: 'Rochelle Estes',
        phone: '+1 (849) 408-2029',
        picture: 'http://placehold.it/32x32'
    }];
}


// fixture 4
@Component({
    template: `
        <che-select class="w-100" class="w-100" desing="borderless" readonly="true" label="label" [(ngModel)]="value" [items]="items"
                    [searchable]="true" [multiple]="true"></che-select>`
})
class CheSelectF4Component {
    value;
    items = [{
        age: 23,
        company: 'ZOLAR',
        email: 'karynwright@zolar.com',
        gender: 'female',
        id: '5a15b13c36e7a7f00cf0d7cb',
        index: 2,
        isActive: true,
        name: 'Karyn Wright',
        phone: '+1 (851) 583-2547',
        picture: 'http://placehold.it/32x32',
    }, {
        age: 35,
        company: 'EXTRAWEAR',
        email: 'rochelleestes@extrawear.com',
        gender: 'female',
        id: '5a15b13c2340978ec3d2c0ea',
        index: 3,
        name: 'Rochelle Estes',
        phone: '+1 (849) 408-2029',
        picture: 'http://placehold.it/32x32'
    }];
}

// fixture 5
@Component({
    template: `
        <che-select class="w-100" class="w-100" desing="border" readonly="true" [label]="label" [(ngModel)]="value" [items]="items"
                    [searchable]="true" [multiple]="true"></che-select>`
})
class CheSelectF5Component {
    value;
    label = 'This label';
    items = [{
        age: 23,
        company: 'ZOLAR',
        email: 'karynwright@zolar.com',
        gender: 'female',
        id: '5a15b13c36e7a7f00cf0d7cb',
        index: 2,
        isActive: true,
        name: 'Karyn Wright',
        phone: '+1 (851) 583-2547',
        picture: 'http://placehold.it/32x32',
    }, {
        age: 35,
        company: 'EXTRAWEAR',
        email: 'rochelleestes@extrawear.com',
        gender: 'female',
        id: '5a15b13c2340978ec3d2c0ea',
        index: 3,
        name: 'Rochelle Estes',
        phone: '+1 (849) 408-2029',
        picture: 'http://placehold.it/32x32'
    }];
}

// fixture 6
@Component({
    template: `
        <che-select class="w-100" class="w-100" desing="border" required="true" [label]="label" [(ngModel)]="value" [items]="items"
                    [searchable]="true" [multiple]="true"></che-select>`
})
class CheSelectF6Component {
    value;
    label = 'This label';
    items = [{
        age: 23,
        company: 'ZOLAR',
        email: 'karynwright@zolar.com',
        gender: 'female',
        id: '5a15b13c36e7a7f00cf0d7cb',
        index: 2,
        isActive: true,
        name: 'Karyn Wright',
        phone: '+1 (851) 583-2547',
        picture: 'http://placehold.it/32x32',
    }, {
        age: 35,
        company: 'EXTRAWEAR',
        email: 'rochelleestes@extrawear.com',
        gender: 'female',
        id: '5a15b13c2340978ec3d2c0ea',
        index: 3,
        name: 'Rochelle Estes',
        phone: '+1 (849) 408-2029',
        picture: 'http://placehold.it/32x32'
    }];
}


// fixture 7
@Component({
    template: `
        <che-select class="w-100" class="w-100" desing="border" [placeholder]="placeholder" [label]="label" [(ngModel)]="value" [items]="items"
                    [searchable]="true" [multiple]="true"></che-select>`
})
class CheSelectF7Component {
    value;
    label = 'This label';
    placeholder = 'This placeholder';
    items = [{
        age: 23,
        company: 'ZOLAR',
        email: 'karynwright@zolar.com',
        gender: 'female',
        id: '5a15b13c36e7a7f00cf0d7cb',
        index: 2,
        isActive: true,
        name: 'Karyn Wright',
        phone: '+1 (851) 583-2547',
        picture: 'http://placehold.it/32x32',
    }, {
        age: 35,
        company: 'EXTRAWEAR',
        email: 'rochelleestes@extrawear.com',
        gender: 'female',
        id: '5a15b13c2340978ec3d2c0ea',
        index: 3,
        name: 'Rochelle Estes',
        phone: '+1 (849) 408-2029',
        picture: 'http://placehold.it/32x32'
    }];
}

