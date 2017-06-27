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

(defn animate [id style oldTile newTile]
   ( let [ frames 40
           duration 500
           oldTop (getTileTop oldTile)
           newTop (getTileTop newTile)
           oldLeft (getTileLeft oldTile)
           newLeft (getTileLeft newTile)
           stepDuration ( / duration frames)
           stepTop ( / (- newTop oldTop ) frames)
           stepLeft ( / (- newLeft oldLeft) frames)
           currentStep (atom 0)]

      ;;(let [
        ;;intervalStat
        ;;]

      ;;)
      (defn forStep []
          (let [oldStep (deref currentStep)
                newStep (+ oldStep 1)
                tempTop ( + ( * newStep stepTop ) oldTop)
                tempLeft ( + ( * newStep stepLeft ) oldLeft)]
          (reset! currentStep newStep)
          (.log js/console "interval runs")
          ;;(.log js/console oldStep)
          ;;(.log js/console oldTop)
          ;;(.log js/console (get oldTile :y))
          ;;(.log js/console (get oldTile :x))
          ;;(.log js/console oldLeft)
          ;;(.log js/console stepLeft)
          ;;(.log js/console tempLeft)
          ;;(.log js/console (getTileLeft oldTile))
          ;;(.log js/console (get oldTile :y))
          ;;(if (= newStep oldTop)
          (if (> newStep frames)
          ;;(clearInterval(id) (.clearInterval js/window forStep stepDuration))
          (.log js/console "clear interval but how keep ref to var?")
          (dommy/set-attr! (sel1 (clojure.string/join ["#" id])) :style (clojure.string/join [style "left:" tempLeft "%;" "top:" tempTop "%;" ]))
          )
          ;;(dommy/set-attr! (sel1 (clojure.string/join ["#" id])) :style (clojure.string/join [style "left:" tempLeft "%;" "top:" tempTop "%;" ]))
        )
        )

        (let [interval (.setInterval js/window forStep stepDuration)]
          ( .setTimeout js/window (fn [] (.clearInterval js/window interval)) (* 1.2  duration))
        )

        ;;setInterval(frame, 10);


     )
  )
