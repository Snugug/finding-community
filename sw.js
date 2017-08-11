/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/css/style.css","61897b71d9a1ce6723d3d7a2df32a08c"],["/fed/intro/index.html","74a8b151f4e3718432804d29fee34529"],["/fed/model/index.html","9be030d1bb5e15404621c7ad4d5cde8c"],["/fed/overview/index.html","93b6c2dab03f1fcfc6a6d1b552939ee1"],["/feducation/feducation-funfacts/index.html","e3f176ef8d162da3e0109c7d10e83acc"],["/feducation/feducation-global/index.html","5f3d81642690f02727b89cdc481fa680"],["/feducation/feducation-goingglobal/index.html","c07064f4f66b64f7f0ef4cefa675d5b1"],["/feducation/feducation-guests/index.html","bf5d7c24633a5c8f9d242a52c6fc32df"],["/feducation/feducation-history/index.html","80f2af60631b003c6dcb2e54d9ab4c65"],["/feducation/feducation-internalguests/index.html","14051e5e8cc8999b030b4f03937e5d46"],["/feducation/feducation-intro/index.html","b72747329a0b6ddfe7c207bb23b2e952"],["/feducation/feducation-quote/index.html","fa437b93276434fabd53eebd79d45c2a"],["/feducation/feducation-quote2/index.html","c301e99225806f20776cf291411e7956"],["/feducation/feducation-stats/index.html","bdcf54593ab748c58ea086a3bc4c1f66"],["/feducation/feducation-whatis/index.html","c94ffdd00a941500f49765b1eddaf4f6"],["/hackademy/all/index.html","d21ca7bbdf353a6475725b3a9ee76309"],["/hackademy/damon/index.html","22dda0b143783192b6dccb138dffc8c8"],["/hackademy/discovery/index.html","61459b5061879e9825b432bf235be1eb"],["/hackademy/evolution/index.html","bed5f63df58067f78c73c3ac44f0bb38"],["/hackademy/hackathon/index.html","3664436e041e73dedff9f5e6ffaf050f"],["/hackademy/overview/index.html","63db959679f11546a34ba6f92a033937"],["/hackademy/presentations/index.html","2a33080d44881e5dfe0a4e8dc167b996"],["/hackademy/talks/index.html","1fe97ab3aba93ca5d2ff2a59e214c0a2"],["/hackademy/title/index.html","e42e546e811a0b23e7f90bbce7c9e746"],["/hackademy/workshops/index.html","9a84ceba8185680b35f23d72a4a85534"],["/images/bee.svg","f3a32b3a16151265487e8ad70f65fa5e"],["/images/damon.jpg","4449d3fcf1f0fa70e67c4394c78bd660"],["/images/empathy.jpg","c53ec667fa3cce58511106fc61d1f616"],["/images/fed.svg","2577646da1cc7b2f268bad6a47575a19"],["/images/feducation.jpg","d58f8bdb4239b7b9a799e771f8973ac8"],["/images/hackademy.jpg","cf2e7e491ca47d2ca89dab88c1a34146"],["/images/hacking.jpg","6c61db1f033bd34cc2678393a74b2df5"],["/images/jessica.jpg","ab1a5427bffde986e9540a7e3764d7d2"],["/images/pie-chart.svg","f332fdb4a032fdd2b1bda73dc557ad2a"],["/images/presenting.jpg","ff2c527837b5afd0bc188d91bfb37060"],["/images/sam.jpg","80dda7e18f40099396d64f7efc225e38"],["/index.html","d6b9b9bca3d372409a00d6e8a325c7c9"],["/intro/index.html","a6a4d0b56a7b36bebb986df245c71740"],["/js/main.js","94080abd5956b624891dae7a46b2a95e"],["/quote/index.html","783de4af23d1382f394d49634bc97711"],["/story/actions/index.html","55b9b1877c7fe093954ef4d818b1a535"],["/story/anchored/index.html","1e44d7650047905cfbdab41c0f092a75"],["/story/begins/index.html","9a37240e4f38c4ea039531170cca0908"],["/story/fade/index.html","ce757f681f0bb651771164ece6fc265c"],["/story/individuals/index.html","747a65a53ebee8782e82728729791c64"],["/story/vision/index.html","9021e073f11cb75a8fe8fafc0b935a8a"],["/thanks/index.html","0c2686de37792d633a8385318673615d"],["/us/index.html","9be10012acf4433103c09f44659c8783"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







