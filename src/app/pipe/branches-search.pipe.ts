import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'branchesSearch'
})
export class BranchesSearchPipe implements PipeTransform {
  
  transform(value: any, input: string) {
    if (input) {

        input = input.toLowerCase();

        return value.filter(function (el: any) {
            return el.branch_name.toLowerCase().indexOf(input) > -1;
        })
    }
    return value;
}


}
