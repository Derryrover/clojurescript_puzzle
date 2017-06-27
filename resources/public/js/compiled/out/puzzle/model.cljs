(ns puzzle.model
  (:require ))

;; set the dimensions of the puzzle
(def size {:x 4 :y 4})

;; create vecs for x and y dimensions
(def dims {:x (vec(range (:x size)))
           :y (vec(range (:y size)))
                                    })

;; create single tile from x and y coordinate
(defn createTile [x y]
  {:shouldBe {:x x :y y} :butIs {:x x :y y}})

;; change f [1 2 3] 4 into [(f 1 4) (f 2 4) (f 3 4)]
;; needed by lift2 function
(defn combineItemListWithFunc [func list item]
  (mapv (fn [p] (func item p)) list))

;; concatting two vectors
(defn concat2Vectors [ list1 list2]
  (if (= list2 [])
      list1
      (concat2Vectors (conj list1 (nth list2 0))  (subvec list2 1) ) ))
;;(def concatted (concat2Vectors [1 2 3] [5 6 7] ))

;; flatten vector of vectors
;; neede by lift2
(defn flattenVecs [vecs]
   (reduce-kv (fn [init k v] (concat2Vectors init v)) [] vecs))
;;(def flatted (flattenVecs [[1 2 3] [5 6 7] [10 11 12]] ))

;; lif2 haskell style
(defn lift2 [func list1 list2]
  ( flattenVecs
    (mapv (fn [list1_p] (combineItemListWithFunc func list2 list1_p)) list1)
     )
     )

;; all tyles of the puzzle
(def coords (lift2 createTile (:x dims) (:y dims) ))

(defn getFromCollection [vecs coor]
  (let [filtered (filterv (fn [vec] (= coor (:butIs vec))) vecs)]
    (if (= [] filtered)
      nil
      (nth filtered 0))
       ))

(defn excludeFromCollection [vecs coor]
 (filterv (fn [vec] (not= coor (:butIs vec))) vecs))


;;(def tiles (excludeFromCollection coords {:x 0 :y 0 }))
;;(def tiles (excludeFromCollection coords {:x 2 :y 2 }))
(def tiles (excludeFromCollection coords {:x 3 :y 3 }))
