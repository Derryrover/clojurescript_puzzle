(ns puzzle.dom_sizes
  (:require
    [puzzle.model :as model]
    [dommy.core :as dommy :refer-macros [sel sel1]]
    ))

(defonce busy (atom false))
(defonce referenceToInterval (atom nil))     

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

(defn animate [id style oldTile newTile]
   ( let [ frames 30
           duration 400
           oldTop (getTileTop oldTile)
           newTop (getTileTop newTile)
           oldLeft (getTileLeft oldTile)
           newLeft (getTileLeft newTile)
           stepDuration ( / duration frames)
           stepTop ( / (- newTop oldTop ) frames)
           stepLeft ( / (- newLeft oldLeft) frames)
           currentStep (atom 0)]

      (defn forStep []
          (let [oldStep (deref currentStep)
                newStep (+ oldStep 1)
                tempTop ( + ( * newStep stepTop ) oldTop)
                tempLeft ( + ( * newStep stepLeft ) oldLeft)]
          (reset! currentStep newStep)
          
          (if (> newStep frames)
          ((fn [] (.clearInterval js/window (deref referenceToInterval)(reset! busy false))))
          (dommy/set-attr! (sel1 (clojure.string/join ["#" id])) :style (clojure.string/join [style "left:" tempLeft "%;" "top:" tempTop "%;" ]))
          )
        )
        )
         
        (reset! busy true)
        (let [interval (.setInterval js/window forStep stepDuration)]
          (reset! referenceToInterval interval)
        )
     )
  )
