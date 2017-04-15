(ns puzzle.move
  (:require [puzzle.model :as model]))

;; set the dimensions of the puzzle
(def size {:x 4 :y 4})

(defn oneUp [coor]
  ;;(def x (:x coor) )
  ;;(def y (:y coor) )
  (let [x (:x coor) y (:y coor)]
    (if (== y 0)
      nil
      {:x x :y (- y 1)} )))

(defn oneDown [coor]
  ;;(let x (:x coor) )
  ;;(let y (:y coor) )
  (let [x (:x coor) y (:y coor)]
    (if (== y (:y model/size))
      nil
      {:x x :y (+ y 1)} )))

(defn oneLeft [coor]
  (let [x (:x coor) y (:y coor)]
    (if (== x 0)
      nil
      {:x (- x 1) :y y} )))

(defn oneRight [coor]
  (let [x (:x coor) y (:y coor)]
    (if (== x (:x model/size))
      nil
      {:x (+ x 1) :y y} )))

;; create vecs for x and y dimensions
(defn findMove [vecs coord]
 (def coor 7 )
  (+ 8 coor))
