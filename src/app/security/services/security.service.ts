/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5d6cf8a94a4f7c744b6c964c
*
* You will get 10% discount for each one of your friends
* 
*/
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from 'src/app/domain/choonti_db/user';
import { shareReplay, map, tap } from 'rxjs/operators';

/**
 * Manage rest API about security
 */
@Injectable()
export class SecurityService {
    contextUrl = environment.endpoint;
    constructor(
        private http: HttpClient,
    ) { }

    /**
     * Login by username and SHA-3 password
     *
     * @param {string} username username for login
     * @param {string} password password in SHA-3
     * @param {boolean} remember store token in local storage
     * @returns {Observable<User>} logged user
     */
    login(username: string, password: string, remember: boolean): Observable<User> {
        return this.http.post<User>(this.contextUrl + '/login', { username: username, password: password })
            .pipe(
                tap(user => this.setSession(user.token)),
                tap(user => { if (remember) this.setLocal(user.token); }),
                map(user => user),
                shareReplay()
            );
    }

    /**
     * Verify JWT token
     *
     * @param {string} token JWT token to verify
     * @returns {Observable<any>} logged user or error message
     */
    verifyToken(token: string): Observable<any> {
        return this.http.post<any>(this.contextUrl + '/verifyToken', { token: token })
            .pipe(
                map(user => user)
            );
    }

    /**
     * Change password of current user
     *
     * @param {string} passwordNew New password to set in SHA-3
     * @param {string} passwordOld Old password to check in SHA-3
     * @returns {Observable<void>} Success or error
     */
    changePassword(passwordNew: string, passwordOld: string): Observable<void> {
        return this.http
            .post<void>(this.contextUrl + '/changePassword', {
                passwordNew: passwordNew,
                passwordOld: passwordOld
            })
            .pipe(
                map(response => response)
            );
    }

    /**
     * Set token in sessionStorage
     *
     * @private
     * @param {*} token JWT token to set in sessionStorage
     */
    private setSession(token) {
        sessionStorage.setItem('token', token);
    }

    /**
     * Set token in localStorage
     *
     * @private
     * @param {*} token JWT token to set in localStorage
     */
    private setLocal(token) {
        localStorage.setItem('token', token);
    }

}
