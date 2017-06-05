(ns puzzle.dom_sizes
  (:require
    [puzzle.model :as model]
    [dommy.core :as dommy :refer-macros [sel sel1]]
    ))


(defn getTileHeight []
    (/ 100 (get model/size :y))
  )

(defn getTileWidth []
    (/ 100 (get model/size :x))
  )

(defn getTileLeft [tile]
    (* (get-in tile [:butIs :x]) (getTileWidth))
  )

(defn getTileTop [tile]
    (* (get-in tile [:butIs :y]) (getTileHeight))
  )
