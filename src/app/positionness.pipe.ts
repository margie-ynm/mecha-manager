import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'positionness'
})
export class PositionnessPipe implements PipeTransform {

  transform(input: Member[], desiredPositionness) {
    var output: Member[] = [];
    if(desiredPositionness === "externalDirector") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "External Director") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPositionness === "internalDirector") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "Internal Director") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPositionness === "retentionRecruitment") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "Retention and Recruitment") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPositionness === "budgetDirector") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].position === "Budget Director") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
