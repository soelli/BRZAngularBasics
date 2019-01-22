import { Pipe, PipeTransform, ElementRef } from "@angular/core";

@Pipe({
  name: "checkedpipe"
})
export class CheckPipe implements PipeTransform {
  transform(checked: boolean): any {
    let result: string = checked
      ? '<i class="material-icons">done_outline</i>'
      : "";
    return result;
  }
}
