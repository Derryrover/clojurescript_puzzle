(ns puzzle.move
  (:require [puzzle.model :as model]))

;; currently not used
(defn functor1 [func parm1]
  (if (= nil parm1)
    nil
    (func parm1) ))

(defn oneUp [coor]
  (let [x (:x coor) y (:y coor)]
    (if (= y 0)
      nil
      {:x x :y (- y 1)} )))

(defn oneDown [coor]
  (let [x (:x coor) y (:y coor)]
    (if (= y (- (:y model/size) 1 ))
      nil
      {:x x :y (+ y 1)} )))

(defn oneLeft [coor]
  (let [x (:x coor) y (:y coor)]
    (if (= x 0)
      nil
      {:x (- x 1) :y y} )))

(defn oneRight [coor]
  (let [x (:x coor) y (:y coor)]
    (if (= x ( - (:x model/size) 1))
      nil
      {:x (+ x 1) :y y} )))

(defn canMoveTo [vecs coord]
  (if (= coord nil)
    false
    (if (= nil (model/getFromCollection vecs coord))
      true
      false
    )
  )
)

;; find possible move for coord in vector collection
;; returns string up down left right or nil
(defn findMove [vecs coord]
(let [self  (model/getFromCollection vecs coord)
      up    (canMoveTo vecs (oneUp coord))
      down  (canMoveTo vecs (oneDown coord))
      left  (canMoveTo vecs (oneLeft coord))
      right (canMoveTo vecs (oneRight coord))
      ]
      (if (= self nil)
        nil
        (if (= up true)
          "up"
          (if (= down true)
            "down"
            (if (= left true)
              "left"
              (if (= right true)
                "right"
                nil
              )
            )
          )
        )
      )
  )
 )

(defn adaptCoord [coord move]
  (let [x (:x coord) y (:y coord)]
  (case move
    "up"    (assoc coord :y (- y 1 ))
    "down"  (assoc coord :y (+ y 1 ))
    "left"  (assoc coord :x (- x 1 ))
    "right" (assoc coord :x (+ x 1 ))
    coord
    )
    )
  )

(defn doMove [vecs coord move]
    (let [excluded (model/excludeFromCollection vecs coord)
          item     (model/getFromCollection vecs coord)
          adaptedCoord (adaptCoord coord move)
          ]
          (if item
            (conj excluded (assoc item :butIs adaptedCoord))
            vecs;;7 ;; what is this ?? do we just assume this never happens
            )
      )
  )

  (defn moveCoord [vecs coord]
    (let [move (findMove vecs coord)]
      (if (= nil move)
        vecs
        (doMove vecs coord move)
      )
    )
  )
