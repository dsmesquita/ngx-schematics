import Cmf from 'cmf-lbos';
import { GenericCreate, GetContextHelper } from 'cmf-core';

export interface ActionContexts {
    'Generic.Edit': GenericCreate<Cmf.Foundation.BusinessObjects.Entity>;
}

export type GetContext<T extends keyof ActionContexts> = GetContextHelper<ActionContexts, T>;