import { immerable } from 'immer';
import { createAction } from 'redux-actions';
/**
 * @type D - loadable Data payload type
 * @type R - Request type of loadable data
 */
export interface IData<D, R> {
    request: R | undefined;
    payload: D | undefined;
}

interface ILoadableData<D, R> extends IData<D, R> {
    loading: boolean | undefined;
    loaded: boolean | undefined;
    error: Error | undefined;
}

export interface PersistableData<D, R> extends ILoadableData<D, R> {
    persistUntil: NonNullable<number>;
}

export class LoadableData<D, R = void> implements ILoadableData<D, R> {
    [immerable] = true;

    request: R | undefined;
    payload: D | undefined;
    loading: boolean | undefined;
    loaded: boolean | undefined;
    error: Error | undefined;

    withPersist(persistUntil: NonNullable<number>): PersistableData<D, R> {
        return {
            request: this.request,
            payload: this.payload,
            loading: this.loading,
            loaded: this.loaded,
            error: this.error,
            persistUntil: Date.now() + persistUntil,
        };
    }

    withLoading(request?: R) {
        return LoadableData.create<D, R>({
            request,
            loading: true,
            loaded: this.loaded,
            payload: this.payload,
            error: undefined,
        });
    }

    // verify you set the request object with the withLoading/loading creators, otherwise responses will be ignored
    withPayloadIfRequestEquals(requestAndResult: LoadedResult<R, D>) {
        const { request, result } = requestAndResult;
        if (request !== this.request) {
            return this;
        }
        return LoadableData.payload<D, R>(result, request);
    }

    withErrorIfRequestEquals(requestAndResult: LoadedResult<R, Error>) {
        const { request, result } = requestAndResult;
        if (request !== this.request) {
            return this;
        }
        return LoadableData.error<D, R>(result);
    }

    static loading<D, R = void>(request?: R) {
        return LoadableData.create<D, R>({
            request,
            loading: true,
            loaded: true,
            payload: undefined,
            error: undefined,
        });
    }

    static payload<D, R = void>(payload: D, request?: R) {
        return LoadableData.create<D, R>({
            request,
            payload,
            loading: false,
            loaded: true,
            error: undefined,
        });
    }

    static error<D, R = void>(error: Error | undefined, request?: R) {
        return LoadableData.create<D, R>({
            request,
            error,
            payload: undefined,
            loading: false,
            loaded: true,
        });
    }

    private static create<D, R>(values: ILoadableData<D, R>) {
        const result = new LoadableData<D, R>();
        result.request = values.request;
        result.payload = values.payload;
        result.loading = values.loading;
        result.loaded = values.loaded;
        result.error = values.error;
        return result;
    }
}

/**
 * Helper function for creating redux actions that can be dispatched when starting or completed loading
 * @type <I> - Input(request) type used for loading
 * @type <O> - Output(response) type in case of successful loading
 */
export function loadableDataActions<I, O, E = Error>(actionTypePrefix: string) {
    const request = createAction<I>(actionTypePrefix + '_REQUEST');
    const success = createAction<O>(actionTypePrefix + '_SUCCESS');
    const error = createAction<E>(actionTypePrefix + '_ERROR');
    return {
        request,
        success,
        error,
    };
}

export function loadableDataActionsWithRequest<I, O>(actionTypePrefix: string) {
    return loadableDataActions<I, LoadedResult<I, O>, LoadedResult<I, Error>>(actionTypePrefix);
}

export interface LoadedResult<I, O> {
    request: I;
    result: O;
}
