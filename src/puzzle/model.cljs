(ns puzzle.model
  (:require ))

(def size {:x 4 :y 4})

(defn createTile [x y]
  {:shouldBe {:x x :y y} :butIs {:x x :y y}})

(def dims {:x (vec(range (:x size)))
           :y (vec(range (:y size)))
                                    })

(defn combineItemListWithFunc [func list item]
  (mapv (fn [p] (func item p)) list))

(defn lift2 [func list1 list2]
  (mapv (fn [list1_p] (combineItemListWithFunc func list2 list1_p)) list1))

(def coords (lift2 createTile (:x dims) (:y dims) ))

;;(defn combineItemList [item list]
;;  map createTile itemList)

;;(defn invokeWithItem [item]
;;  (defn))
