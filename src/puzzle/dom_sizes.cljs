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
    (* (get tile :x) (getTileWidth))
  )

(defn getTileTop [tile]
    (* (get tile :y) (getTileHeight))
  )

(defn getAnimStyle [oldTile newTile]
    (let [
      oldTop (getTileTop oldTile)
      newTop (getTileTop newTile)
      oldLeft (getTileLeft oldTile)
      newLeft (getTileLeft newTile)
      ]
      (clojure.string/join ["left:" newLeft "%;" "top:" newTop "%;"])
      )
  )
