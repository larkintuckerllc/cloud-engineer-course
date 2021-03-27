"""Interact with Google Cloud SDK"""
from google.cloud import storage


def interact():
    storage_client = storage.Client()
    buckets = storage_client.list_buckets()
    for bucket in buckets:
        print(bucket.name)
