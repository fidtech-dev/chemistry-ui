import {async, ComponentFixture, TestBed, fakeAsync, tick, flush} from '@angular/core/testing';
import {CheInputComponent} from './che-input.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {Component, inject, Provider, Type} from '@angular/core';
// import {FiuInputModule} from './fiu-input.module';


describe('che-input as a Atomic component', () => {
    let component: any;
    let fixture: ComponentFixture<any>;

    describe('If not contain a type defined or is of type text', () => {

        beforeEach(async(() => {
            // Arrange
            fixture = createComponent(CheInputF1Component);
            component = fixture.componentInstance;
            fixture.detectChanges();
        }));

        // test 1
        it('Should to be of type text', () => {
            // Act
            let input = fixture.debugElement.query(By.css('input'))!;
            // Assert
            expect(input.properties.type).toBe('text');
        });


        describe('If the design is borderless', () => {
            // test2
            it('Should be to have a floating label when input if focused', () => {
                // Act
                let label = fixture.debugElement.query(By.css('label'))!;
                let input = fixture.debugElement.query(By.css('input'))!;

                // Assert
                expect(input.nativeElement.classList.contains('che-input-focus')).toBeFalsy('Should not to have the class che-input-focus');
                expect(label.nativeElement.classList.contains('che-label-floating')).toBeFalsy('Should not to have the class che-label-floating');

                input.triggerEventHandler('focus', null);
                fixture.detectChanges();

                expect(input.nativeElement.classList.contains('che-input-focus')).toBeTruthy('Should to have the class che-input-focus');
                expect(label.nativeElement.classList.contains('che-label-floating')).toBeTruthy('Should to have the class che-label-floating');

            });

            // test 3
            it('Should be to have a floating label when input have a value', () => {
                // Act
                let label = fixture.debugElement.query(By.css('label'))!;
                let input = fixture.debugElement.query(By.css('input'))!;

                // Assert
                input.nativeElement.value = 'something';
                input.nativeElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();

                expect(label.nativeElement.classList.contains('che-label-floating')).toBeTruthy('Should to have the class che-label-floating');

            });

            describe('If this have a color', () => {
                // test 4
                it('Should be to have the color in the input underline', () => {
                    // Arrange

                    let span = fixture.debugElement.query(By.css('span.bar'))!;
                    let input = fixture.debugElement.query(By.css('input'))!;

                    // Act
                    expect(span.nativeElement.classList.contains('bg-success')).toBeFalsy('Should not to have the class bg-success');
                    input.triggerEventHandler('focus', null);
                    fixture.detectChanges();

                    // Assert
                    expect(span.nativeElement.classList.contains('bg-success')).toBeTruthy('Should to have the class bg-success');
                });

                // test 5
                it('Should to have the color when clicking on the input', () => {
                    // Arrange

                    let span = fixture.debugElement.query(By.css('span.bar'))!;
                    let input = fixture.debugElement.query(By.css('input'))!;

                    // Act
                    expect(span.nativeElement.classList.contains('bg-success')).toBeFalsy('Should not to have the class bg-success');
                    input.triggerEventHandler('click', null);
                    fixture.detectChanges();
                    // Assert
                    expect(span.nativeElement.classList.contains('bg-success')).toBeTruthy('Should to have the class bg-success');

                    // Act
                    input.triggerEventHandler('blur', null);
                    fixture.detectChanges();

                    // Assert
                    expect(span.nativeElement.classList.contains('bg-success')).toBeFalsy('Should not to have the class bg-success');


                });
            });


            describe('If this not have a color', () => { // Fixture 13
                beforeEach(async(() => {
                    // Arrange
                    fixture.destroy();
                    TestBed.resetTestingModule();
                    fixture = createComponent(CheInputF13Component);
                    component = fixture.componentInstance;
                    fixture.detectChanges();
                }));
                // test 6
                it('Should not to have the color primary by default', () => {
                    // Arrange
                    let span = fixture.debugElement.query(By.css('span.bar'))!;
                    let input = fixture.debugElement.query(By.css('input'))!;
                    expect(fixture.componentInstance.color).toBeUndefined('Should not to have the class bg-primnary');

                    // Act
                    expect(span.nativeElement.classList.contains('bg-primary')).toBeFalsy('Should not to have the class bg-primnary');
                    input.triggerEventHandler('focus', null);
                    fixture.detectChanges();

                    // Assert
                    expect(span.nativeElement.classList.contains('bg-primary')).toBeTruthy('Should to have the class bg-primary');
                });
            });


            describe('If this have a label', () => {
                // test 7
                it('Should to have the label like a placeholder over the input', () => {
                    // Arrange

                    let label = fixture.debugElement.query(By.css('label'))!;

                    // Act
                    fixture.componentInstance.label = 'This label';
                    fixture.detectChanges();

                    // Assert
                    expect(label.nativeElement.classList.contains('che-label-floating')).toBeFalsy('Should not to have the class che-label-floating');
                    expect(label.nativeElement.textContent).toBe('This label', 'Should to be "This label"');

                });

                // test 8
                it('Should to float and be placed above on the input', () => {
                    // Arrange
                    let label = fixture.debugElement.query(By.css('label'))!;
                    let input = fixture.debugElement.query(By.css('input'))!;

                    // Act
                    input.triggerEventHandler('click', null);
                    fixture.detectChanges();
                    // Assert
                    expect(label.nativeElement.classList.contains('che-label-floating')).toBeTruthy('Should not to have the class che-label-floating');
                });
            });

            describe('If it is as required', () => {
                beforeEach(async(() => {
                    // Arrange
                    fixture.destroy();
                    TestBed.resetTestingModule();
                    fixture = createComponent(CheInputF4Component);
                    fixture.detectChanges();
                }));
                // test 9
                it('Should to be not invalid to make the first click', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    let divGroup = fixture.debugElement.query(By.css('.group'))!;

                    // Act
                    expect(input.nativeElement.classList.contains('ng-touched'))
                      .toBe(false, 'should to be as untouched');

                    input.triggerEventHandler('click', null);
                    fixture.detectChanges();

                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger'))
                      .toBe(false, 'should not to have the class has-danger');

                });

                // test 10
                it('Should to be invalid when not setting a value', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    let divGroup = fixture.debugElement.query(By.css('.group'))!;

                    // Act
                    expect(input.nativeElement.classList.contains('ng-touched'))
                        .toBe(false, 'should to be as untouched');

                    // input.nativeElement.dispatchEvent(new Event('click'));
                    input.triggerEventHandler('focus', null);
                    fixture.detectChanges();

                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger'))
                        .toBe(false, 'should not to have the class has-danger');

                    // Act
                    // input.nativeElement.dispatchEvent(new Event('blur'));
                    input.triggerEventHandler('blur', null); // No esta funcionando
                    fixture.detectChanges();

                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger'))
                        .toBe(true, 'should to have the class has-danger');
                });

                // test 11
                it('Should to be valid when setting a value', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    let divGroup = fixture.debugElement.query(By.css('.group'))!;

                    // Act
                    expect(input.nativeElement.classList.contains('ng-touched'))
                        .toBe(false, 'should to be as untouched');

                    input.nativeElement.value = 'a value';
                    input.nativeElement.dispatchEvent(new Event('input'));
                    fixture.detectChanges();

                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger'))
                        .toBe(false, 'should not to have the class has-danger');

                    // Act
                    input.triggerEventHandler('blur', null);
                    fixture.detectChanges();

                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger'))
                        .toBe(false, 'should not to have the class has-danger');

                });


            });

            describe('If it is as not required', () => {

                // test 12
                it('Should to be valid when not setting a value', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    let divGroup = fixture.debugElement.query(By.css('.group'))!;

                    // Act
                    input.triggerEventHandler('focus', null);
                    fixture.detectChanges();

                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger'))
                        .toBe(false, 'should not to have the class has-danger');

                    // Act
                    input.triggerEventHandler('blur', null);
                    fixture.detectChanges();

                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger'))
                        .toBe(false, 'should to have the class has-danger');
                });

            });

            describe('If it has a placeholder', () => {
                beforeEach(async(() => {
                    // Arrange
                    fixture.destroy();
                    TestBed.resetTestingModule();
                    fixture = createComponent(CheInputF5Component);
                    fixture.detectChanges();
                }));
                // test 13
                it('Should not show the placeholder value', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    // Act

                    // Assert
                    expect(input.nativeElement.placeholder)
                        .toBe('', 'should not to have the placeholder');
                });
            });

            describe('If it is disabled', () => {
                beforeEach(async(() => {
                    // Arrange
                    fixture.destroy();
                    TestBed.resetTestingModule();
                    fixture = createComponent(CheInputF6Component);
                    fixture.detectChanges();
                }));
                // test 14
                it('Should not show as a disabled input', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    // Act
                    // Assert
                    expect(input.nativeElement.disabled).toBeTruthy('should to be a disabled input');
                });

                // test 15
                it('Should not to allow to make input or click', () => { // NO pude testear focus
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;

                    // // Act
                    input.nativeElement.dispatchEvent(new Event('input'));
                    fixture.detectChanges();

                    // Assert
                    expect(input.nativeElement.classList.contains('che-input-focus')).toBeFalsy('Should not to have the class che-input-focus');

                    // Act
                    input.nativeElement.dispatchEvent(new Event('input'));
                    fixture.detectChanges();

                    //Assert
                    expect(input.nativeElement.classList.contains('che-input-focus')).toBeFalsy('Should not to have the class che-input-focus');
                });
            });


            describe('If it is readOnly', () => {
                beforeEach(async(() => {
                    // Arrange
                    fixture.destroy();
                    TestBed.resetTestingModule();
                    fixture = createComponent(CheInputF7Component);
                    fixture.detectChanges();
                }));
                // test 16
                it('Should not show as a readOnly input', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    // Act
                    // Assert
                    expect(input.nativeElement.readOnly).toBeTruthy('should to be a disabled input');
                });

                // test 17
                it('Should not to allow to make focus or click', () => {// no funciona
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    // Act
                    input.triggerEventHandler('click', null);
                    fixture.detectChanges();

                    // Assert
                    expect(input.nativeElement.classList.contains('che-input-focus')).toBeTruthy('Should to have the class che-input-focus a');

                    input.triggerEventHandler('blur', null);
                    fixture.detectChanges();

                    // Assert
                    expect(input.nativeElement.classList.contains('che-input-focus')).toBeFalsy('Should not to have the class che-input-focus a');

                    // Act
                    input.triggerEventHandler('focus', null);
                    fixture.detectChanges();

                    //Assert
                    expect(input.nativeElement.classList.contains('che-input-focus')).toBeTruthy('Should to have the class che-input-focus');
                });
            });

        });


        describe('If the design is by default or border', () => {
            beforeEach(async(() => {
                // Arrange
                fixture.destroy();
                TestBed.resetTestingModule();
                fixture = createComponent(CheInputF8Component);
                component = fixture.componentInstance;
                fixture.detectChanges();
            }));
            // test 18
            it('Should to be design border', () => {
                // Arrange
                let input = fixture.debugElement.query(By.css('input'))!;
                // Act

                // Assert
                expect(input.nativeElement.design).toBeUndefined('Should not to have a design');
            });

            // test 19
            it('Should to have a value to set a value', () => {
                // Arrange
                let input = fixture.debugElement.query(By.css('input'))!;

                // Act
                input.nativeElement.value = 'something';
                input.nativeElement.dispatchEvent(new Event('input'));
                fixture.detectChanges();

                // Assert
                expect(fixture.componentInstance.value).toBe('something', 'Should not to have a design');
            });


            describe('If this have a color', () => {
                // test 21
                it('should not reflect changes', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;

                    let numberOfClass = input.nativeElement.classList.length;

                    // Act
                    input.triggerEventHandler('focus', null);
                    fixture.detectChanges();

                    expect(numberOfClass).toBe(input.nativeElement.classList.length, 'should not to change the number of classes');

                });

            });

            describe('If this has a label', () => {
                // test 22
                it('should to be located above of the input', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    // Act
                    // Assert
                    expect(input.nativeElement.classList.contains('form-control')).toBeTruthy('Should to have the class form-control');
                });

                // test 23
                it('Should to have the label seted', () => {
                    // Arrange
                    let label = fixture.debugElement.query(By.css('label'))!;
                    // Act
                    fixture.componentInstance.label = 'This label';
                    fixture.detectChanges();
                    // Assert
                    expect(label.nativeElement.textContent).toBe('This label', 'Should to be "This label"');
                });

            });

            describe('If it is as required', () => {
                beforeEach(async(() => {
                    // Arrange
                    fixture.destroy();
                    TestBed.resetTestingModule();
                    fixture = createComponent(CheInputF9Component);
                    fixture.detectChanges();
                }));
                // test 24
                it('Should to be valid to make the first click', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    let divGroup = fixture.debugElement.query(By.css('.form-group'))!;
                    // Act
                    expect(input.nativeElement.classList.contains('ng-touched'))
                        .toBe(false, 'should to be as untouched');
                    input.triggerEventHandler('click', null);
                    fixture.detectChanges();
                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger-wBorder'))
                        .toBe(false, 'should not to have the class has-danger-wBorder');

                });

                // test 25
                it('Should to be invalid when not setting a value', () => {
                    console.log('test 25');
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    let divGroup = fixture.debugElement.query(By.css('.form-group'))!;
                    // Act
                    expect(input.nativeElement.classList.contains('ng-touched'))
                        .toBe(false, 'should to be as untouched');
                    input.triggerEventHandler('click', null);
                    fixture.detectChanges();
                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger-wBorder'))
                        .toBe(false, 'should not to have the class has-danger-wBorder');
                    // Act
                    input.triggerEventHandler('blur', null);
                    fixture.detectChanges();
                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger-wBorder'))
                        .toBeTruthy('should to have the class has-danger-wBorder');
                });

                // test 27
                it('Should to be valid when setting a value', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    let divGroup = fixture.debugElement.query(By.css('.form-group'))!;

                    // Act
                    expect(input.nativeElement.classList.contains('ng-touched'))
                        .toBe(false, 'should to be as untouched');

                    input.nativeElement.value = 'a value';
                    input.nativeElement.dispatchEvent(new Event('input'));
                    fixture.detectChanges();

                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger-wBorder'))
                        .toBe(false, 'should not to have the class has-danger-wBorder');
                    // Act
                    input.triggerEventHandler('blur', null);
                    fixture.detectChanges();
                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger-wBorder'))
                        .toBe(false, 'should not to have the class has-danger-wBorder');

                });

            });

            describe('If it is as not required', () => {
                // test 28
                it('Should to be valid when not setting a value', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    let divGroup = fixture.debugElement.query(By.css('.form-group'))!;

                    // Act
                    input.triggerEventHandler('focus', null);
                    fixture.detectChanges();

                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger-wBorder'))
                        .toBe(false, 'should not to have the class has-danger-wBorder');

                    // Act
                    input.triggerEventHandler('blur', null);
                    fixture.detectChanges();

                    // Assert
                    expect(divGroup.nativeElement.classList.contains('has-danger-wBorder'))
                        .toBe(false, 'should to have the class has-danger-wBorder');
                });
            });

            describe('If it has a placeholder', () => {
                beforeEach(async(() => {
                    // Arrange
                    fixture.destroy();
                    TestBed.resetTestingModule();
                    fixture = createComponent(CheInputF9Component);
                    fixture.detectChanges();
                }));
                // test 29
                it('Should to have the placeholder', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    // Act
                    fixture.componentInstance.placeholder = 'a placeholder';
                    fixture.detectChanges();
                    // Assert
                    expect(input.nativeElement.placeholder)
                        .toBe('a placeholder', 'should to have the value "a placeholder"');
                });
            });


            describe('If it is disabled', () => {
                beforeEach(async(() => {
                    // Arrange
                    fixture.destroy();
                    TestBed.resetTestingModule();
                    fixture = createComponent(CheInputF11Component);
                    fixture.detectChanges();
                }));
                // test 30
                it('Should show as a disabled input', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    // Act
                    // Assert
                    expect(input.nativeElement.disabled).toBeTruthy('should to be a disabled input');
                });

                // test 31
                it('Should not to allow to make focus or click', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;

                    // Act
                    input.triggerEventHandler('click', null);
                    fixture.detectChanges();

                    // Act
                    let numberClass = input.nativeElement.classList.length;
                    input.triggerEventHandler('focus', null);
                    fixture.detectChanges();

                    // Assert
                    expect(numberClass).toBe(input.nativeElement.classList.length, 'Should not to change the classes in the input');
                });
            });

            describe('If it is readOnly', () => {
                beforeEach(async(() => {
                    // Arrange
                    fixture.destroy();
                    TestBed.resetTestingModule();
                    fixture = createComponent(CheInputF12Component);
                    fixture.detectChanges();
                }));
                // test 32
                it('Should not show as a readOnly input', () => {
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    // Act
                    // Assert
                    expect(input.nativeElement.readOnly).toBeTruthy('should to be a readonly input');
                });

                // test 33
                it('Should not to allow to make focus or click', () => { // no funciona
                    // Arrange
                    let input = fixture.debugElement.query(By.css('input'))!;
                    // Act
                    input.triggerEventHandler('click', null);
                    fixture.detectChanges();

                    // Act
                    let numberClass = input.nativeElement.classList.length;
                    input.triggerEventHandler('focus', null);
                    fixture.detectChanges();

                    // Assert
                    expect(numberClass).toBe(input.nativeElement.classList.length, 'Should not to change the classes in the input');
                });
            });




        });// END default or border

    }); // END text


    describe('If is of type number', () => {
        beforeEach(async(() => {
            // Arrange
            fixture = createComponent(CheInputF2Component);
            fixture.detectChanges();
        }));

        // test 34
        it('Should to be of type number', () => {
            // Act
            let input = fixture.debugElement.query(By.css('input'))!;
            // Assert
            expect(input.properties.type).toBe('number');
        });

        // test 35
        it('Should to allow only to add numbers', () => {
            // Act
            let input = fixture.debugElement.query(By.css('input'))!;

            input.nativeElement.value = 'algo';
            input.nativeElement.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            // Assert
            expect(fixture.componentInstance.value).toBe('');

            // Act
            input.nativeElement.value = 123;
            input.nativeElement.dispatchEvent(new Event('input'));
            fixture.detectChanges();

            // Assert
            expect(fixture.componentInstance.value).toBe('123');
        });

    });

    describe('If is of type password', () => {
        beforeEach(async(() => {
            // Arrange
            fixture = createComponent(CheInputF3Component);
            fixture.detectChanges();
        }));

        // test 36
        it('Should to be of type password', () => {
            // Act
            let input = fixture.debugElement.query(By.css('input'))!;
            // Assert
            expect(input.properties.type).toBe('password');
        });

    });


});


function createComponent<T>(component: Type<T>,
                            providers: Provider[] = [],
                            imports: any[] = [],
                            declarations: any[] = []): ComponentFixture<T> {
    TestBed.configureTestingModule({
        imports: [
            FormsModule,
            ...imports
        ],
        declarations: [CheInputComponent, component, ...declarations],
        providers,
    }).compileComponents();

    return TestBed.createComponent<T>(component);
}

// fixture 1
@Component({
    template: `
        <che-input design="borderless" color="success" [label]="label"></che-input>`
})
class CheInputF1Component {
    label: string = 'Label';
}

// fixture 2
@Component({
    template: `
        <che-input type="number" [(ngModel)]="value"></che-input>`
})
class CheInputF2Component {
    value;
}

// fixture 3
@Component({
    template: `
        <che-input type="password"></che-input>`
})
class CheInputF3Component {
}

// fixture 4
@Component({
    template: `
        <che-input design="borderless" color="color" label="The label" [required]="true" [(ngModel)]="value" name="name"></che-input>`
})
class CheInputF4Component {
    value;
}

// fixture 5
@Component({
    template: `
        <che-input design="borderless" color="color" label="The label" placeholder="this is a placeholder"></che-input>`
})
class CheInputF5Component {
}

// fixture 6
@Component({
    template: `
        <che-input design="borderless" color="color" label="The label" [disabled]="true"></che-input>`
})
class CheInputF6Component {
    // disabled = true;
}

// fixture 7
@Component({
    template: `
        <che-input design="borderless" color="color" label="The label" [readonly]="true"></che-input>`
})
class CheInputF7Component {
}

// fixture 8
@Component({
    template: `
        <che-input color="color" [label]="label" [(ngModel)]="value"></che-input>`
})
class CheInputF8Component {
    label;
    value;
}

// fixture 9
@Component({
    template: `<che-input type="text" [(ngModel)]="value" name="something" label="The label" [required]="true" [placeholder]="placeholder"></che-input>`
})
class CheInputF9Component {
    placeholder;
    value;
}

// fixture 10
@Component({
    template: `
        <che-input color="color" label="The label" placeholder="this is a placeholder"></che-input>`
})
class CheInputF10Component {
}

// fixture 11
@Component({
    template: `
        <che-input color="color" label="The label" [disabled]="true"></che-input>`
})
class CheInputF11Component {
}

// fixture 12
@Component({
    template: `
        <che-input color="color" label="The label" [readonly]="true"></che-input>`
})
class CheInputF12Component {
}

// fixture 13
@Component({
    template: `
        <che-input design="borderless" label="The label"></che-input>`
})
class CheInputF13Component {
}

// fixture 14
@Component({
    template: `
        <che-input label="The label"></che-input>`
})
class CheInputF14Component {
}



