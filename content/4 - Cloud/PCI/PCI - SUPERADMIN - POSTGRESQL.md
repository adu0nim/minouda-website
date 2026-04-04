---
title: PCI - SUPERADMIN - POSTGRESQL
updated: 2026-03-16 13:26:01Z
created: 2026-03-16 13:25:44Z
latitude: 48.856614
longitude: 2.3522219
altitude: 0
draft: true
---

PCI - SUPERADMIN - POSTGRESQL

Hello @sachinnnaik, and thank you for your feedback.

A subset of administration operations could be performed by the special avnadmin user.

    to terminate queries, you could use SELECT pg_terminate_backend(pid);.
    for user administration with CREATE USER/ROLE and DROP USER/ROLE plus permissions GRANT and REVOKE.
    for vacuuming, you indeed cannot use directly the VACUUM statement, but you could configure the autovacuum behaviour using advanced parameters.


source https://github.com/ovh/public-cloud-roadmap/issues/551
