declare module IC.ClientApi {
    export interface IRejecter {
        reject<T>(reason?: any): IPromise<T>;
    }

    export interface IPromise<T> {
        then<TResult>(successCallback: (promiseValue: T) => IPromise<TResult> | TResult,
            errorCallback?: (reason: any) => any,
            notifyCallback?: (state: any) => any): IPromise<TResult>;
        catch<TResult>(onRejected: (reason: any) => IPromise<TResult> | TResult): IPromise<TResult>;
        finally(finallyCallback: () => any): IPromise<T>;
    }

    export interface IRequestInfo {
        name: string;
        url: string;
        method: string;
    }

    export interface IHttpService {
        execute<T>(requestInfo: IRequestInfo, parameters?: any, callback?: Function): IPromise<T>;
        clearCache(requestInfo: IRequestInfo, parameters?: any): void;
        updateCache<T>(requestInfo: IRequestInfo, parameters: any, value: T): void;
        resetCache(): void;
    }
}