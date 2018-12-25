package main

import (
    "net/http"
)

func someFunc(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "index.html")
}

func main() {
    http.HandleFunc("/", someFunc)
    http.ListenAndServe(":8080", nil)
}
