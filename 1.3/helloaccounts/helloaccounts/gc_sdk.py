"""Interact with Google Cloud SDK"""
from google.cloud import storage


def interact():
    storage_client = storage.Client(project='training-main')
    buckets = storage_client.list_buckets()
    for bucket in buckets:
        print(bucket.name)
