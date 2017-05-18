import {BaseMetaMember} from './BaseMetaMember';
import {Mutability, Requirement} from './MetaMember';

export class Primitive extends BaseMetaMember {

  constructor(_name: string,
              _isRequired?: Requirement,
              _isMutable?: Mutability) {
    super(_name, _isRequired, _isMutable);
  }
}