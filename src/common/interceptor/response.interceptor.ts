import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


export interface Response<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        return{
          statusCode: data?.statusCode || 200,
          success: true,
          message: data?.message || "Data retrieved successfully.",
          data: data?.result || data,
        }
      }),
      catchError(err => {
        console.log("err", err)
        err?.response ? err.response['success'] = false : ''
        return throwError(() => err)
      }
      ),
    );
  }
}