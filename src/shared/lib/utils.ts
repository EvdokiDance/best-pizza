import classnames from 'classnames';
import { ArgumentArray } from 'classnames';

export function cn (...args : ArgumentArray) : string {
    return classnames(args);
}