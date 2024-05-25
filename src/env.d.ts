/// <reference types="astro/client" />

type KVNamespace = import("@cloudflare/workers-types").KVNamespace;
type Queues = import("@cloudflare/workers-types").Queue;
type ENV = {
  // replace `MY_KV` with your KV namespace
  test: KVNamespace;

  queue: Queues;
};

// use a default runtime configuration (advanced mode).
type Runtime = import("@astrojs/cloudflare").Runtime<ENV>;
declare namespace App {
  interface Locals extends Runtime {}
}

