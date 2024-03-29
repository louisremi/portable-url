/**
 * This project is licensed under the MIT license.
 * Copyrights are respective of each contributor listed at the beginning of each definition file.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import { ParsedUrlQuery, ParsedUrlQueryInput } from 'querystring';

declare module 'url' {
  // Input to `url.format`
  interface UrlObject {
    auth?: string | null;
    hash?: string | null;
    host?: string | null;
    hostname?: string | null;
    href?: string | null;
    path?: string | null;
    pathname?: string | null;
    protocol?: string | null;
    search?: string | null;
    slashes?: boolean | null;
    port?: string | number | null;
    query?: string | null | ParsedUrlQueryInput;
  }

  // Output of `url.parse`
  interface Url {
    auth: string | null;
    hash: string | null;
    host: string | null;
    hostname: string | null;
    href: string;
    path: string | null;
    pathname: string | null;
    protocol: string | null;
    search: string | null;
    slashes: boolean | null;
    port: string | null;
    query: string | null | ParsedUrlQuery;
  }

  interface UrlWithParsedQuery extends Url {
    query: ParsedUrlQuery;
  }

  interface UrlWithStringQuery extends Url {
    query: string | null;
  }

  function parse(urlStr: string): UrlWithStringQuery;
  function parse(
    urlStr: string,
    parseQueryString: false | undefined,
    slashesDenoteHost?: boolean
  ): UrlWithStringQuery;
  function parse(
    urlStr: string,
    parseQueryString: true,
    slashesDenoteHost?: boolean
  ): UrlWithParsedQuery;
  function parse(
    urlStr: string,
    parseQueryString: boolean,
    slashesDenoteHost?: boolean
  ): Url;

  function format(URL: URL, options?: URLFormatOptions): string;
  function format(urlObject: UrlObject | string): string;
  function resolve(from: string, to: string): string;

  function domainToASCII(domain: string): string;
  function domainToUnicode(domain: string): string;

  /**
   * This function ensures the correct decodings of percent-encoded characters as
   * well as ensuring a cross-platform valid absolute path string.
   * @param url The file URL string or URL object to convert to a path.
   */
  function fileURLToPath(url: string | URL): string;

  /**
   * This function ensures that path is resolved absolutely, and that the URL
   * control characters are correctly encoded when converting into a File URL.
   * @param url The path to convert to a File URL.
   */
  function pathToFileURL(url: string): URL;

  interface URLFormatOptions {
    auth?: boolean;
    fragment?: boolean;
    search?: boolean;
    unicode?: boolean;
  }

  class URL {
    constructor(input: string, base?: string | URL);
    hash: string;
    host: string;
    hostname: string;
    href: string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    readonly searchParams: URLSearchParams;
    username: string;
    toString(): string;
    toJSON(): string;
  }

  class URLSearchParams implements Iterable<[string, string]> {
    constructor(
      init?:
        | URLSearchParams
        | string
        | { [key: string]: string | string[] | undefined }
        | Iterable<[string, string]>
        | Array<[string, string]>
    );
    append(name: string, value: string): void;
    delete(name: string): void;
    entries(): IterableIterator<[string, string]>;
    forEach(
      callback: (value: string, name: string, searchParams: this) => void
    ): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    keys(): IterableIterator<string>;
    set(name: string, value: string): void;
    sort(): void;
    toString(): string;
    values(): IterableIterator<string>;
    [Symbol.iterator](): IterableIterator<[string, string]>;
  }
}

export {};
